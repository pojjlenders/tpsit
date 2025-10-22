const { createApp } = Vue;

const SalutoUtente = {
  template: `
    <div class="saluto">
      Benvenuto nella nostra applicazione!
    </div>
  `
};

createApp({
  components: {
    'saluto-utente': SalutoUtente
  }
}).mount('#app');
