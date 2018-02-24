<template>
  <div class="sidebox navbox">

    <Menu :active-name="$route.name" @on-select="changeMenu" width="auto">
      <template v-for="item in menuList">
        <MenuGroup :title="item.title">
          <template v-for="child in item.children">
            <MenuItem :name="child.name">
            <Icon :type="child.icon"></Icon>
            {{child.title}}
            </MenuItem>
          </template>

        </MenuGroup>
      </template>
    </Menu>

    <Menu active-name="1" width="auto"  @on-select="changeFakeMenu">
      <MenuGroup title="Others">
        <MenuItem name="help">
        <Icon type="help-circled"></Icon>
        {{$t('help')}}
        </MenuItem>
        <MenuItem name="about">
        <Icon type="eye-disabled"></Icon>
         {{$t('aboutMe')}}
        </MenuItem>
      </MenuGroup>
    </Menu>
    <help v-if="isHelpShow" :isHelp="isHelpShow"></help>
    <about v-if="isAboutShow" :isAbout="isAboutShow"></about>
  </div>
</template>
<script>
import Help from "@/views/others/help";
import About from "@/views/others/about";
export default {
  components: {
    Help,
    About,
  },
  data() {
    return {
      isHelpShow:false,
      isAboutShow:false,
    };
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    }
  },
  mounted() {
    this.init();
    console.log("this.menuList");
    console.log(this.menuList);
  },
  methods: {
    init: function() {
      this.$store.commit("updateMenulist");
    },
    changeMenu: function(active) {
      this.$router.push({ name: active });
    },
    changeFakeMenu: function(active) {
      console.log(active);
      if(active=="help"){
          this.isHelpShow = true;
          this.isAboutShow = false;
          console.log(this.isHelpShow);
      }
      if(active=="about"){
          this.isAboutShow = true;
          this.isHelpShow = false;
      }
      // this.$emit("on-change", active);
    }
  }
};
</script>
