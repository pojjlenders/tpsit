const { createApp } = Vue;

createApp({
  data() {
    return {
      isLoggedIn: false // Cambia a true per testare
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
}).mount('#app');