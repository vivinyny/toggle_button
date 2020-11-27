export default {
    toggleSwitch(state) {
        state.toggleOn = !state.toggleOn;
        console.log('mutation', state.toggleOn)
    }
};