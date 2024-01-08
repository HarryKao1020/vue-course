# Accessing the data:

### without a proxy

```javascrip
vm.$data.firstName
```

### with a proxy

```javascrip
vm.firstName
```

---

## v-model

#### Reactivity

-   Reactivity is when any changes to the data is immediately reflected on the page.

---

## v-bind

有兩種寫法:

```javascript
//HTML: 下面兩種寫法都可以
<p><a v-bind:href="url" target="_blank">Google</a></p>

<p><a :href="url" target="_blank">Google</a></p>

// app.js
data(){
    return {
        url:'https://google.com'
    }
}
```

---

## v-on 事件綁定

```HTML
<!--寫法一 -->
<button type="button" @click="increment">Increment</button>

<!--寫法二 -->
<button type="button" v-on:click="increment">Increment</button>

```

app.js:

```javascript
const vm = Vue.createApp({
    data() {
        return {
            firstName: "Harry",
            lastName: "KAO",
            message: "HAHAHA",
            url: "https://google.com",
            raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
            age: 18,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toLowerCase()}`;
        },
        increment() {
            this.age++;
            // console.log(this.age);
        },
        decrement() {
            this.age--;
        },
    },
}).mount("#app");
```

### @input

使用時機:
对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。

```HTML
<input type="text" :value="lastName" @input="UpdateLastName" />
```

```javascript
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toLowerCase()}`;
        },
        increment() {
            this.age++;
            // console.log(this.age);
        },
        decrement() {
            this.age--;
        },
        UpdateLastName(event) {
            this.lastName = event.target.value;
        },
    },
```

---

## Cross site Scripting(XSS)

When malicious(惡意的) or harmful HTML is injected into the webpage causing unintended(意想不到的) behavior in the browser

### raw HTML

```HTML
<p v-html="raw_url"></p>
```

```javascript
data(){
    return {
       raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
    }
}
```

Final Thoughts

-   very little front-end developers can do.
-   most of the responsibility is on the back-end developer.
-   make sure you get your data from a trusted source.

---

## Event Modifiers

[vue 官方 event handler 文件](https://vuejs.org/guide/essentials/event-handling)

```javascript
// js:
event.preventDefault();

//vue - HTML
<input type="text" :value="lastName" @input.prevent="UpdateLastName" />

```

---

## Keyboard Event and Modifiers

-   @keyup.enter : 輸入完按下 enter 後才會更改 data
-   @keyup.tab : 輸入完按下 tab 鍵後才會更改 data
-   參考文章 ['keyup vue 事件綁定'](https://ithelp.ithome.com.tw/articles/10206672?sc=iThelpR)
-   官方文件 ['vue event handler'](https://vuejs.org/guide/essentials/event-handling)

index.html

```HTML
    <label>Middle Name</label>
    <input type="text" @keyup.enter="updateMiddleName" />

```

app.js

````javascript
methods:{
    updateMiddleName(event) {
        this.middleName = event.target.value;
    },
}
---

## Input type

```HTML
<input type="number" v-model="age" />
<p>Type of age:{{ typeof age }}</p>
<!-- result : type of age is Number ，但瀏覽器還是會把他轉成string-->
所以最好用vue.model.number


<input type="Text" v-model="age" />
<p>Type of age:{{ typeof age }}</p>
<!-- result : type of age is String-->

````

如果要用 vue 的 v-model 的修飾符號

-   v-model.number : 輸入欄位旁邊會多一個上下的加減按鈕

```HTML
    <label>Age</label>
    <input type="number" v-model.number="age" />
```

-   v-model.lazy : 輸入完畢離開 input 後才會跟資料做變動
-   v-model.trim : 減掉頭尾的空格

---

## methods v.s computed

-   methods : 每次重新渲染畫面就會重新執行 methods 裡面所有 funtion
-   computed : 畫面渲染後，如果裡面的方法沒有更動資料，則不會執行
-   [參考文章:Vue computed 與 method 的差異比較](https://ithelp.ithome.com.tw/articles/10242899)

### methods:

index.html

```HTML
 <p>{{ fullName()}}</p>
```

app.js:

```javascript
const vm = Vue.createApp({
    data() {},
    methods: {
        fullName() {
            console.log("Full name computed properties was called!");
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toLowerCase()}`;
        },
    },
});
```

### computed:

index.html

```HTML
<p>{{ fullName}}</p>
```

app.js:

```javascript
const vm = Vue.createApp({
    data() {},
    methods: {},
    computed: {
        fullName() {
            console.log("Full name computed properties was called!");
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toLowerCase()}`;
        },
    },
});
```

---

## watchers

watch: watch 監聽器，用以監聽某個數據，並觸發相對應的處理。

-   [參考文章-認識 vue.js watch](https://medium.com/unalai/%E8%AA%8D%E8%AD%98-vue-js-watch-%E7%9B%A3%E8%81%BD%E5%99%A8-ffee991368be)

```javascript
const vm = Vue.createApp({
    data() {},
    methods: {},
    computed: {},
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                console.log(newVal, oldVal);
                this.age = 20;
            }, 3000);
        },
    },
});
```

解釋:
age: 是我想要監聽的數據
setTimeout(()=>{}): 是我數據有變動後，要觸發的相對應處理法方
