import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import User from '@/components/User'
import Carousel from '@/components/Carousel'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
	
  routes: [
    {
      path: '/',
      component: Music
    },
    {
    	path:'/Home',
    	component:Home
    	
    },
    {
    	path:"/Cart",
    	component:Cart
    },
    {
    	path:'/User',
    	component:User
    },
    {
    	path:'/Carousel',
    	component:Carousel
    },
    {
    	path:'/Detail',
    	component:Detail
    }
  ]
})
