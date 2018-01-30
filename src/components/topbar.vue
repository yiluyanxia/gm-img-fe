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
          <Tooltip content="全屏" placement="bottom">
            <Icon type="arrow-expand" color="#fefefe" size="24"></Icon>
          </Tooltip>
          
        </div>
        <div class="lock-icon">
          <Tooltip content="锁屏" placement="bottom">
            <Icon type="locked" color="#fefefe" size="20"></Icon>
          </Tooltip>
          
        </div>
        <div class="chat-icon">
          <Tooltip content="3条消息" placement="bottom">
            <Icon type="chatbox-working" color="#fefefe" size="20"></Icon>
          </Tooltip>
          
        </div>
        <Tooltip content="浮世绘账号：yiluyanxia" placement="bottom-end">
          <Avatar icon="person" class="avator"  style="background: #9a9a95;" />
        </Tooltip>
        
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
      avatorPath:'./assets/images/avatar.jpg'
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
