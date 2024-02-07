# music-project : Introduction to Pinia

## 94.Understanding State

-   State
    ![State](image.png)

-   passdowm between from parent component and child component
    ![Alt text](image-1.png)

    -   parent傳某個值的當前狀態給child
    -   child修改此值後，再用call back function去更新此值給parent

---

## Pinia

#### 介紹:

-   A single location where all you data is stored and managed
-   Pinia is the most popular choice for Vue.

---

## Eslint

-   rules : 'vue/multi-word-component-names': 'off' --> 意思是不去檢視Component的名子是不是muti-word，原本要命名為AppAuth.vue，可以直接變成Auth.vue

.eslintrc.cjs

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    overrides: [
        {
            files: [
                'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
                'cypress/support/**/*.{js,ts,jsx,tsx}'
            ],
            extends: ['plugin:cypress/recommended']
        }
    ],
    env: {
        node: true
    },
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'vue/multi-word-component-names': 'off'
    }
}
```
