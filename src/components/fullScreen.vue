<template>
  <div class="full-icon" @click="fullScreen">
    <Tooltip :content="isFull ? '退出全屏' : '全屏'" placement="bottom">
      <Icon :type="isFull ? 'arrow-shrink' : 'arrow-expand'" color="#fefefe" size="24"></Icon>
    </Tooltip>

    <!-- <Tooltip content="全屏" placement="bottom">
      <Icon type="arrow-expand" color="#fefefe" size="24"></Icon>
    </Tooltip> -->
  </div>

  <!-- <div class="fullscreen" @click="fullScreen">
    <i class="el-icon-d-caret"></i>
	</div> -->
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isFull: false
    };
  },
  computed: {},
  methods: {
    fullScreen() {
      if (!screenfull.enabled) {
        this.$Message.info("Your browser does not support full screen.");
        return false;
      }
      screenfull.toggle();
      screenfull.on("change", () => {
        this.isFull = screenfull.isFullscreen 

      });

    }
  },
  mounted() {}
};
</script>
<style>

</style>
