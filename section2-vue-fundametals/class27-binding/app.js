const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150,
        };
    },
    methods: {},
    computed: {
        circle_classes() {
            return { purple: this.isPurple };
        },
    },
    watch: {},
}).mount("#app");
