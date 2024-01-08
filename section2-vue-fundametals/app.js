const vm = Vue.createApp({
    data() {
        return {
            firstName: "Harry",
            middleName: "",
            lastName: "KAO",
            message: "HAHAHA",
            url: "https://google.com",
            raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
            age: 18,
        };
    },
    methods: {
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
            event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed: {
        fullName() {
            console.log("Full name computed properties was called!");
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toLowerCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                console.log(newVal, oldVal);
                this.age = 20;
            }, 3000);
        },
    },
}).mount("#app");

// ----- Accessing Data ------- //
// setTimeout(() => {
//     // vm.firstName= "Bob"
//     vm.$data.firstName = "Bob";
// });
