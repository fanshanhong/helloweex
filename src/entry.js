import Vue from 'vue';
import weex from 'weex-vue-render';


// 注意：路径问题，如果是根路径，前面记得加@/ 如果是当前目录加./ ， 千万不能写相对路径！！！！
import myrouter from '@/myrouter'
// import IIII from './index'
import R from "@/components/RouterTest";
weex.init(Vue);

new Vue(Vue.util.extend({
    el:'#root',
    //将route集成到vue中
    router:myrouter,
},R))

myrouter.push('/home')






