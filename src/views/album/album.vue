<template>
  <div class="component">
    <div class="subtitlebox">
      <h3 class="title">Album</h3>
    </div>
    <div class="shadowbox">
      <Row :gutter="16">
        <Col :xs="12" :sm="6" :lg="3">
          <div class="ablum-item">
            <Poptip trigger="hover" title="Travel" content="10 images">
            <Icon type="plane" size="48"></Icon>
            </Poptip>
          </div>
        </Col>

      </Row>
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
