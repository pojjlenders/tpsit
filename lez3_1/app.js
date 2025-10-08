const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: 'Un normale messaggio',
        }
    },
    methods:{
        cambia(){
            this.messaggio = 'Hai Cliccato il Bottone!';
        }
    }
}).mount('#app');