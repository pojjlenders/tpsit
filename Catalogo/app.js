const { createApp } = Vue;

createApp({
  data() {
    return {
      prodotti: [
        { id: 1, nome: 'Laptop', prezzo: 999.99 },
        { id: 2, nome: 'Smartphone', prezzo: 699.49 },
        { id: 3, nome: 'Cuffie Wireless', prezzo: 129.90 }
      ]
    }
  }
}).mount('#app');
