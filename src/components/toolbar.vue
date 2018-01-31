<template>
  <div class="toolbox">
    <div class="create-btn">
      <div class="cropcont ">
        <Tooltip content="裁剪上传" placement="left">
          <Button type="primary" class="cropbtn animated zoomIn" shape="circle" icon="crop" @click="$router.push({name:'cropper-upload'})"></Button>
        </Tooltip>
      </div>
      <div class="pluscont">
        <Tooltip content="上传图片" placement="left">
          <Button type="primary" class="plusbtn" shape="circle" icon="plus"
          @click="$router.push({name:'direct-upload'})"></Button>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      };
    },
    computed: {},
    mounted() {},
    methods: {}
  };

</script>
