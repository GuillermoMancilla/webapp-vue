<bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
<template>
  <div class="flex justify-center mt-16 mb-8 bg-indigo-100">
    <pulse-loader :loading="isLoading" :color="'#4A90E2'" :size="25" />
    <px-table v-if="!isLoading" :assets="assets" class="-mt-16 -mb-2"/>
  </div>
</template>

<script>
import PxTable from "@/components/PxTable";
import api from "@/api";

export default {
  name: "Home",
  components: {
    PxTable
  },

  data() {
    return {
      assets: [],
      isLoading:true
    };
  },
  created() {
    api.getAssets().then(assets => (this.assets = assets)).finally(() => (this.isLoading = false))
  }
};
</script>
