### 原本的寫法沒有加上:key="person.name"

[相關文章](https://v2.vuejs.org/v2/guide/list.html#Maintaining-State)
功能是按下按鈕會移除第一個 object,然後塞入下一個
但 input 卻沒有跟著動
index.html

```HTML
<!DOCTYPE >
<html>
    <head>
        <title>VueJS Course</title>
        <link rel="stylesheet" type="text/css" href="main.css" />
    </head>

    <body>
        <div id="app">
            <button type="button" class="move" @click="move" >
                Move to Bottom
            </button>
            <div class="card" v-for="person in people">
                <h3>{{ person.name }}</h3>
                <p>{{ person.message}}</p>
                <input type="text" />
                <!-- <h3>Name</h3>
                <p>Message</p> -->
            </div>
        </div>

        <script src="http://unpkg.com/vue@3"></script>
        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <script src="app.js"></script>
    </body>
</html>
```

### app.js

```javascript
let vm = Vue.createApp({
    data() {
        return {
            people: [
                {
                    name: "John",
                    message: "Hello world!",
                },
                {
                    name: "Rick",
                    message: "I like pie.",
                },
                {
                    name: "Amy",
                    message: "Skydiving is fun!",
                },
            ],
        };
    },
    methods: {
        move() {
            const first = this.people.shift();
            this.people.push(first);
        },
    },
}).mount("#app");
```

---

## 綁定 key 後

```HTML
<!DOCTYPE >
<html>
    <head>
        <title>VueJS Course</title>
        <link rel="stylesheet" type="text/css" href="main.css" />
    </head>

    <body>
        <div id="app">
            <button type="button" class="move" @click="move">
                Move to Bottom
            </button>
            <div class="card" v-for="person in people" :key="person.name">
                <h3>{{ person.name }}</h3>
                <p>{{ person.message}}</p>
                <input type="text" />
                <!-- <h3>Name</h3>
                <p>Message</p> -->
            </div>
        </div>

        <script src="http://unpkg.com/vue@3"></script>
        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <script src="app.js"></script>
    </body>
</html>

```
