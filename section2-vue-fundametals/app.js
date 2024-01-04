const vm = Vue.createApp({
    data() {
        return {
            firstName: "Harry",
            lastName: "KAO",
            message: "HAHAHA",
            url: "https://google.com",
            raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
            age: 18,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toLowerCase()}`;
        },
        increment() {
            this.age++;
            // console.log(this.age);
        },
        decrement() {
            this.age--;
        },
        // updateLastName(event) {
        //     this.lastName = event.target.value;
        // },
        updateLastName(msg, event) {
            // event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        },
    },
}).mount("#app");

// ----- Accessing Data ------- //
// setTimeout(() => {
//     // vm.firstName= "Bob"
//     vm.$data.firstName = "Bob";
// });
