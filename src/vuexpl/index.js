let def = {
  install(Vue) {
    Vue.mixin({
      created() {
        if (this.$options.isVuex) {
          var name = this.$options.name;
          import("../store/modules/" + name).then((res) => {
            this.$store.registerModule(this.$options.name, res.default);
          });
        }
      },
    });
  },
};
module.exports = def;
