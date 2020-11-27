<template>
    <div 
        :class="currentState ? 'toggle_green' : 'toggle_orange' " 
        @click="currentState = !currentState"
    >
        <label v-if="isOn" >On</label>
        <label v-if="!isOn">Off</label>
        <p>hello word</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentState: false
        }
    },
    computed: {
        idOn() {
            return this.$store.getters['toggleSwitch'];
        }
    },
    // methods: {
    //     changeColor {

    //     }
    // }
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