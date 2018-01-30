<template>
  <div class="sidebox navbox">
    <Menu active-name="1" width="auto">
      <MenuGroup title="Image Management">
        <MenuItem name="1">
        <Icon type="images"></Icon>
        My Images
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="Category Management">
        <MenuItem name="3">
        <Icon type="ios-browsers"></Icon>
        All
        </MenuItem>
        <MenuItem name="4">
        <Icon type="plane"></Icon>
        Travel
        </MenuItem>
        <MenuItem name="5">
        <Icon type="icecream"></Icon>
        Funny
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    mounted() {},
    methods: {}
  };

</script>
