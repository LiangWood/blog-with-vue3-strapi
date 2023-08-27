<template>
  <div>
    <h2 class="title">搜索結果: 測試</h2>
    <PostList>
      <PostItem v-for="post in searchResult" :key="post.id" :post="post" />
    </PostList>
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const store = useStore();
const route = useRoute();

const searchResult = computed(() => store.state.post.searchResult);
const term = computed(() => route.params.term);
</script>
<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
