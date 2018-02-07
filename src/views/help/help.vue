<template>
  <div class="component">
    <yanxia-drag v-model="isShow">
      <div class="help-cont">
        <Collapse v-model="collVal" accordion>
          <Panel name="1">
            How to use it?
            <p slot="content">
              Sign up and Sign in, Click the add button in the lower right corner. The rest is history.
            </p>
          </Panel>
          <Panel name="2">
            what is this?
            <p slot="content">
              Oops, It could be my homework. Keep it up.
            </p>
          </Panel>
          <Panel name="3">
            Who an I?
            <p slot="content">
              I want to change who I was.
            </p>
          </Panel>
        </Collapse>

      </div>
    </yanxia-drag>
  </div>
</template>

<script>
import yanxiaDrag from "yanxiaDrag";
export default {
  components: {
    yanxiaDrag
  },
  data() {
    return {
      isShow: true,
      collVal: "1"
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style>
.help-cont {
  max-height: 516px;
}
</style>

// 62, 128, 244 68, 133, 242
