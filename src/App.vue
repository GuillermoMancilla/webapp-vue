<template>
  <div id="app">
    <px-header />

    <router-view class="container px-5 sm:px-20 py-20 bg-indigo-100 justify-center mt-16" />
    <px-footer />
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "app",
  components: { PxHeader, PxFooter }
};
</script>

<style scoped>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

</style>
