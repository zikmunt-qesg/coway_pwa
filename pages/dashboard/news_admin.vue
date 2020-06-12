<template>
<div class="position-relative w-100">
    <hr class="mb-3">
    <b-container>
        <h3 class="mb-4 pb-2 border-bottom"> 지속가능경영 뉴스 게시물 </h3>
        <b-table-simple responsive class="txt-table">
            <b-thead>
                <b-tr>
                    <b-td>No.</b-td> <b-td > 제목 </b-td> <b-td> 게시날짜 </b-td> <b-td> 수정 </b-td><b-td>삭제</b-td>
                </b-tr>
            </b-thead>
            <b-tbody v-for="(item, index) in articles" :key="item.id">
                <b-tr>
                    <b-td class="border-0">{{ index }}</b-td> 
                    <b-td class="border-0">
                        <b-button v-b-toggle="'collapse'+`${index}`" block variant="icon" class="p-0 text-left fw-400">{{ item.title }}</b-button>
                        <!-- <b-button @click.stop.prevent="$router.push('/news/view_article?id='+item.id)" block variant="icon" class="p-0 text-left fw-400"> {{ item.title }} </b-button> -->
                    </b-td>
                    <b-td class="border-0">{{ item.date }}</b-td>                    
                    <b-td class="border-0"> 
                        <b-button @click.stop.prevent="$router.push('/dashboard/write_article?id='+item.id)" block> 수정 </b-button>
                    </b-td>
                    <b-td class="border-0">
                        <b-button block @click.stop.prevent="deleteArticle({ id: item.id})">삭제</b-button>
                    </b-td>           
                </b-tr>
                <b-tr>
                    <b-td colspan="5" class="p-0">
                         <b-collapse :id="'collapse'+`${index}`" class="mb-4">
                            <b-card class="border-dotted bg-gray1 gray6 py-md-2 px-md-3">
                                <h7 class="border-bottom">{{ item.title }}</h7>
                                <b-card-body v-if="item.description!=''" class="border-0 bg-transparent f-95 fw-400">{{ item.description }}</b-card-body>
                                <b-card-body class="border-0 bg-transparent f-95"> <p v-html="item.contents"></p></b-card-body>
                                <div v-if="item.picture!=null" class="mt-3">
                                     <!-- <b-img v-if="picture_file.name != undefined && picture_file.name != null && picture_file.name != 'null' && picture_file.name != ''" :src="picture_file_url" class="img-fluid"></b-img> -->
                                    <span class="pl-3 f-80 gray6">{{ item.picture }}</span>
                                </div>
                            </b-card>
                        </b-collapse>      
                    </b-td>                
                </b-tr>
            </b-tbody>
        </b-table-simple>
                
        <div class="text-right">
            <b-button @click.stop.prevent="$router.push('/dashboard/write_article')" variant="blue">새 글쓰기</b-button>
        </div>
    </b-container>
    <!-- <iframe class="fullbody" ref="iframe" src="https://cowaypwa.dataflare.net/admin"></iframe> -->
</div>  
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    layout: 'AdminPage',
    computed: {
        ...mapState('articles', {
        articles: state => state.articles,
        is_articles_loaded: state => state.is_articles_loaded
        }),
        ...mapState({
            is_authenticated: state => state.is_authenticated,
        }),
    },
    methods: {
        ...mapActions('articles', ['readArticles', 'saveArticle', 'deleteArticle'])
    },
    created(){
        // if (this.is_authenticated != true){
        //     this.$router.push('/dashboard')
        // }
        // else {
            console.log(this.is_articles_loaded)
            if (this.is_articles_loaded != true) {
                this.readArticles().then(() => {
                    console.log(this.articles)
                })
            }
        // }
    }
}
</script>

<style scoped lang="scss">
.fullbody {
  width: 100%;
  height: 92vh;
}
</style>