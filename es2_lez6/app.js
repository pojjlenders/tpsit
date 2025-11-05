const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        }
    }
});

app.component('alert-box', {
    props: {
        messaggio: String,
        tipo: {
            type: String,
            validator: value => ['success', 'error'].includes(value)
        }
    },
    template: `
      <div class="alert" :class="tipo">
         {{ messaggio }}
      </div>
    `
});

app.mount('#app');
