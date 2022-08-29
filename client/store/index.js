export const getters = {
    user (state) {
        return state.user
    }
}

export const state = {
    user:{},
    test:{}
}

export const mutations = {
    setUser (state, data) {
        state.user = data
    }
}

export const actions = {
    async getUser ({ commit } , { data }) {
        await commit('setUser', data)
    }
}