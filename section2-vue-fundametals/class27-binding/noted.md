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

---

## v-if

-   對 DOM 的元素做操作，直接消失在 DOM
-   可以在<template></template> 的 tag 裡面使用
-   cheap on load because it's lazy
-   Expensive on Toggle : 經常切換的話很消耗效能，可以用 v-show

```HTML
<div>
    <select v-model="mode">
        <option value="1">v-if</option>
        <option value="2">v-if-else</option>
        <option value="3">v-else</option>
    </select>
    <p v-if="mode==1">Showing v-if directive content</p>
    <div v-else-if="mode==2">
        <p>Bonus content</p>
        <h3>v-else-if</h3>
    </div>
    <p v-else-if="mode==3">v-else</p>
</div>

```

app.js

```javascript
const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150,
            mode: 1,
        };
    },
```

---

## v-show

-   在 DOM 的元素上加上 css : display:none
-   不能跟 v-else 一起使用，但可以使用其他寫法 例如: !==
-   不能在<template></template> 的 tag 裡面使用
-   切換頻率高可以使用 v-show

```HTML
<div>
    <i v-show="show == 1">v-show</i>
    <i v-show="show !==1">v-else-show</i>
</div>
```

### v-if / v-show 選擇

如果經常要切換的東西用 v-show
如果不常切換的用 v-if
