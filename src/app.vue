<template>
  <div id="text">
    {{ text }}
    <router-link to="/login">登录页</router-link>
    <router-link to="/test">test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "welcome to VUE!!!",
    };
  },
};
</script>

<style>
#text {
  color: red;
}
</style>
