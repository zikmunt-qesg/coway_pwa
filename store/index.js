export const state = () => ({
    backend_host: process.env.backend_host,
    
    is_authenticated: false,

    is_ENG: false
})

export const mutations = {
    authSuccess(state){
        state.is_authenticated = true
    },
    setLang(state, new_lang){
        if(new_lang == 'ENG'){
            state.is_ENG = true
        }
        else {
            state.is_ENG = false
        }
    }
}

export const actions = {

}
