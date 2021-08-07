function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// 找到本层.vue结尾的文件,不匹配子路径
const requireComponent = require.context("./", false, /\.vue$/);

const install = (Vue) => {
  requireComponent.keys().forEach((fileName) => {
    // 获取第i个
    let config = requireComponent(fileName);
    // ./XButton.vue
    let componentName = changeStr(
      fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")
    );
    Vue.component(componentName, config.default || cofgin);
  });
};

export default {
  install,
};
