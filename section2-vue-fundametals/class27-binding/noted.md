# Binding Classes and Styles

### [vue 官方文件](https://v2.cn.vuejs.org/v2/guide/class-and-style.html)

---

## class 綁定

-   :class = v-bind:class

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="main.css" />
        <title>Vue Binding Classes</title>
    </head>
    <body>
        <div id="app" v-cloak>
            <label><input type="checkbox" v-model="isPurple" />Purple</label>

            <!--不用computed，直接在html修改-->
            <div class="circle" :class="{ purple: isPurple }">Hi!</div>

            <!--改成用computed呼叫-->
            <div class="circle" :class="circle_classes">Hi!</div>
        </div>
        <script src="http://unpkg.com/vue@3"></script>
        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <script src="app.js"></script>
    </body>
</html>

```

app.js

```javascript
const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
        };
    },
    methods: {},
    computed: {
        circle_classes() {
            return { purple: this.isPurple };
        },
    },
    watch: {},
}).mount("#app");
```

---

## select option 綁定

-   option value : 要與 main.css 的 class 名稱一樣

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="main.css" />
        <title>Vue Binding Classes</title>
    </head>
    <body>
        <div id="app" v-cloak>
            <label><input type="checkbox" v-model="isPurple" />Purple</label>

            <!-- drop down -->
            <label></label>


            <select v-model="selectedColor">
                <option value="">White</option>
                <option value="text-black">Text Black</option>
                <option value="text-orange">Text Orange</option>
            </select>

            <div class="circle" :class="[circle_classes,selectedColor]">
                Hi!
            </div>
        </div>
        <script src="http://unpkg.com/vue@3"></script>
        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <script src="app.js"></script>
    </body>
</html>

```

app.js

```javascript
const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
        };
    },
    methods: {},
    computed: {
        circle_classes() {
            return { purple: this.isPurple };
        },
    },
    watch: {},
}).mount("#app");
```

---

## Style Binding

-   :style : {css attribute}

-   多個 attribute: :style:[{},{}]

```HTML
 <!-- 控制大小 -->
            <label>
                <input type="number" v-model="size" />
            </label>
            <div
                class="circle"
                :class="[circle_classes,selectedColor]"
                :style="[{ width:size+'px',height:size+'px',lineHeight:size+'px'},{transform:'rotate(30deg)'}]"
            >
                Hi!
            </div>
```
