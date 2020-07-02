
import Vue from 'vue'

export const state = () => ({
    articles: [],
    is_articles_loaded: false
})

export const mutations = {
    update_articles(state, new_articles) {
        Vue.set(state, 'articles', [...new_articles])
        state.is_articles_loaded = true
    },
    add_article_picture_file(state, { target_article_id, picture_file }) {
        let target_article = state.articles.find(item => item.id == target_article_id)
        Vue.set(target_article, 'picture_file', picture_file)
        Vue.set(target_article, 'picture_file_url', URL.createObjectURL(picture_file))
        //Vue.set(state, 'articles', state.articles)
    },
    set_articles_not_loaded(state){
        state.is_articles_loaded = false
    }
}

export const getters = {

}

export const actions = {
    readArticles({ state, commit, rootState }) {
        const path = rootState.backend_host + '/read_articles'

        return this.$axios.get(path)
            .then(response => {
                for(let i=0; i < response.data.length ; i++){
                    response.data[i].index = response.data.length - i
                }
                commit('update_articles', response.data)

                return response.data
            })
    },
    saveArticle({ rootState, state }, { id, title, date, description, picture_file, contents }) {
        const path = rootState.backend_host + '/save_article'

        let formData = new FormData()
        formData.append('id', id)
        formData.append('title', title)
        formData.append('date', date)
        formData.append('description', description)
        if(picture_file.name != undefined){
            formData.append('picture', picture_file, picture_file.name)
        }
        formData.append('contents', contents)

        return this.$axios.post(path, formData)
                .then(result => {
                    let articles = [ ...state.articles ]
                    let idx = articles.findIndex(item => item.id == result.id)
                    if (idx > -1 ){
                        articles.splice(idx, 1, result)
                    }
                    else{
                        articles.push(result)
                    }
                    commit('update_articles', articles)
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
    },
    deleteArticle({ state, commit, rootState }, { id }){
        const path = rootState.backend_host + '/delete_article'

        let formData = new FormData()
        formData.append('id', id)

        return this.$axios.post(path, formData)
        .then(result => {
            let articles = [ ...state.articles ]
            let idx = articles.findIndex(item => item.id == id )
            if (idx > -1){
                articles.splice(idx, 1)
            }
            commit('update_articles', articles)
            return result 
        })
    },
    loadPicture({ state, commit, rootState }, { id, thumb } ){
        const path = rootState.backend_host + '/get_file_from_server'
        let target_article = state.articles.find(item => item.id == id)
        let filename = null
        if (target_article != undefined) {
            filename = target_article.picture
        
        return this.$axios.get(path, {
                params: { filename: filename, thumb: thumb },
                responseType: 'blob'
            })
            .then(response => {
                let picture_file = []
                if ( (navigator.appName == 'Netscape' && navigator.userAgent.toLowerCase().indexOf('trident') != -1) || (navigator.userAgent.toLowerCase().indexOf("msie") != -1) ||
                    navigator.appVersion.indexOf('Edge') > -1 ) {
                    // ie 또는 edge일 경우 경우
                    picture_file = response.data
                    picture_file.name = filename
                }
                else {
                    picture_file = new File([response.data], filename)
                }
                //let picture_file = new File([response.data], filename)
                commit('add_article_picture_file', { target_article_id: id, picture_file: picture_file })
                return picture_file
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}