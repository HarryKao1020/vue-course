import { createApp } from "vue";
import { createPinia } from "pinia";
// import Greeting from "@/components/Greeting.vue";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
// app.component("Greeting", Greeting);
app.mount("#app");
