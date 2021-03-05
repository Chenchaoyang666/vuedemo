<template>
  <div class="hello">
    <h1 style="display: flex;justify-content: center;margin: auto;">
      {{ msg }}
    </h1>
    <br />
    <div
      style="width: 500px;display: flex;justify-content: center;margin: auto;"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item style="justify-content: center;display: flex;">
          <el-button type="primary" @click="onSubmit">登录 </el-button>
        </el-form-item>
        <el-form-item style="justify-content: center;display: flex;">
          <el-button type="primary" @click="getUser">获取用户信息 </el-button>
          <el-button type="primary" @click="query_common_credit">获取菜单信息 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import mock from "../mock.js";
export default {
  name: "login",
  data() {
    return {
      msg: "login",
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("登录成功");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    getUser() {
      axios
        .get("/user")
        .then((res) => {
          console.log(JSON.stringify(res.data));
        })
        .catch((res) => {
          console.log(res);
        });
    },
    getMenu() {
      axios
        .get("http://localhost:8080/menu")
        .then((res) => {
          console.log(JSON.stringify(res.data));
        })
        .catch((res) => {
          console.log(res);
        });
    },
    query_common_credit(){
      var url = '/api/msdk/proxy/query_common_credit';
      axios.get(url)
        .then(response => {
          console.log(1111, response)
        })
        .catch(error => {
          
        })
    }
  },
};
</script>
<style scoped></style>
