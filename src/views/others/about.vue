<template>
  <div class="component">
    <yanxia-drag v-model="isShow" left="260" top="340" title="About">
      <div class="about-cont">
        <p>本人靓照</p>
        <img src="../../assets/images/avatar.jpg">
      </div>
    </yanxia-drag>
  </div>
</template>

<script>
import yanxiaDrag from "yanxiaDrag";
export default {
  components: {
    yanxiaDrag
  },
  props:["isAbout"],
  data() {
    return {
      isShow: this.isAbout,
      collVal: "1"
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {
    isAbout(val) {
      this.isShow = val;
    }
  }
};
</script>
<style>
.about-cont {
  max-height: 516px;
  text-align: center;
  padding: 10px;
}
</style>


