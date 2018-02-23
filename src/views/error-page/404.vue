<template>
  <div class="component">
    <div class="errorbox">
      <img class="img" src="../../assets/images/404.png">
      <div class="info">
        <h3 class="brand">yiluyanxia</h3>
        <p>
          <b>404.</b>
          <span>That’s an error.</span>
        </p>
        <p>The requested URL was not found on this server.
          <span>That’s all we know.</span>
        </p>

      </div>

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
    methods: {}
  };

</script>
<style>
  .errorbox {
    color: #222;
    text-align: unset;
    margin: 7% auto 0;
    max-width: 600px;
    min-height: 180px;
    padding: 30px 0 15px;
  }

  .errorbox .brand {
    font-size: 36px;
  }

  .errorbox p {
    margin: 11px 0 22px;
  }

  .errorbox p span {
    color: #777;
  }

</style>
