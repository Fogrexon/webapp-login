<template>
  <div>
    <div v-if="cityInfo">{{ cityInfo }}</div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cityInfo: null
    };
  },
  mounted() {
    const cityName = this.$route.params.cityName;
    const obj = this;
    axios
      .get("/api/cities/" + cityName)
      .then(res => {
        this.cityInfo = res.data;
      })
      .catch(err => {
        if (err.request.status == 403) {
          this.cityInfo = "ログインしていません。リダイレクトします。";
          setTimeout(() => obj.$router.push({ path: "../login" }), 3000);
          return;
        }
      });
  }
};
</script>
