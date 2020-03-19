<template>
  <ui>
    <li v-for="item in items" :key="item.id">
      <router-link
        v-bind:to="{ path: `../city/${item.countryCode}/${item.id}` }"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ui>
</template>

<script>
import axios from "axios";
export default {
  name: "Countries",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get("/api/cities/" + this.$route.params.countryCode).then(res => {
      this.items = res.data;
    });
  }
};
</script>
