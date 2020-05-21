export const state = () => ({

    backend_host: 'http://home.francis.kr:5000/api',

    articles: [],
    is_articles_loaded: false
})

export const mutations = {
    update_articles(state, new_articles) {
        Vue.set(state, 'articles', [...new_articles])
    }

}

export const getters = {

}

export const actions = {
    readArticles({ state, commit }) {
        path = state.backend_host + '/read_articles'

        return axios.get(path)
            .then(response => {
                commit('update_articles', response.data)
            })
    }

}