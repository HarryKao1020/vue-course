# Routing

### router-view

router-view是golbal的，會自動抓取route目前的Page

```HTML
<script>
import AppHeader from './components/Header.vue'
import Auth from './components/Auth.vue'
export default {
    name: 'App',
    components: {
        AppHeader,
        Auth
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>

    <!-- Player -->
    <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
        <!-- Track Info -->
        <div class="text-center">
            <span class="song-title font-bold">Song Title</span> by
            <span class="song-artist">Artist</span>
        </div>
        <div class="flex flex-nowrap gap-4 items-center">
            <!-- Play/Pause Button -->
            <button type="button">
                <i class="fa fa-play text-gray-500 text-xl"></i>
            </button>
            <!-- Current Position -->
            <div class="player-currenttime">00:00</div>
            <!-- Scrub Container  -->
            <div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
                <!-- Player Ball -->
                <span class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg" style="left: 50%">
                    <i class="fas fa-circle"></i>
                </span>
                <!-- Player Progress Bar-->
                <span
                    class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
                    style="width: 50%"
                ></span>
            </div>
            <!-- Duration -->
            <div class="player-duration">03:06</div>
        </div>
    </div>

    <Auth></Auth>
</template>

```

---

## naming router

code:
index.js:

```javascript
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../views/Home.vue')
        }
    ]
})
```

用 ` <router-link> :to="{ name:'home'}"</router-link> 去對應`
HTML:

```HTML
  <router-link
    class="text-white font-bold uppercase text-2xl mr-4"
    :to="{ name: 'home' }"
    exact-active-class="no-active">Music</router-link>

```

---

## createWebHashHistory

在Vue Router中，createWebHashHistory和createWebHistory是用來創建不同類型的路由歷史模式的函數。它們的區別在於它們處理URL的方式不同，具體如下：

createWebHashHistory:

createWebHashHistory用於創建基於hash模式的路由歷史。
在hash模式中，URL的路由部分被放置在#符號之後，這個部分稱為hash。
例如：http://example.com/#/about
這種模式在舊版瀏覽器中更容易兼容，並且可以避免一些特定的服務器配置。
createWebHistory:

createWebHistory用於創建基於HTML5 history模式的路由歷史。
在history模式中，URL看起來更加清晰，沒有#號，更像傳統的URL。
例如：http://example.com/about
這種模式需要服務器端的特殊配置，以確保在單頁應用中刷新頁面時，服務器能夠正確地響應路由地址。
總的來說，如果你的應用是基於現代瀏覽器，並且服務器端可以進行配置，推薦使用createWebHistory。如果需要支持更老的瀏覽器或者無法進行服務器配置，那麼可以選擇createWebHashHistory。

---

## Redirect Routes

-   在router底下新增一個path，是當使用者在url輸入這個path，會redirect到哪一個頁面

code:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Manage from '../views/Manage.vue'

// import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'manage',
            path: '/manage-music',
            component: Manage
        },
        {
            path: '/manage',
            redirect: { name: 'manage' }
        }
    ],
    linkExactActiveClass: 'text-yellow-500'
})

export default router
```

---

## catchAll

/:catchAll(.*)*是一個特殊的路由路徑，用於匹配所有未被其他路由規則匹配的路徑。這通常被用作404頁面或者通用的錯誤頁面。

詳細解釋如下：

/:catchAll(._)_：這是一個動態路由。:表示後面的catchAll是一個動態部分，它會匹配任何路徑。(.*)*是一個正則表達式，它匹配任何字符（.）任意次數（\*）。

也可以導到404 not found頁面

-   index.js

```javascript
{
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
}

```

---

## alias

在Vue Router中，alias是一個可選的路由配置屬性，它可以讓你為某個路由定義一個或多個別名。

別名的路徑將會像原路徑一樣渲染同樣的組件。換句話說，當用戶訪問一個別名路徑時，URL將保持為別名路徑，但是將會渲染和原路徑相同的組件。

ex:
url打http://localhost:5173/manage-music跟http://localhost:5173/manage 都可以導到/manage-music頁面

index.js

```javascript
 {
            name: 'manage',
            alias: '/manage',
            path: '/manage-music',
            component: Manage
        },
```

---

## Guarding Routes

在 Vue Router 中，router.beforeEach 是一種全局前置守衛（global before guards）。它可以用來在導航觸發之前進行一些檢查或修改。

-   index.js

```javascript
router.beforeEach((to, from, next) => {
    console.log('Global Before Each')
    console.log(to, from)
    next()
})
```

-   example:
    在這個例子中，我們在每次導航之前檢查用戶是否已經登錄。如果用戶未登錄並且嘗試訪問非登錄頁面，我們將他們重定向到登錄頁面。否則，我們允許正常導航。

請注意，next 函數必須被調用，否則導航將不會被解析。你可以傳遞一個路由對象給 next 來重定向到一個不同的路由，或者無參數調用 next() 以正常導航。

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 路由配置...
    ]
})

router.beforeEach((to, from, next) => {
    // 在這裡進行一些檢查或修改
    // `to` 是即將要進入的路由對象
    // `from` 是即將要離開的路由對象
    // `next` 是一個函數，必須調用它以解析這個鉤子

    // 例如，我們可以檢查用戶是否已經登錄
    const isAuthenticated = false // 假設我們從某處獲取這個值
    if (to.name !== 'Login' && !isAuthenticated) {
        next({ name: 'Login' }) // 如果用戶未登錄，則重定向到登錄頁面
    } else {
        next() // 否則，正常導航
    }
})

export default router
```

### beforeRouteEnter

beforeRouteEnter 是 Vue Router 提供的一種路由獨享守衛（route-specific guard）。這種守衛會在路由進入之前被調用。

這種守衛特別有用，因為它允許你在渲染路由組件之前進行一些操作，例如檢查用戶權限、獲取數據等。

以下是一個基本的使用範例：
在某個component使用

```javascript
<script>
export default {
  beforeRouteEnter (to, from, next) {
    // 在這裡進行一些檢查或修改
    // `to` 是即將要進入的路由對象
    // `from` 是即將要離開的路由對象
    // `next` 是一個函數，必須調用它以解析這個鉤子

    // 例如，我們可以檢查用戶是否已經登錄
    const isAuthenticated = false // 假設我們從某處獲取這個值
    if (!isAuthenticated) {
      next({ name: 'Login' }) // 如果用戶未登錄，則重定向到登錄頁面
    } else {
      next() // 否則，正常導航
    }
  }
}
</script>
```
