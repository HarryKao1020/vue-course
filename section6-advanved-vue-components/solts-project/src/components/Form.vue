<template>
    <form>
        <div class="help">
            <slot name="help"></slot>
        </div>
        <div class="fields">
            <slot name="fields"></slot>
        </div>
        <div class="buttons">
            <slot name="button"></slot>
        </div>
    </form>
</template>

<script></script>

<style scoped>
input {
    display: block;
    margin-bottom: 1rem;
}
</style>
