<template>
  <div class="index.vue">
    <h2>这是render页面</h2>
    <x-button :type="type" :text="text" @myEvent="changes" />
    <x-button :type="type1" :text="text1" @myEvent="changes" />
    <x-button :type="type2" :text="text2" @myEvent="changes" />
    <x-button :type="type3" :text="text3" @myEvent="changes" />
    <x-button>插槽按钮</x-button>
    <x-button :type="type" :text="text" @myEvent="changes">插槽成功</x-button>
    <div style="margin-top: 30px" />
    <x-tag :type="type5" :text="text5" @myEvent="changes" />
    <x-tag :type="type6" :text="text6" @mEvent="changes" />
    <x-tag :type="type7" :text="text7" @myEvent="changes" />
    <x-tag :type="type8" :text="text8" @myEvent="changes" />
    <x-tag :type="type3" :text="text3" @myEvent="changes" />
    <x-tag @myEvent="changes" :type="type5">插槽标签</x-tag>
    <div style="margin-top: 30px" />
    <x-button :type="type" v-permission="'button'">我是权限button</x-button>
    <x-button :type="type" v-permission="'2'">我是权限2</x-button>
    <x-tag @myEvent="changes" :type="type5" v-permission="'tag'">我是权限tag</x-tag>
    <!-- {{ $store.state }} -->
    <x-button :type="type">{{ $store.state.name }}</x-button>
    <x-button :type="type">{{ render }}</x-button>
    <div style="margin-top: 30px" />
    <x-button :type="type" v-copy id="text">单击复制此文本</x-button>
    <x-button :type="type" v-copy.dblclick>双击击复制此文本</x-button>
    <x-button :type="type" v-copy.icon>icon复制此文本</x-button>
    <div style="width: 200px" v-ellipsis>需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本</div>
  </div>
</template>
<script>
export default {
  name: "Render",
  isVuex: true,
  data() {
    return {
      type: "success",
      text: "成功按钮",
      type1: "danger",
      text1: "危险按钮",
      type2: "warning",
      text2: "警告按钮",
      type3: "",
      text3: "",
      // ========================
      type5: "success",
      text5: "成功标签",
      type6: "danger",
      text6: "危险标签",
      type7: "warning",
      text7: "警告标签",
      type8: "info",
      text8: "置灰标签",
      //=====================
      render: "默认",

      emptyValue:{
        content: '暂无列表',
        // img: require('../../assets/images/blue_big.png'),
        img: 'https://testoss.dianmeicn.cn/management/2021092616260277086.png',
        visible: true,
      },
    };
  },

  methods: {
    changes(e) {
      console.log("按钮改变了", e);
      console.log(this.$store.state);
      this.render = this.$store.state.Render.name;
    },
  },
  mounted() { },
};
</script>

<style lang="scss" scoped>
</style>
