<template>
    <div>
        <p v-if="age > 25">{{ msg }}</p>
        <p v-else>You must be 25 years or older to view this message</p>
    </div>
</template>

<script>
export default {
    name: "Greeting",
    props: ["age"],
    data() {
        return {
            msg: "Hahaha Greeting Vue!!!",
        };
    },
};
</script>

<style scoped lang="scss">
@mixin size($w, $h) {
    width: $w;
    height: $h;
}
p:hover {
    color: darken($color: #cc4444, $amount: 10%);
}
.box {
    @include size(100px, 100px);
    border: 1px solid #000;
}
</style>
