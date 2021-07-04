<template>

  <!--  演示vue-router的使用-->
  <div>

    <div>
      <text>{{ header }}</text>
    </div>

    <div class="nav">
      <text @click="jump('index')" :class="[select==='index'?'selected':'unselected']">主页</text>
      <text @click="jump('cart')" :class="[select==='cart'?'selected':'unselected']">购物车</text>
      <text @click="jump('me')" v-bind:class="[select==='me'?'selected':'unselected']">我的</text>
    </div>

    <router-view></router-view>
  </div>

</template>


<script>

export default {
  name: "RouterTest",
  data() {

    return {
      header: '今日上新',
      select: 'index'
    }
  },
  methods: {
    jump(str) {
      console.log('==='+str)
      this.select = str;
      switch (str) {
        case 'index':
          this.header = '今日上新'
          this.$router.push("/home");   //android跳转路由
          break;
        case 'cart':
          this.header = '购物车'
          this.$router.push("/cart");
          break;
        case 'me':
          this.header = '我的'
          this.$router.push("/me");
          break;
      }

    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 5px;
  display: flex;
  width: 750px;
  flex-direction: row;
  justify-content: space-around;
}

.selected {
  font-size: 40px;
  color: red;
  background-color: #00B4FF;
}

.unselected {
  font-size: 20px;
  color: gray;
}

</style>