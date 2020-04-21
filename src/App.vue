<template>
  <div id="app">
    <GrpcWebTestClient title="gRPC-Web Test Client" />
  </div>
</template>

<script>
import GrpcWebTestClient from "./components/GrpcWebTestClient.vue";

export default {
  name: "app",
  components: {
    GrpcWebTestClient
  }
};
</script>

<style lang="scss">
#app {
}
</style>
