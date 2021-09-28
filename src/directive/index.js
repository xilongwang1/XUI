import Vue from 'vue';
import copy from './copy'; // 引入 v-copy 指令
import ellipsis from "./ellipsis"; // 引入 v-ellipsis 指令
// import other directives

const directives = {
  ellipsis,
  copy,
  // other directives
}

const install = (Vue) => {
  Object.keys(directives).forEach(name => Vue.directive(name, directives[name]))
};

export default {
  install,
};