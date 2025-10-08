const { createApp } = Vue;

createApp({
    data() {
        return {
            Toggle_Luce: 'Spenta'
        }
    },
    methods:{
        bottone(){
            if(this.Toggle_Luce=='Spenta')
                this.Toggle_Luce = 'Accesa';
            else
                this.Toggle_Luce = 'Spenta';
        }
    }
}).mount('#app');
