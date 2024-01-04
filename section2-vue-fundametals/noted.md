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
