import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
// import createLogger from '../../../src/plugins/logger'

import login from './modules/login'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    getters,
    modules: {
      login
    },
    trict: debug
    // plugins: debug ? [createLogger()] : []
})
