const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/post', (req, res) => {
    const newPost = req.body;

    fs.readFile('post.json', 'utf8', (err, data) => {
        const posts = err ? [] : JSON.parse(data);
        posts.push(newPost);

        fs.writeFile('post.json', JSON.stringify(posts, null, 2), (err) => {
            if (err) return res.send("Errore salvataggio");
            res.send("Dato salvato! <a href='/post'>Torna al form</a>");
        });
    });
});

app.listen(3000, () => console.log('Server attivo su http://localhost:3000/post'));