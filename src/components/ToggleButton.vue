<template>
    <label for="toggle-button">
        <span>On</span>
        <span>Off</span>

        <input type="checkbox" id="toggle_button" v-model="checkedValue">
    </label>
</template>

<script>
export default {
    data() {
        return {
            currentState: false
        }
    },
    computed: {
        isActive() {
            return this.currentState;
        },
        checkedValue: {
            get() {
                return.this.currentState
            },
            set(newValue) {
                this.currentState = newValue;
            }
        }
    }
}
</script>

<style>



</style>