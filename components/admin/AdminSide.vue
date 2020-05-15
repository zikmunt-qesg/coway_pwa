<template>
  <div>
    <b-list-group class="pt-4 mx-2">
      <b-list-group-item button @click="$router.push('/dashboard/analytics')">페이지 뷰</b-list-group-item>
      <b-list-group-item button @click="$router.push('/dashboard/news_admin')">뉴스 관리</b-list-group-item>
    </b-list-group>
  </div>
</template>