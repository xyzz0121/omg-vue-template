<template>
  <div class="App">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {};
  },
  mounted(){
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
</style>