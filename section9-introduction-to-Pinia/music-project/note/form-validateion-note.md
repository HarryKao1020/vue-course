# Form Validation

### Why perform form validation on the client?

-   Provides immediate feedback.
-   Saves resources on the server by reducing the number of requests to submit a form.
-   Validation should always be performed on the server

## Install vee-validate

-   npm i vee-validate
-   npm i @vee-validate/rules

---

## vee-form & vee-field

### setting vee-validate

create a folder called includes,and create a file called validation.js

```javascript
import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required, min, max, alpha_spaces as alphaSpaces } from '@vee-validate/rules'
export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)
        defineRule('required', required)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('alpha_spaces', alphaSpaces)
    }
}
```

#### defineRule:

-   require: 必填
-   min:最小長度
-   max:最大長度
-   alpha_spaces:不允許空白鍵

```javascript
// vee-validate
const schema = ref({
    name: 'required|min:3|max:100|alpha_spaces',
    email: '',
    age: '',
    password: '',
    confirm_password: '',
    country: '',
    tos: ''
})
```

#### vee-form & vee-field

-   vee-form : 取代html的form
-   vee-field : 取代html的input
    -   如果inpute的type是select ，要在vee-field後面加as

ex:

```HTML
<vee-field as="select" name="mySelect" rules="required">
  <option disabled value="">请选择</option>
  <option>选项1</option>
  <option>选项2</option>
</vee-field>
```

---

## Error Message

```HTML
<vee-form v-show="tab === 'register'" :validation-schema="schema">
    <!-- Name -->
    <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field name="name" type="text" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" placeholder="Enter Name"/>
        <ErrorMessage class="text-red-600" name="name"></ErrorMessage>
    </div>
</vee-form>
```

ErrorMessage的name要對應到vee-field的name屬性
這樣才可以把errormessage印在那個input上
