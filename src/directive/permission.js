function checkArray(key) {
  // 模拟用户所具有的全部权限
  let arr = ["button", "tag", "1"];
  let index = arr.indexOf(key);
  return index > -1 ? true : false;
}

const install = (Vue) => {
  Vue.directive("permission", {
    inserted(el, binding) {
      let displayKey = binding.value;
      if (displayKey) {
        let hs = checkArray(displayKey);
        if (!hs) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      } else {
        throw new Error(`need Key! like v-permission = "'key'"`);
      }
    },
  });
};
export default {
  install,
};
