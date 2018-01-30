<template>
  <div class="whole clearfix">
    <topbar></topbar>
    <sidebar></sidebar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import topbar from "@/components/topbar";
import sidebar from "@/components/sidebar";

export default {
  components: {
    topbar,
    sidebar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
