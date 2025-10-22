const { createApp } = Vue;

const InfoCard = {
  template: `
    <div class="info-card">
      <h3>Titolo della Card</h3>
      <p>Contenuto della card...</p>
    </div>
  `
};

createApp({
  components: {
    'info-card': InfoCard
  }
}).mount('#app');
