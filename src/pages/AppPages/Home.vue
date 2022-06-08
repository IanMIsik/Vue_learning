<template>
  <div class="hello">
    <img alt="Drexel CCI" src="../../assets/drexel-cci.png" />

    <h5>
      This application is built using the Vue framework with Quasar for UX
      Styling
    </h5>

    <h1 class="fixed-center">HOME PAGE GOES HERE</h1>

    <!--
    <b-list-group>
      <b-list-group-item>Pull the repo from github - <code>git clone https://github.com/ArchitectingSoftware/se575-web-design-vue.git</code></b-list-group-item>
      <b-list-group-item>Prep the project dependencies - <code>yarn install</code></b-list-group-item>
      <b-list-group-item>Install JSON Server - <code>yarn global add json-server</code></b-list-group-item>
      <b-list-group-item>Prep IDE, If VS Code - add Vetur Plugin</b-list-group-item>
      <b-list-group-item>For the API demo, start the server - run <code>start-test-server.sh</code> from the <code>/server</code> directory.</b-list-group-item>
    </b-list-group>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 48px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
