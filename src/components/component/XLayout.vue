<script>
export default {
  props: {},
  // 免去的转译的过程
  render(h, params) {
    return h(
      "section",
      {
        class: {
          XLayout: true,
        },
      },
      this.handleSlot(this.$slots.default)
    );
  },
  methods: {
    handleSlot(slot) {
      if (slot && slot.length > 0) {
        return slot[0].text;
      }
      // return this.text || '默认按钮';
      return ''
    },
  },
};
</script>
<style scoped>
.x-layout {
  display: flex;
  flex: auto;
  min-height: 0;
  flex-direction: column;
}
</style>
  