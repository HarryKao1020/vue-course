import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    function userLoggedIn() {
        console.log('login success')
    }
    return { userLoggedIn }
})
