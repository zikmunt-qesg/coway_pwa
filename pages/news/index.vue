<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <logger title="지속가능성 뉴스 - 목록"></logger>
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">COWAY SUSTAINABILITY NEWS</h2></b-col>
    </b-row>
    <b-container>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5">
                <section class="px-3 px-md-4 px-lg-5 py-4 py-lg-5">
                    <div class="d-flex mb-45 position-relative overflow-hidden"> <h4 class="parang7 fw-500 bg-white pr-4" style="z-index:10">지속가능경영 뉴스</h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>

                    <b-table-simple responsive class="txt-table  sustainability-table f-95">
                        <b-thead>
                            <b-tr>
                                <b-td>No.</b-td> <b-td > 제목 </b-td> <b-td> 게시날짜 </b-td>
                            </b-tr>
                        </b-thead>
                        <b-tbody v-for="item in current_articles" :key="item.id">
                            <b-tr>
                                <b-td class="py-2">{{ item.index }}</b-td> 
                                <b-td class="py-2">
                                    <b-button @click.stop.prevent="$router.push('/news/view_article?id='+item.id)" block variant="icon" class="see-article p-0 text-left fw-400 font-noto"> {{ item.title }} </b-button>
                                </b-td>
                                <b-td class="py-2">{{ item.date }}</b-td>                        
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
                </section>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>                 
    </b-container>
    <hr class="space-p75">
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    async asyncData({ query, store }) {
        await store.dispatch('articles/readArticles')
        return { id: query.id }
    },
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