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
  render(h) {
    return h(
      "button",
      {
        // v-bind:class
        class: {
          tag: true,
          "tag-success": this.type === "success",
          "tag-danger": this.type === "danger",
          "tag-warning": this.type === "warning",
          "tag-info": this.type === "info",
          normal: !this.type,
        },
        // dom属性
        // domProps: {
        //   innerText: this.text || "默认标签"
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
      this.$emit("myEvent");
    },
    handleSlot(slot) {
      if (slot && slot.length > 0) {
        return slot[0].text;
      }
      return this.text || "默认标签";
    },
  },
};
</script>
<style scoped>
.tag {
  /* width: 100px; */
  padding: 0 10px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  background: #ecf5ff;
  color: #409eff;
  border: 1px solid #d9ecff;
}
.tag-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
.tag-danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
.tag-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.tag-info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
/* .normal {
  background: #ecf5ff;
  color: #409eff;
  border: 1px solid #d9ecff;
} */
</style>
