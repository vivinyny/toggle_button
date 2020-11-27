<template>
    <div 
        :class="isOn ? 'toggle_green' : 'toggle_orange' " 
        @click="changeColor"
    >
        <label v-if="isOn" >On</label>
        <label v-if="!isOn">Off</label>
    </div>
</template>

<script>
export default {
    computed: {
        isOn() {
            const toggle = this.$store.getters['toggle/toggleOn'];
            console.log('state' ,toggle);
            return toggle;
        }
    },
    methods: {
        changeColor() {
            this.$store.dispatch('toggle/toggleSwitch')
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