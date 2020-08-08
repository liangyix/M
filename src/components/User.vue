<template>
	<div class="">
		<div class="header">
		<div  @click="$router.go(-1)"class="left">			
				‹			
		</div>
			<h1 class="tit">用户中心</h1>
			<a class="statu">
				<span class="status"></span>
			</a>
	</div>
	<div class="user">
		<div class="user_one">
			<img src="http://m.vnasi.cn/resources/images/head_portrait.png"/>
		</div>
		<div class="user_two">
			<router-link to="">登录</router-link>
			<router-link to="">注册</router-link>
		</div>
	</div>
		<div class="users" >
			<div class="us_one" v-for="item in order ">
				<router-link to="">{{item}}</router-link>
			</div>
		</div>
		<div class="co">
			
		</div>
		<div class="boxp">
			<div class="boxp-box" v-for="item in jump">
				<router-link to="">{{item}}</router-link>
				<i>›</i>
			</div>
		<div class="co">
			
		</div>			
			<div class="boxp-box" v-for="item in jumps">
				<router-link to="">{{item}}</router-link>
				<i>›</i>
			</div>
		<div class="co">
			
		</div>			
			<div class="boxp-box" v-for="item in jumpi">
				<router-link to="">{{item}}</router-link>
				<i>›</i>
			</div>			
		</div>
		<div class="co">
			
		</div>			
			<div class="boxp-box" v-for="item in jumpf">
				<router-link to="">{{item}}</router-link>
				<i>›</i>
			</div>	
		<div class="col">
			
		</div>	
		
				<div class="footer">
			<div class="footes">
				<ul>
					<li class="list-one active" >
						<router-link to="/">
							<p class="f-icon"></p>
							<p class="tst">首页</p>
						</router-link>
					</li>
					<li class="list-two">
						<router-link to="/Home">
							<p class="f-icon"></p>
							<p class="tst">分类</p>
						</router-link>
					</li>				
					<li class="list-thr">
						<router-link to="/Cart">
							<p class="f-icon"></p>
							<p class="tst">购物车</p>
						</router-link>
						<span class="nums">0</span>
					</li>
					<li class="list-four">
						<router-link to="/User">
							<p class="f-icon"></p>
							<p class="tst">个人中心</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		
		<Carousel/>
		</div>
		
		
</template>

<script>
		import rem from '../../static/remstyle.js'
		import Carousel from '@/components/Carousel'
	 export default{
	 	components:{Carousel},
	 	data(){
	 		return{
	 			order:["待付款","待收货","已完成","全部订单"],
	 			jump:["在线补款","订单查询"],
	 			jumps:["个人信息","地址管理","优惠券"],
	 			jumpi:["问题反馈","帮助中心","鲜花百科","更多"],
	 			jumpf:["更多设置"]
	 		}
	 	}
	 }
</script>

<style>
	@import "../components/User.css"
</style>