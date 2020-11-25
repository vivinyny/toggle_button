<template>
    <label for="toggle-button">
        <span>On</span>
        <span>Off</span>

        <input type="checkbox" id="toggle_button">
    </label>
</template>

<script>
export default {
    data() {
        return {
            currentState: false
        }
    }
}
</script>

<style>
</style>