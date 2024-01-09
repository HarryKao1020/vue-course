const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150,
            mode: 1,
            show: 1,
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
