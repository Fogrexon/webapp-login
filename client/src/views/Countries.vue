<template>
  <ui>
    <li v-for="item in items" :key="item.code">
      <router-link v-bind:to="{ path: `cities/${item.code}` }">{{
        item.name
      }}</router-link>
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
    axios.get("/api/countries").then(res => {
      this.items = res.data;
    });
  }
};
</script>
