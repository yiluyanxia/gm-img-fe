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
        <MenuItem name="1">
        <Icon type="help-circled"></Icon>
        Help
        </MenuItem>
        <MenuItem name="2">
        <Icon type="eye-disabled"></Icon>
        About me
        </MenuItem>
      </MenuGroup>
    </Menu>
    <help></help>
  </div>
</template>
<script>
import Help from '@/views/help/help'
export default {
  components:{
    Help
  },
  data() {
    return {};
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
      this.$emit("on-change", active);
    }
  }
};
</script>
