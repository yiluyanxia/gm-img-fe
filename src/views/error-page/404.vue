<template>
  <div class="component">
    <Row class="errorbox" type="flex" justify="center" align="middle">
      <Col :xs="24" :sm="12">
      <div class="imgbox">
        <img class="img-shape" src="../../assets/images/404.png">
      </div>
      </Col>
      <Col :xs="24" :sm="12">
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

      </Col>
    </Row>

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
