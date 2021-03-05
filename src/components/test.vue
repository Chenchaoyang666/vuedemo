<!--  -->
<template>
  <div>
    test
    <button @click="onSubmit">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    onSubmit() {
      console.log("登录成功");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
<style scoped></style>
