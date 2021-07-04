import Vue from 'vue';
import weex from 'weex-vue-render';

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






