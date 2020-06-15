<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="py-5 bg-blue3 mb-5">
        <b-col class="py-5 my-3 my-md-4 text-center text-white"><h1>Coway Sustainability News</h1></b-col>
    </b-row>
    <b-container>
        <h4 class="mb-4 pb-2 border-bottom"> 지속가능경영 뉴스 게시물 </h4>
        <b-table-simple responsive class="txt-table">
            <b-thead>
                <b-tr>
                    <b-td>No.</b-td> <b-td > 제목 </b-td> <b-td> 게시날짜 </b-td>
                </b-tr>
            </b-thead>
            <b-tbody v-for="item in current_articles" :key="item.id">
                <b-tr>
                    <b-td class="py-3">{{ item.index }}</b-td> 
                    <b-td class="py-3">
                        <b-button @click.stop.prevent="$router.push('/news/view_article?id='+item.id)" block variant="icon" class="p-0 text-left fw-400"> {{ item.title }} </b-button>
                    </b-td>
                    <b-td class="py-3">{{ item.date }}</b-td>                        
                </b-tr>
            </b-tbody>
        </b-table-simple>

        <b-pagination
        v-model="current_page"
        :total-rows="articles.length"
        :per-page="per_page"
        aria-controls="article-table"
        ></b-pagination>
                
    </b-container>
    <hr class="space-p75">
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
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
        current_articles(){
            let total_num = this.articles.length 
            let start_index = (this.current_page - 1) * this.per_page
            let end_index = Math.min( (this.current_page - 1) * this.per_page + this.per_page, total_num)

            return this.articles.slice(start_index, end_index)
        }
    },
    methods: {
        ...mapActions('articles', ['readArticles', 'saveArticle'])
    },
    created(){
    }
}
</script>
-