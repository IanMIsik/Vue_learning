<template>
  <div class="q-pa-md row items-start">
    <br />
    <div class="text-h1 fixed-center">{{ login }}</div>
  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPageComponent',
  setup() {
    return {
      login: 'Login Here',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
