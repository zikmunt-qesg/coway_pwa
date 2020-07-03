export default {
    fetch({ store, query, redirect, route }){
        if(store.state.is_ENG==true && query.l && query.l!='ENG'){
            query.l = 'ENG'
            redirect(301, route.fullPath + '?l=ENG' + route.hash)
        }
    },
    methods:{
        linkLib(address){
            //1) ?가 있는지 체크
            let path = ''
            let query = ''
            let hash = ''
            let tok = address.split('?')
            if(tok.length > 1){ // 쿼리있음
                path = tok[0]
                let tok2 = tok[1].split('#')
                if(tok2.length > 1){ // 쿼리, 해쉬가 또 있음
                    query = tok2[0]
                    hash = '#'+tok2[1]
                }
                else{
                    query = tok[1]
                    hash = ''
                }
            }
            else{ //쿼리없음
                let tok2 = address.split('#')
                if(tok2.length > 1){ // 해쉬 있음
                    path = tok2[0]
                    query = ''
                    hash = '#'+tok2[1]
                }
                else{ //해쉬도 없음
                    path = address
                }
            }
    
            if(this.$store.state.is_ENG==true){
                if(query=='') {
                    query = '?l=ENG'
                }
                else{
                    query += '&l=ENG'
                }
            }
            return path + query + hash
        }
    },
    created(){
        if(this.$route.query.l && this.$route.query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
    }
}