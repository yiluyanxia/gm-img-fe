<template>
  <div class="component">
    <div class="subtitlebox">
      <h3 class="title">cropper</h3>
    </div>
    <div class="cropper-upload shadowbox">
      <Row>
        <Col :sm="24" :md="16">
        <div class="cropper">
          <img id="cropimg" class="cropper-img" src="../../assets/images/picture.jpg" alt="">
        </div>
        </Col>
        <Col :sm="24" :md="{span: 7, offset: 1}">
        <div class="previewbox clearfix">
          <div class="cropper-preview preview-img"></div>

          <div class="cropper-preview preview-img-md"></div>

          <div class="cropper-preview preview-img-sm"></div>

          <div class="cropper-preview preview-img-xs"></div>
        </div>
        <div class="previewinfo">
          <ul>
            <li>
              <label>X:</label>px</li>
            <li>
              <label>Y:</label>px</li>
            <li>
              <label>Width:</label>px</li>
            <li>
              <label>Height:</label>px</li>
            <li>
              <label>Rotate:</label>deg</li>
            <li>
              <label>ScaleX:</label>
            </li>
            <li>
              <label>ScaleY:</label>
            </li>
          </ul>
        </div>

        </Col>
      </Row>
      <div class="cropper-upload-btn">
        <Button type="primary" size="large">upload</Button>
        <ButtonGroup size="large">
          <Button type="primary">16:9</Button>
          <Button>4:3</Button>
          <Button>1:1</Button>
          <Button>2:3</Button>
          <Button>free</Button>
        </ButtonGroup>
        <Tooltip content="重置" placement="bottom">
          <Button type="primary" icon="refresh" size="large"></Button>
        </Tooltip>

        <Tooltip content="放大" placement="bottom">
          <Button type="primary" icon="plus" size="large"></Button>
        </Tooltip>
        <Tooltip content="缩小" placement="bottom">
          <Button type="primary" icon="minus" size="large"></Button>
        </Tooltip>
        <!-- <Icon type=""></Icon> -->
        <Tooltip content="左转15度" placement="bottom">
          <Button type="primary" icon="arrow-return-left " size="large"></Button>
        </Tooltip>
        <Tooltip content="右转15度" placement="bottom">
          <Button type="primary" icon="arrow-return-right" size="large"></Button>
        </Tooltip>
        <Tooltip content="左右翻转" placement="bottom">
          <Button type="primary" icon="arrow-graph-up-right" size="large"></Button>
        </Tooltip>
        <Tooltip content="上下翻转" placement="bottom">
          <Button type="primary" icon="arrow-graph-down-right" size="large"></Button>
        </Tooltip>

        <Tooltip content="左移" placement="bottom">
          <Button type="primary" icon="android-arrow-back" size="large"></Button>
        </Tooltip>
        <Tooltip content="右移" placement="bottom">
          <Button type="primary" icon="android-arrow-forward" size="large"></Button>
        </Tooltip>
        <Tooltip content="上移" placement="bottom">
          <Button type="primary" icon="android-arrow-up" size="large"></Button>
        </Tooltip>
        <Tooltip content="下移" placement="bottom">
          <Button type="primary" icon="android-arrow-down" size="large"></Button>
        </Tooltip>


        <Tooltip content="不可用" placement="bottom">
          <Button type="primary" icon="locked" size="large"></Button>
        </Tooltip>
        <Tooltip content="可用" placement="bottom">
          <Button type="primary" icon="unlocked" size="large"></Button>
        </Tooltip>
        <Tooltip content="zoom 100%" placement="bottom">
          <Button type="primary" icon="arrow-expand" size="large"></Button>
        </Tooltip>
        <Button type="primary" size="large">Done</Button>










      </div>
    </div>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import './cropper.min.css';
  // import 'cropperjs/dist/cropper.min.css';

  export default {
    data() {
      return {
        cropper: {},
        option: {
          showCropedImage: false,
          cropedImg: ""
        }
      };
    },
    computed: {},
    mounted() {
      let cropImg = document.getElementById("cropimg");
      this.cropper = new Cropper(cropImg, {
        dragMode: "move",
        preview: ".cropper-preview",
        restore: false,
        center: false,
        highlight: false,
        cropBoxMovable: false,
        toggleDragModeOnDblclick: false
      });
    },
    methods: {}
  };

</script>
