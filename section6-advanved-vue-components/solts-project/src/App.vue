<template>
    <app-form>
        <template v-slot:help>
            <p>This is some help text.</p>
        </template>
        <template v-slot:fields>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
        </template>
        <template v-slot:button>
            <button type="submit">Submit</button>
        </template>
    </app-form>
    <p>Hahaha</p>
    <app-form>
        <template v-slot:help>
            <p>contact help text.</p>
        </template>
        <template v-slot:fields>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="message" />
        </template>
        <template v-slot:button>
            <button type="submit">Submit</button>
        </template>
    </app-form>
    <!-- <AppForm></AppForm> -->
</template>

<script>
import AppForm from "@/components/Form.vue";
export default {
    name: "App",
    components: {
        AppForm,
    },
};
</script>

<style scoped>
input {
    display: block;
    margin-bottom: 1rem;
}
</style>
