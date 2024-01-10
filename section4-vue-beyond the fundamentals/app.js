let vm = Vue.createApp({
    data() {
        return {
            message: "Hello Vue",
        };
    },
    template: `{{ message }}`,
});

let vm2 = Vue.createApp({
    data() {
        return {
            message: "Hello World",
        };
    },
    render() {
        return Vue.h("h1", this.message);
    },
});

vm.mount("#app");
vm2.mount("#app2");
