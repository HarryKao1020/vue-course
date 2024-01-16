<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
    name: "App",
    components: {
        Greeting,
        User,
    },
    data() {
        return {
            msg: "Hello Vue3!",
            age: 2,
        };
    },
    methods: {
        updateAge(num) {
            this.age += num;
        },
        updateAgeCB(num) {
            this.age += num;
        },
    },
};
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>Hello App.vue</p>
    <p>{{ age }}</p>
    <!-- <button type="button" @click="age++">Update Age</button> -->
    <Greeting :age="age"> </Greeting>
    <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
</template>
