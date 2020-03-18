<template>
  <div>
    都市名を入力
    <input v-model="message" placeholder="CityName" />
    <input type="button" value="検索" @click="searchCity" />
  </div>
</template>

<script>
export default {
  name: "CitySearch",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    searchCity() {
      this.$router.push({ path: `./city/${this.message}` });
    }
  }
};
</script>
