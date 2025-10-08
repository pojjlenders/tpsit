const { createApp } = Vue;

createApp({
    data() {
        return {
            kg : 0,
            g : 0
        }
    },
    methods:{
        calcolo(){
            this.g = this.kg/1000
        }
    }
}).mount('#app');
