<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal",
    },
    text: {
      type: String,
      default: "normal",
    },
  },
  // 免去的转译的过程
  render(h, params) {
    return h(
      "button",
      {
        // v-bind:class
        class: {
          btn: true,
          "btn-success": this.type === "success",
          "btn-danger": this.type === "danger",
          "btn-warning": this.type === "warning",
          normal: !this.type,
        },
        // dom属性
        // domProps: {
        //   // innerText: this.text || "默认按钮",
        // },
        on: {
          click: this.handleClick,
        },
      },
      this.handleSlot(this.$slots.default)
    );
  },
  methods: {
    handleClick() {
      this.$emit("myEvent", this.handleSlot(this.$slots.default));
    },
    handleSlot(slot) {
      if (slot && slot.length > 0) {
        return slot[0].text;
      }
      return this.text || '默认按钮';
    },
  },
};
</script>
<style scoped>
.btn {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
}
.btn-success {
  background: green;
}
.btn-danger {
  background: red;
}
.btn-warning {
  background: orange;
}
.normal {
  background: gray;
}
</style>
