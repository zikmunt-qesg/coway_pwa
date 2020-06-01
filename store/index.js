export const state = () => ({
    backend_host: process.env.backend_host,
    blog_posts: [],
    pages: [],
    is_authenticated: false
})

export const mutations = {
    setBlogPosts(state, list) {
        state.blog_posts = list
    },
    setPages(state, list) {
        state.pages = list
    },
    authSuccess(state){
        state.is_authenticated = true
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        let files = await require.context(
        '@/assets/content/blog/',
        false,
        /\.json$/
        )
        let blogPosts = files.keys().map(key => {
        let res = files(key)
        res.slug = key.slice(2, -5)
        return res
        })
        await commit('setBlogPosts', blogPosts)

        let files2 = await require.context(
        '@/assets/content/page/',
        false,
        /\.json$/
        )

        let pages = files2.keys().map(key => {
        let res = files2(key)
        res.slug = key.slice(2, -5)
        return res
        })
        await commit('setPages', pages)
    }
}
