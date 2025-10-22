const { createApp } = Vue;

createApp({
  data() {
    return {
      width: 100,
      height: 100,
      backgroundColor: '#3498db'
    };
  },
  computed: {
    avatarStyle() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        backgroundColor: this.backgroundColor
      };
    }
  }
}).mount('#app');
