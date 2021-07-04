<template>
  <list class="list" ref="list" @loadmore="loadmore" loadmoreoffset="1" @scroll="scroll" offset-accuracy=10
        show-scrollbar=false>
    <refresh @refresh="onrefresh" class="refresh" :display="refreshing ? 'show' : 'hide'">
<!--      <div class="refresh-div">-->
        <text>Refreshing</text>
        <!--      一旦涉及到这个 loading， 尺寸就不对了. 添加个div貌似好了-->
        <loading-indicator class="indicator-refresh"></loading-indicator>
<!--      </div>-->
    </refresh>

    <header>这是header</header>

    <cell v-for="num in names" class="cell">
      <div class="panel">
        <text class="text">{{ num }}</text>
      </div>
    </cell>

    <loading :display="isLoadMore ? 'show' : 'hide'" class="loading">
      <div class="div">
        <text class="loadingtext">这是footer:上拉加载更多1111</text>
        <loading-indicator class="indicator"></loading-indicator>
      </div>

    </loading>

  </list>
</template>

<script>
let count = 0;
const modal = weex.requireModule('modal');
export default {
  name: "PullRefresh",
  data() {
    return {
      names: ["1111", "2", "7", "9"],
      isLoadMore: false,
      refreshing: false
    }
  },
  methods: {
    onrefresh() {

      this.refreshing = true;

      setTimeout(() => {
        console.log("onrefresh调用了")
        this.names = []
        this.names.push("21111", "22", "27", "29")
        this.refreshing = false;
      }, 2000)
    },
    loadmore() {
      modal.toast({
        message: '触发 loadmore 事件'
      })
      this.isLoadMore = true;
      setTimeout(() => {
        if (count >= 4) {
          this.isLoadMore = false
          return
        }
        count++;

        this.names.push('11111')
        this.resetLoadMore();
        this.isLoadMore = false
      }, 3000000)
    },
    scroll(e) {
      // modal.toast({
      //   message: JSON.stringify(e.contentSize) + ' ' + JSON.stringify(e.contentOffset)
      // })
    },
    // 重置 loadmore
    resetLoadMore() {
      this.$refs["list"].resetLoadmore();
    }
  }
}
</script>


<style scoped>
.list {
  border-width: 10px;
  border-color: black;
  border-style: solid;
}


.panel {
  width: 600px;
  height: 400px;
  /*margin-left: 75px;*/
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  /*justify-content: center;*/
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}

.text {
  font-size: 88px;
  text-align: center;
  color: #41B883;
}

.loadingtext {
}

/*注意一个问题,加载区域的高度需要手动设置的,如果不设置,它会被子组件的撑开,所以你有两个选择,设置</loading> 组件的高度或者子组件的高度*/
.loading {
  width: 600px;
  height: 120px;
  margin-left: 75px;
  /*注意这个margin-top， 和android里的不一样， margin-top说的是当前组件的底部，距离上面组件的底部的距离*/
  /*貌似不是上面说的这个原因， 主要原因是：这个loading 正常是覆盖在最后一个cell上面的，  是把loading组件的底部和最后一个cell的底部重合，然后往上绘制渲染。所以这里我们要把他往下移动，所以用margin-top*/
  /*那margin-top多少呢？ 应该就是loading的高度+loading与最后一个cell的间隔*/
  /*如果loading中有多个div的话，则最后一个div  和最后一个cell的底部重合，然后往上按顺序绘制倒数第二个，倒数第三个，以此类推*/
  /*在现在这个例子中，当我们修改loading中div的高度，就能看到最后一个cell下面空出个指定的大小，就是用来放loading的。*/
  margin-top: 120px;
  margin-bottom: -120px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
}

/*.div{*/
/*  width: 600px;*/
/*  height: 120px;!*这个div 120px， 最后一个cell的下面就会留下120空白来绘制这个div*!*/
/*不用这个div也可以， 高度在上面的loading直接指定了*/
/*  border-width: 6px;*/
/*  border-style: solid;*/
/*  border-color: rgb(0, 0, 0);*/
/*  background-color: rgba(0, 0, 192, 0.8);*/
/*}*/

.indicator {
  width: 100px;
  height: 100px;
  background-color: chartreuse;
}

.indicator-refresh {
  /*margin-top: 16px;*/
  height: 40px;
  width: 40px;
  background-color: blue;

  /*给 indicator 设置颜色在web上无法生效， 在真机可以生效*/
  color: red;
}

.refresh {
  width: 750px;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}

.refresh-div {
  background-color: #0088fb;
}

.cell {
  background-color: rgba(255, 0, 192, 0.2);;
  border-width: 2px;
  border-color: black;
  border-style: solid;
}

</style>