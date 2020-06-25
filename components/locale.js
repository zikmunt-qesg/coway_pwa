export default {
    fetch({ store, query, redirect, route }){
        if(store.state.is_ENG==true && query.l!='ENG'){
            query.l = 'ENG'
            redirect(301, route.fullPath + '?l=ENG' + route.hash)
        }
    }
}