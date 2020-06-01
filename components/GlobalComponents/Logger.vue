<template>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
            url: this.$route.fullPath
        }
    },
    props: {
        title: { type: String },
    },
    computed:{
        ...mapState({ backend_host: state => state.backend_host })
    },
    methods: {
        write_log(){
            const path = this.backend_host + '/write_log'

            if(process.client){
                const formData = new FormData()
                formData.append('title', this.title)
                formData.append('url', this.url)

                return axios.post(path, formData)
                .then( response => {
                    console.log(response)
                })
            }
        }
    },
    created(){
        if(this.title && this.url){
            this.write_log()
        }
    }
}
</script>