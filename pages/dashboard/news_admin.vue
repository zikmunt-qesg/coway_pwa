<template>
<div class="position-relative w-100">
    <b-container class="py-4 px-2">
        <h3 class="mb-4 pb-2 pt-1 border-bottom"> 지속가능경영 뉴스 게시물 </h3>
        <b-table-simple responsive class="txt-table">
            <b-thead>
                <b-tr>
                    <b-td>No.</b-td> <b-td > 제목 </b-td> <b-td> 게시날짜 </b-td> <b-td> 수정 </b-td><b-td>삭제</b-td>
                </b-tr>
            </b-thead>
            <b-tbody v-for="item in current_articles" :key="item.id">
                <b-tr>
                    <b-td class="border-0">{{ item.index }}</b-td> 
                    <b-td class="border-0">
                        <b-button v-b-toggle="'collapse'+`${item.index}`" block variant="icon" class="p-0 text-left fw-400">{{ item.title }}</b-button>
                        <!-- <b-button @click.stop.prevent="$router.push('/news/view_article?id='+item.id)" block variant="icon" class="p-0 text-left fw-400"> {{ item.title }} </b-button> -->
                    </b-td>
                    <b-td class="border-0">{{ item.date }}</b-td>                    
                    <b-td class="border-0"> 
                        <b-button @click.stop.prevent="$router.push('/dashboard/write_article?id='+item.id)" variant="blue"> 수정 </b-button>
                    </b-td>
                    <b-td class="border-0">
                        <b-button @click.stop.prevent="deleteArticle({ id: item.id})"  variant="blue-border">삭제</b-button>
                    </b-td>           
                </b-tr>
                <b-tr>
                    <b-td colspan="5" class="p-0">
                         <b-collapse :id="'collapse'+`${item.index}`" class="mb-4">
                            <b-card class="border-dotted bg-gray1 gray6 py-md-2 px-md-3">
                                <h7 class="border-bottom">{{ item.title }}</h7>
                                <b-card-body v-if="item.description!=''" class="border-0 bg-transparent f-95 fw-400">{{ item.description }}</b-card-body>
                                <b-card-body class="border-0 bg-transparent f-95"> <p v-html="$md.render(item.contents)"></p></b-card-body>
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
        
        <div class="d-flex justify-content-center news-indi">
            <b-pagination
            v-model="current_page"
            :total-rows="articles.length"
            :per-page="per_page"
            aria-controls="article-table"
            ></b-pagination>
        </div>
                
        <div class="text-right pr-3">
            <b-button @click.stop.prevent="$router.push('/dashboard/write_article')" variant="blue">새 글쓰기 <i class="fas fa-arrow-alt-circle-right ml-1"></i></b-button>
        </div>
        <hr class="mb-5">

    </b-container>
    <!-- <iframe class="fullbody" ref="iframe" src="https://cowaypwa.dataflare.net/admin"></iframe> -->
</div>  
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    layout: 'AdminPage',
    data(){
        return{
            current_page: 1,
            per_page: 10
        }
    },
    computed: {
        ...mapState('articles', {
        articles: state => state.articles,
        is_articles_loaded: state => state.is_articles_loaded
        }),
        ...mapState({
            is_authenticated: state => state.is_authenticated,
        }),
        current_articles(){
            let total_num = this.articles.length 
            let start_index = (this.current_page - 1) * this.per_page
            let end_index = Math.min( (this.current_page - 1) * this.per_page + this.per_page, total_num)

            return this.articles.slice(start_index, end_index)
        }
    },
    methods: {
        ...mapActions('articles', ['readArticles', 'saveArticle', 'deleteArticle'])
    },
    created(){
        this.readArticles()
    }

}
</script>

<style lang="scss">

.news-indi > ul > li.active button.page-link {
    background-color: $gray4!important;
    border-color: $gray4!important;
    color: #fff!important;
    font-weight: 500;
}
.news-indi > ul > li > span, 
.news-indi > ul > li > button{
    border:0;
    font-size: 1.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgba(0,0,0,0);
}
.news-indi > ul > li.page-item.disabled .page-link{
    background-color: rgba(0,0,0,0)!important;
}
.news-indi > ul > li > span{
    color: $gray4!important;
}
.news-indi > ul > li > button{
    color: $gray6!important;
}
button.page-link:focus,
button.see-article:focus {
    outline: none;
    box-shadow: none;
}
</style>