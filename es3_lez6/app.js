const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            modaleAperta: false
        };
    },
    methods: {
        apriModale() {
            this.modaleAperta = true;
        }
    }
});

// 🔹 Componente figlio: modal-dialog
app.component('modal-dialog', {
    template: `
        <div class="overlay">
            <div class="modal">
                <h3>Questa è una modale</h3>
                <p>Contenuto della finestra modale...</p>
                <button @click="$emit('chiudi')">Chiudi</button>
            </div>
        </div>
    `
});

app.mount('#app');
