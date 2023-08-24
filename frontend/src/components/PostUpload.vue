<template>
  <TheModal />
  <div class="postUpload">
    <label class="upload">
      <TheIcon icon="upload-image" />
      <input type="file" accept="image/*" class="fileChooser" />
    </label>
    <div class="postContent">
      <textarea placeholder="寫點什麼..." class="postContentInput"></textarea>
      <button class="pubBtn button">發布</button>
    </div>
  </div>
  <TheModal />
</template>
<script setup>
import TheIcon from './TheIcon.vue';
import TheModal from './TheModal.vue';
</script>
<style scoped>
.postUpload {
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}
.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.postContentInput::placeholder {
  color: #757575;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
</style>
