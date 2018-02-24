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
        <!-- <div class="full-icon">
          <Tooltip content="全屏" placement="bottom">
            <Icon type="arrow-expand" color="#fefefe" size="24"></Icon>
          </Tooltip>
        </div> -->
        <full-screen></full-screen>
        <div class="lock-icon">
          <Tooltip content="锁屏" placement="bottom">
            <Icon type="locked" color="#fefefe" size="20"></Icon>
          </Tooltip>

        </div>
        <!-- <div class="chat-icon"> -->

          <!-- <Tooltip :content="isLang ? '中文' : 'English'" placement="bottom">
            <Icon :type="isLang ? 'ios-world-outline' : 'ios-world'" color="#fefefe" size="24"></Icon>
          </Tooltip> -->

          <!-- <Tooltip content="语言切换" placement="bottom">
            <Icon type="ios-world-outline" color="#fefefe" size="22">ee</Icon>
            <Icon type="ios-world" color="#fefefe" size="22">ee</Icon>
          </Tooltip> -->

        <!-- </div> -->
        <international></international>
        <Tooltip content="浮世绘账号：yiluyanxia" placement="bottom-end">
          <Avatar icon="person" class="avator" style="background: #9a9a95;" />
        </Tooltip>

      </div>
    </div>
  </div>

</template>

<script>
  import fullScreen from './fullScreen'
  import international from './international'
  export default {
    components: {
      fullScreen,
      international
    },
    data() {
      return {
        searchVal: "",
        avatorPath: './assets/images/avatar.jpg',
      };
    },
    computed: {},
    mounted() {},
    methods: {}
  };

</script>
