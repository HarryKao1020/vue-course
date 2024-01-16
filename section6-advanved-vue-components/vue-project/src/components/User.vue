<template>
    <button type="button" @click="onClickAge">Update Age Event</button>
    <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
    <h1>{{ msg }}</h1>
    <h2>The user is {{ age }} years old.</h2>
    <p>{{ ageDouble }}</p>
</template>

<script>
export default {
    name: "User",
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20,
            validator(value) {
                return value < 130;
            },
        },
        ageChangeFn: Function,
    },
    emits: ["age-change"],
    computed: {
        ageDouble() {
            return this.age * 2;
        },
    },
    data() {
        return {
            msg: "user",
        };
    },
    methods: {
        onClickAge() {
            this.$emit("age-change", 10);
        },
    },
};
</script>
