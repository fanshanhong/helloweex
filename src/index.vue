<template>
  <div class="wrapper">
    <PullRefresh></PullRefresh>
    <image :src="logo" class="logo" style="width:200px;height:200px"/>
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>

    <div class="box1">12231321</div>
    <div class="box2">34</div>
    <!--    这里要写待跳转页面需要是一个 Weex 页面的js地址-->
    <a href="../dist/components/HelloWorld.js">
      <!--      必须使用 text 组件-->
      <text>跳转1111</text>
    </a>
    <a href="../dist/components/PullRefresh.js">
      <!--      必须使用 text 组件-->
      <text>跳转1111</text>
    </a>

    <!--    演示web组件的使用， 主要用于加载网页-->
<!--    <Web></Web>-->

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
// import Web from '@/components/web'
import PullRefresh from '@/components/PullRefresh'

export default {
  name: 'IIII',
  components: {
    HelloWorld,
    // Web,
    PullRefresh
  },
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    }
  },
  methods: {
    getImageStyle() {
      // 这里拿到的 this.data.scale 是 undefined
      let width = 100 * this.data.scale;
      let height = 100 * this.data.scale;
      console.log("width:" + width + "  height:" + height)
      return 'width:' + width + 'px;height:' + height + 'px'
    },
  }
}
</script>

<style scoped>
.box1 {
  width: 100px;
  height: 100px;
  /* background: #00B4FF; */
  /*  在 Weex 中，background这种简写的方式不生效的。必须按照下面这样的方式写完整才可以*/
  background-color: green;

  /*  border: 10px solid black; */
  /*  同样的，border也不支持简略的写法, 必须按照下面的完整写法*/
  border-color: black;
  border-style: solid;
  border-width: 10px;
}

.box2 {
  width: 100px;
  height: 100px;
  background: red;
  background-color: red;
}

.wrapper {
  /*justify-content: center;*/
  align-items: center;
}

.logo {
  width: 424px;
  height: 200px;
}

.greeting {
  text-align: center;
  margin-top: 10px;
  font-size: 50px;
  color: #41B883;
}

.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
