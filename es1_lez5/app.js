const { createApp } = Vue;

createApp({
    data() {
        return {
            isActive: false,
            hasError: false,
        }
    }
}).mount('#app');
