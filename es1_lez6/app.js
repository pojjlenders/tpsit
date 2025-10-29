const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            prodotti: [
                { id: 1, nome: 'Mela', prezzo: 0.50 },
                { id: 2, nome: 'Banana', prezzo: 0.30 },
                { id: 3, nome: 'Pera', prezzo: 0.50 },
                { id: 4, nome: 'Arancia', prezzo: 0.25 },
            ]
        }
    },
    
    },
);

app.component('product-card', {
    props: {
        nome: String,
        prezzo: Number
    },

    template: `
      <div class="box">
        <span>{{ nome }} - {{ prezzo }} €</span>&nbsp;&nbsp;
      </div>
    `
});
app.mount('#app');

