<template>
    <div :class="currentState ? 'toggle_green' : 'toggle_orange' " @click="currentState = !currentState">
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentState: false
        }
    }
};
</script>

<style scoped>
.toggle_orange {
    background-color: orange;
    height: 30px;
    width: 130px;
}
.toggle_green {
    background-color: green;
    height: 30px;
    width: 130px;
}
</style>