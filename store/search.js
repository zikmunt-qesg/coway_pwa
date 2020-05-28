import Vue from 'vue'

export const state = () => ({

    backend_host: process.env.backend_host,
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
    searchPages({ state, commit }, { q }) {
        const path = state.backend_host + '/search_pages'

        return this.$axios.get(path, { params: {
            q: q
            }})
            .then(response => {
                console.log(response.data)
                commit('update_search_results', response.data)
            })
    }
}