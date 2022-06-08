<template>
  <div class="q-pa-md row items-start">
    <div class="text-h1 fixed-center">{{ repo }}</div>
  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReposPageComponent',
  setup() {
    return {
      repo: 'repo details go here',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
