const { createApp } = Vue;

createApp({
    data() {
        return {
           titolo: 'La mia Prima App Vue!',
           nome_prodotto: 'regalo',
           costo: '20'
        }
    }
}).mount('#app');

//document.getElementById('app')._vnode.component.proxy.contatore = 10
