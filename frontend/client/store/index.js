export const state = () => ({
    user:{},
})

export const getters = {
    user (state) {
        return state.user
    }
}

export const actions = {
    async getUser ({ commit } , { data }) {
        await commit('setUser', data)
    }
}

export const mutations = {
    setUser (state, data) {
        state.user = data
    }
}