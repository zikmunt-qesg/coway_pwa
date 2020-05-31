<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="py-5 bg-blue3 mb-5">
        <b-col class="py-5 my-3 my-md-4 text-center text-white"><h1>Coway Sustainability News</h1></b-col>
    </b-row>
    <b-container>
        <h5 class="mb-4 pb-2 border-bottom"> 지속가능경영 뉴스 게시물 </h5>
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
                    </b-td>
                    <b-td class="border-0">{{ item.date }}</b-td>                    
                    <b-td class="border-0"> 
                        <b-button @click.stop.prevent="$router.push('/news/write_article?id='+item.id)" block> 수정 </b-button>
                    </b-td>
                    <b-td class="border-0">
                        <b-button block>삭제</b-button>
                    </b-td>           
                </b-tr>
                <b-tr>
                    <b-td colspan="5" class="p-0">
                         <b-collapse :id="'collapse'+`${index}`" class="mb-2">
                            <b-card class="border-dotted bg-gray1 gray6 py-md-2 px-md-3">
                                <h7 class="border-bottom">{{ item.title }}</h7>
                                <b-card-body v-if="item.description!=''" class="border-0 bg-transparent f-95 fw-400">{{ item.description }}</b-card-body>
                                <b-card-body class="border-0 bg-transparent f-95"> <p v-html="item.contents"></p></b-card-body>
                                <div v-if="item.picture!=null" class="mt-3"><b-img src="item.picture"></b-img><span class="pl-3 f-80 gray6">{{ item.picture }}</span></div>
                            </b-card>
                        </b-collapse>      
                    </b-td>                
                </b-tr>
            </b-tbody>
        </b-table-simple>
                
        <div class="text-right">
            <b-button @click.stop.prevent="$router.push('/news/write_article')" variant="blue">새 글쓰기</b-button>
        </div>
    </b-container>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('articles', {
        articles: state => state.articles,
        is_articles_loaded: state => state.is_articles_loaded
        })
    },
    methods: {
        ...mapActions('articles', ['readArticles', 'saveArticle'])
    },
    created(){
        console.log(this.articles);
        
    }
}
</script>
-