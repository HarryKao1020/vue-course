# List Rendering

[參考文章](https://vuejs.org/guide/essentials/list)

### app.js

-   有一個 birds 陣列
-   有一個 list 裡面有多個 object

```javascript
const vm = Vue.createApp({
    data() {
        return {
            birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
            people: [
                { name: "John", age: 20 },
                { name: "Rick", age: 18 },
                { name: "Amy", age: 33 },
            ],
        };
    },
    methods: {},
    computed: {},
    watch: {},
}).mount("#app");
```

### index.html

```HTML

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="main.css" />
        <title>Vue List Rendering</title>
    </head>
    <body>
        <div id="app" v-cloak>

            <!--List-->
            <ul>
                <li v-for="(bird, index) in birds" :class="bird" :key="bird">
                    {{ bird}} - {{index}}
                </li>
            </ul>


            <!--Object-->
             <ul>
                <li v-for="person in people">
                    <div>{{ person.age }}</div>
                    <div>{{ person.name }}</div>
                </li>
            </ul>
        </div>
        <script src="http://unpkg.com/vue@3"></script>
        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <script src="app.js"></script>
    </body>
</html>

```

```HTML
<ul>
    <li v-for="person in people">
        <div v-for="(value,key,index) in person">
            {{ key }} : {{ value}} - {{index}}
        </div>
    </li>
</ul>
```
