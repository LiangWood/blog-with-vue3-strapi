<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
</script>
<style scoped></style>
