// 用于定于路由


// 导入路由模块
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@/Home'
import Cart from '@/Cart'
import Me from "@/Me";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/cart', component: Cart},
        {path: '/me', component: Me},
    ]

})



