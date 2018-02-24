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
              <label>X:</label>{{cropperdata.x}}px</li>
            <li>
              <label>Y:</label>{{cropperdata.y}}px</li>
            <li>
              <label>Width:</label>{{cropperdata.w}}px</li>
            <li>
              <label>Height:</label>{{cropperdata.h}}px</li>
            <li>
              <label>Rotate:</label>{{cropperdata.deg}}deg</li>
            <li>
              <label>ScaleX:</label>{{cropperdata.scaleX}}
            </li>
            <li>
              <label>ScaleY:</label>{{cropperdata.scaleX}}
            </li>
          </ul>
        </div>

        </Col>
      </Row>
      <div class="cropper-upload-btn">

        <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="cropChange" id="fileinput" class="fileinput"
        />
        <label for="fileinput" class="ivu-btn ivu-btn-primary ivu-btn-large">upload</label>

        <RadioGroup v-model="aspectRatioRadio" type="button" @on-change="cropAspectRatio">
          <Radio label="16:9"></Radio>
          <Radio label="4:3"></Radio>
          <Radio label="1:1"></Radio>
          <Radio label="2:3"></Radio>
          <Radio label="free"></Radio>
        </RadioGroup>
        <!-- <ButtonGroup size="large">
          <Button type="primary">16:9</Button>
          <Button @click="cropAspectRatio43">4:3</Button>
          <Button @click="cropAspectRatio11">1:1</Button>
          <Button @click="cropAspectRatio23">2:3</Button>
          <Button @click="cropAspectRatio">free</Button>
        </ButtonGroup> -->
        <Tooltip content="重置" placement="bottom">
          <Button type="primary" icon="refresh" size="large" @click="cropReset"></Button>
        </Tooltip>

        <Tooltip content="放大" placement="bottom">
          <Button type="primary" icon="plus" size="large" @click="cropZoomL"></Button>
        </Tooltip>
        <Tooltip content="缩小" placement="bottom">
          <Button type="primary" icon="minus" size="large" @click="cropZoomS"></Button>
        </Tooltip>
        <!-- <Icon type=""></Icon> -->
        <Tooltip content="左转15度" placement="bottom">
          <Button type="primary" icon="arrow-return-left " size="large" @click="cropRotateL"></Button>
        </Tooltip>
        <Tooltip content="右转15度" placement="bottom">
          <Button type="primary" icon="arrow-return-right" size="large" @click="cropRotateR"></Button>
        </Tooltip>
        <Tooltip content="左右翻转" placement="bottom">
          <Button type="primary" icon="arrow-graph-up-right" size="large" @click="cropScaleX"></Button>
        </Tooltip>
        <Tooltip content="上下翻转" placement="bottom">
          <Button type="primary" icon="arrow-graph-down-right" size="large" @click="cropScaleY"></Button>
        </Tooltip>

        <Tooltip content="左移" placement="bottom">
          <Button type="primary" icon="android-arrow-back" size="large" @click="cropMoveL"></Button>
        </Tooltip>
        <Tooltip content="右移" placement="bottom">
          <Button type="primary" icon="android-arrow-forward" size="large" @click="cropMoveR"></Button>
        </Tooltip>
        <Tooltip content="上移" placement="bottom">
          <Button type="primary" icon="android-arrow-up" size="large" @click="cropMoveU"></Button>
        </Tooltip>
        <Tooltip content="下移" placement="bottom">
          <Button type="primary" icon="android-arrow-down" size="large" @click="cropMoveD"></Button>
        </Tooltip>


        <Tooltip content="不可用" placement="bottom">
          <Button type="primary" icon="locked" size="large" @click="cropDisable"></Button>
        </Tooltip>
        <Tooltip content="可用" placement="bottom">
          <Button type="primary" icon="unlocked" size="large" @click="cropEnable"></Button>
        </Tooltip>
        <Tooltip content="zoom to 100%" placement="bottom">
          <Button type="primary" icon="arrow-expand" size="large" @click="cropZoomTo"></Button>
        </Tooltip>
        <Tooltip content="完成裁剪" placement="bottom">
          <Button type="primary" size="large" @click="cropGetCroppedCanvas">Done</Button>
        </Tooltip>
        <Modal v-model="cropOption.showCropedImage">
          <p slot="header">预览裁剪之后的图片</p>
          <img :src="cropOption.cropedImg" alt="" v-if="cropOption.showCropedImage" style="width: 100%;">
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs";
import "./cropper.min.css";
// import 'cropperjs/dist/cropper.min.css';

