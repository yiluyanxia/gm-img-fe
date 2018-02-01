<template>
  <div class="component">
    <div class="subtitlebox my-images-subtitle">
      <h3 class="title">My images</h3>
      <div class="changebox">
        
        <Button type="text">
          <Icon type="grid" size="30" color="#2d8cf0"></Icon>
        </Button>
        <Button type="text">
          <Icon type="android-apps" size="30" color="#606060"></Icon>
        </Button>
        <Button type="text">
          <Icon type="android-list" size="28" color="#606060"></Icon>
        </Button>
      </div>
    </div>
    <div class="my-images shadowbox">
      <grid-images v-if="isShow">    </grid-images>
      <waterfullImages v-if="!isShow"></waterfullImages>
    </div>

  </div>
</template>

<script>
import gridImages from './grid-images.vue'
import waterfullImages from './grid-images.vue'

export default {
  components:{
    gridImages,
    waterfullImages
  },
  data() {
    return {
      isShow: true,
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
