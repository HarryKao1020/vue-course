<template>
    <!-- Header -->
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <!-- App Name -->
            <router-link
                class="text-white font-bold uppercase text-2xl mr-4"
                :to="{ name: 'home' }"
                exact-active-class="no-active"
                >Music</router-link
            >

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="flex flex-row mt-1">
                    <!-- Navigation Links -->
                    <li>
                        <router-link class="px-2 text-white" :to="{ name: 'about' }"
                            >About</router-link
                        >
                    </li>
                    <li>
                        <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
                            >Login / Register</a
                        >
                    </li>
                    <li>
                        <router-link class="px-2 text-white" :to="{ name: 'manage' }"
                            >Manage</router-link
                        >
                    </li>
                    <li>
                        <router-link class="px-2 text-white" :to="{ name: 'logout' }"
                            >Log out</router-link
                        >
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
// import { mapStores ,mapState,mapWritableState} from 'pinia'
// import useModalStore from '@/stores/modal'

// export default {
//     name: 'AppHeader',
//     computed: {
//         ...mapStores(useModalStore)
//     },
//     methods: {
//         toggleAuthModal() {
//             this.modalStore.isOpen = !this.modalStore.isOpen
//             console.log(this.modalStore.isOpen)
//         }
//     }
// }

import { useModalStore } from '@/stores/modal'

const modal = useModalStore()
// const modalUser = useUserStore()

const toggleAuthModal = () => {
    modal.isOpen = !modal.isOpen
    console.log('Header isOpen:', modal.isOpen)
}
</script>
