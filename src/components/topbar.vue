<template>
  <div class="topbox">
    <div class="topcont">
      <div class="menuicon">
        <Button type="text">
          <Icon type="navicon" size="28" color="#e0e0df"></Icon>
        </Button>
        <span class="title">YILUYANXIA</span>
        <!-- <Button type="text" icon="navicon"></Button> -->
        <!-- <Icon type="navicon"></Icon> -->

      </div>
      <div class="searchbox">
        <Input v-model="searchVal">
          <Button slot="prepend" type="text">
            <Icon type="ios-search" size="18" color="#898984"></Icon>
          </Button>     
        </Input>
      </div>
      <div class="topavator">
        <div class="full-icon">
          <Icon type="arrow-expand" color="#fefefe" size="24"></Icon>
        </div>
      </div>
    </div>
  </div>
	
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchVal:"",
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
