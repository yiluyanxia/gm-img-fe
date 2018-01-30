<template>
  <div class="whole clearfix">
    <topbar></topbar>
    <sidebar></sidebar>
    <toolbar></toolbar>
    <div class="mainbox">
      <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    </div>
    
  </div>
</template>

<script>
import topbar from "@/components/topbar";
import sidebar from "@/components/sidebar";
import toolbar from "@/components/toolbar";

export default {
  components: {
    topbar,
    sidebar,
    toolbar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
