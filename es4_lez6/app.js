const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            valutazione: 0
        };
    }
});

app.component('star-rating', {
    template: `
        <div class="stars">
            <span 
                v-for="n in 5" 
                :key="n" 
                class="star" 
                :class="{ active: n <= rating }"
                @click="setRating(n)">
                ★
            </span>
        </div>
    `,
    data() {
        return {
            rating: 0
        };
    },
    methods: {
        setRating(valore) {
            this.rating = valore;
            this.$emit('imposta-valutazione', valore);
        }
    }
});

app.mount('#app');
