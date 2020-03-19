<template>
  <div>
    <div v-if="cityInfo">
      <p>ID:{{ cityInfo.id }}</p>
      <p>Name:{{ cityInfo.name }}</p>
      <p>CountryCode:{{ cityInfo.countryCode }}</p>
      <p>District:{{ cityInfo.district }}</p>
      <p>Population:{{ cityInfo.population }}</p>
    </div>
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
    const countryCode = this.$route.params.countryCode;
    const cityCode = this.$route.params.cityCode;
    const obj = this;
    axios
      .get(`/api/city/${countryCode}/${cityCode}`)
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
