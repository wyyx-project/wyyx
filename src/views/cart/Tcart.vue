<template>
  <div>cartoon <tab-bar></tab-bar></div>
</template>

<script>
import Vue from "vue";
import tabBar from "@c/tabBar.vue";
export default {
  data() {
    return {
      item: 0,
    };
  },
  components: {
    tabBar,
  },
  methods: {
    onClickTabBarItem: function (tag) {
      this.item = tag;
    },
  },
};
</script>

<style>
</style>