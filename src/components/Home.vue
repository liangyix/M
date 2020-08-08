<template>
	<div class="">
	<div class="header">
		<div  @click="$router.go(-1)"class="left">			
				‹			
		</div>
			<h1 class="tit">商品类目</h1>
			<a class="statu">
				<span class="status"></span>
			</a>
	</div>
	<ul class="ul1">
		<li class="lis c1">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>鲜花</p>
					<p>鲜花速递 - 全国鲜花速递服务提供商</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c2">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>蛋糕</p>
					<p>蛋糕速递 - 生日蛋糕、纪念蛋糕、庆祝蛋糕</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c3">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>开业花篮</p>
					<p>开业花篮 - 商务花礼、开业花篮、开张花篮</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c4">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>绿植花卉</p>
					<p>绿植花卉 - 室内绿植、绿色植物、乔迁送礼</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c5">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>香皂花礼盒</p>
					<p>香皂花礼盒 - 香皂花玫瑰礼盒、香皂玫瑰花</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c6">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>保鲜花</p>
					<p>保鲜花 - 永生花、保鲜玫瑰花、进口保鲜花</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
		<li class="lis c7">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>礼品</p>
					<p>礼品 - 礼物、创意礼品、创意摆件、毛绒...</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
				<li class="lis c7">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>礼品</p>
					<p>礼品 - 礼物、创意礼品、创意摆件、毛绒...</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
				<li class="lis c7">
			<a href="">
				<div class="imgs"></div>
				<div class="cont">
					<p>礼品</p>
					<p>礼品-礼物、创意礼品、创意摆件、毛绒...</p>
				</div>
				<div class="iconfont ">
					›
				</div>
			</a>
		</li>
	</ul>
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
	export default {
		components:{Carousel}
	}
</script>

<style  >

	@import "../components/Home.css";

</style>