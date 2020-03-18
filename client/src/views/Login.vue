<template>
  <div>
    <div v-if="loginInfo">{{ loginInfo }}</div>
    <div v-else>
      ログイン情報を入力
      <br />
      <input v-model="username" placeholder="username" />
      <br />
      <input v-model="password" placeholder="password" />
      <br />
      <input type="button" value="Login" @click="loginHandler" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loginInfo: null
    };
  },
  methods: {
    loginHandler() {
      axios
        .post("/api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.status == 200) {
            this.loginInfo = "ログインできました";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
