/**
 * Created by limx on 2017/10/21.
 */
import * as types from '../mutation-types'

// initial state
const state = {
    version: "v1.0.0",
    data: [],
}

// getters
const getters = {
    version: state => state.version
}

const mutations = {
    [types.APP_SET_VERSION] (state, {v}) {
        state.version = v;
    },
}

export default {
    state,
    getters,
    mutations
}