export default {
  data() {
    return {
      cropper: {},
      cropperdata: {
        x: "",
        y: "",
        w: "",
        h: "",
        deg: "",
        scaleX: "",
        scaleY: ""
      },
      cropOption: {
        showCropedImage: false,
        cropedImg: ""
      },
      aspectRatioRadio: "free"
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

    cropImg.addEventListener("crop", e => {
      this.cropperdata.x = parseInt(e.detail.x);
      this.cropperdata.y = parseInt(e.detail.y);
      this.cropperdata.w = parseInt(e.detail.width);
      this.cropperdata.h = parseInt(e.detail.height);
      this.cropperdata.deg = parseInt(e.detail.rotate);
      this.cropperdata.scaleX = parseInt(e.detail.scaleX);
      this.cropperdata.scaleY = parseInt(e.detail.scaleY);
    });
  },
  methods: {
    cropChange(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.cropper.replace(reader.result, true); // 这里必须设置true这个参数，否则旋转会有bug
        reader.onload = null;
      };
      reader.readAsDataURL(file);
    },
    cropZoomL() {
      this.cropper.zoom(0.1);
    },
    cropZoomS() {
      this.cropper.zoom(-0.1);
    },
    cropReset() {
      this.cropper.reset();
    },
    cropRotateL() {
      this.cropper.rotate(-15);
    },
    cropRotateR() {
      this.cropper.rotate(15);
    },
    cropScaleX() {
      this.cropper.scaleX(-this.cropper.getData().scaleX);
      // this.cropper.scaleX(-1);
    },
    cropScaleY() {
      this.cropper.scaleY(-this.cropper.getData().scaleY);
      // this.cropper.scaleY(-1);
    },
    cropMoveL() {
      this.cropper.move(-10, 0);
    },
    cropMoveR() {
      this.cropper.move(10, 0);
    },
    cropMoveU() {
      this.cropper.move(0, -10);
    },
    cropMoveD() {
      this.cropper.move(0, 10);
    },
    cropDisable() {
      this.cropper.disable();
    },
    cropEnable() {
      this.cropper.enable();
    },
    cropZoomTo() {
      this.cropper.zoomTo(1);
    },
    cropGetCroppedCanvas() {
      let file = this.cropper.getCroppedCanvas().toDataURL();
      this.cropOption.cropedImg = file;
      this.cropOption.showCropedImage = true;
    },
    cropAspectRatio169() {
      this.cropper.setAspectRatio(16 / 9);
    },
    cropAspectRatio43() {
      this.cropper.setAspectRatio(4 / 3);
    },
    cropAspectRatio11() {
      this.cropper.setAspectRatio(1 / 1);
    },
    cropAspectRatio23() {
      this.cropper.setAspectRatio(2 / 3);
    },
    cropAspectRatio(val) {
      let aspectRatio = val;
      switch (aspectRatio) {
        case "16:9":
          this.cropper.setAspectRatio(16 / 9);
          break;
        case "4:3":
          this.cropper.setAspectRatio(4 / 3);
          break;
        case "1:1":
          this.cropper.setAspectRatio(1 / 1);
          break;
        case "2:3":
          this.cropper.setAspectRatio(2 / 3);
          break;
        case "free":
          this.cropper.setAspectRatio();
          break;
      }
      // this.cropper.setAspectRatio();
    }
  }
};
</script>
