<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
    <PostUpload v-if="showPostUpload" />
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
import PostUpload from '../components/PostUpload.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
</script>
<style scoped></style>
