
import Vue from 'vue'

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
        const path = state.backend_host + '/read_articles'

        return this.$axios.get(path)
            .then(response => {
                console.log(response.data)
                commit('update_articles', response.data)
            })
    },
    saveArticle({ state, commit }, { id, title, date, description, picture_file, contents }) {
        const path = state.backend_host + '/save_article'

        let formData = new FormData()
        formData.append('id', id)
        formData.append('title', title)
        formData.append('date', date)
        formData.append('description', description)
        formData.append('picture', picture_file, picture_file.name)
        formData.append('contents', contents)

        return this.$axios.post(path, formData)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
}