<template>
  <div class="component">
    <div class="subtitlebox my-images-subtitle">
      <h3 class="title">My images</h3>
      <div class="changebox">
        <Button type="text" @click="isShow1=true,isShow2=false,isShow3=false">
          <Icon type="grid" size="30" :color="isShow1 ?colorOn:colorOff"></Icon>
        </Button>
        <Button type="text" @click="isShow2=true,isShow1=false,isShow3=false">
          <Icon type="android-apps" size="30" :color="isShow2 ?colorOn : colorOff"></Icon>
        </Button>
        <Button type="text" @click="isShow3=true,isShow1=false,isShow2=false">
          <Icon type="android-list" size="28" :color="isShow3 ?colorOn:colorOff"></Icon>
        </Button>
      </div>
    </div>
    <div class="my-images shadowbox">

      <grid-mini-images v-if="isShow1"></grid-mini-images>
      <grid-images v-if="isShow2"></grid-images>
      <waterfullImages v-if="isShow3"></waterfullImages>
    </div>

  </div>
</template>

<script>
  import gridMiniImages from './grid-mini-images.vue'
  import gridImages from './grid-images.vue'
  import waterfullImages from './waterfall-images.vue'

  export default {
    components: {
      gridMiniImages,
      gridImages,
      waterfullImages
    },
    data() {
      return {
        isShow1: true,
        isShow2: false,
        isShow3: false,

        colorOn: "#2d8cf0",
        colorOff: "#606060",
      };
    },
    computed: {},
    mounted() {},
    methods: {}
  };

</script>
