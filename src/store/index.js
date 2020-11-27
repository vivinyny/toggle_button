import { createStore } from 'vuex'
import toggleModule from './modules/toggle/index.js'

const store = createStore({
    modules: {
        toggle: toggleModule
    }
});

export default store