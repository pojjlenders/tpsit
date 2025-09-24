const { createApp } = Vue;

createApp({
    data() {
        return {
           titolo: 'La mia Prima App Vue!',
           nome: 'Daniele',
           cognome: 'Urso',
           citta: 'Nichelino',
        }
    }
}).mount('#app');

//document.getElementById('app')._vnode.component.proxy.contatore = 10
