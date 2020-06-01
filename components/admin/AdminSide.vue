<template>
<div>
    <b-list-group class="pt-4 mx-2">
        <b-list-group-item button @click="$router.push('/dashboard/analytics')" class="mb-2"
        :variant="active_page=='/dashboard/analytics' ? 'blue':'dark'"
        > 페이지 뷰
        </b-list-group-item>
        <b-list-group-item button @click="$router.push('/dashboard/news_admin')"
        :variant="active_page=='/dashboard/news_admin' || active_page=='/dashboard/write_article' ? 'blue':'dark'"
        > 뉴스 관리
        </b-list-group-item>
    </b-list-group>
</div>
</template>
<script>
export default {    
    computed:{
        active_page(){
            return this.$route.path
        }
    }
}
</script>
<style scoped lang="scss">
.list-group-item-dark{
    font-size: 1.1rem;
    background-color: $gray6;
    border: 0;
    color: $gray2
}
.list-group-item-dark:hover{
    font-size: 1.1rem;
    background-color: $gray3;
    color: $gray7;
    font-weight: 400;
}
.list-group-item-blue, .list-group-item:focus{
    font-size: 1.1rem;
    background-color: $coway-blue!important;
    border: 0;
    color: $gray2
}
</style>