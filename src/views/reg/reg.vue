<template>
  <div class="component loginwrap">
    <div class="loginbox">
      <h3 class="brand">Yiluyanxia</h3>
      <p class="name">Sign in</p>
      <p class="info">with your Account</p>
      <ul class="loginform">
        <li>
          <input required='' type="text" class="inputbox">
          <label alt="Email or phone"></label>
        </li>
        <!-- <li>
          <span class="forgot" @click="showModal">Forgot your account?</span>
        </li> -->
        <li class="li-btn clearfix">
          <Button class="form-btn" type="primary">NEXT</Button>
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
    }
  }
};
</script>
