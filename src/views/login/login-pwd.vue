<template>
  <div class="component loginwrap">
    <div class="loginbox">
      <h3 class="brand">Yiluyanxia</h3>
      <p class="name">Deer</p>
      <p class="info">SmallDeer@email.com</p>
      <ul class="loginform">
        <li>
          <input required='' type="text" class="inputbox">
          <label alt="Enter your password"></label>
        </li>
        <li class="li-btn clearfix">
          <span class="forgot" @click="showModal">Forgot password?</span>
          <Button class="form-btn" 
          type="primary" @click="goMyImages">NEXT</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    showModal: function() {
      this.$Modal.info({
        title: "Oops",
        content: "No one can help you"
      });
    },
     goMyImages: function() {
      this.$router.push('my-images/index')
    }
  }
};
</script>
