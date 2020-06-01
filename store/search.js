import Vue from 'vue'

export const state = () => ({
    search_results: [] // [{ //link, title, contents}, ... ]
})

export const mutations = {
    update_search_results(state, new_search_results) {
        Vue.set(state, 'search_results', [...new_search_results])
    }

}

export const getters = {

}

export const actions = {
    searchPages({ commit, rootState }, { q }) {
        const path = rootState.backend_host + '/search_pages'

        return this.$axios.get(path, { params: {
            q: q
            }})
            .then(response => {
                console.log(response.data)
                commit('update_search_results', response.data)
            })
    }
}