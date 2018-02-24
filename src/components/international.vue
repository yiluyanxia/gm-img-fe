<template>
  <div class="chat-icon" @click="changeLocale">
    <Tooltip :content="isLang ? '中文' : 'English'" placement="bottom">
      <Icon :type="isLang ? 'ios-world-outline' : 'ios-world'" color="#fefefe" size="24"></Icon>
    </Tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLang: true,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeLocale() {
      let locale = this.$i18n.locale;
      locale === "zh-CN" ? (this.$i18n.locale = "en-US") : (this.$i18n.locale = "zh-CN");
      this.isLang = !this.isLang

    }
  }
};
</script>
