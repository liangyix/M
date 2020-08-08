<template>
	<div class="">
	<div class="header">
		<div  @click="$router.go(-1)"class="left">			
				‹			
		</div>
			
			<h1 class="tit">确认订单</h1>
			<a class="statu">
				<span class="status"></span>
			</a>
	</div>
	<div class="boxi">
		<div class="imga">
			<img src="http://m.vnasi.cn/statics/images/normal_cart.png"/>
		</div>
		<div class="b-one">
			<p>亲！您的购物车空空如也！</p>
		</div>
		<div class="b-two">
			<p>
				<span>{{time}}秒后自动返回首页</span>
			</p>
		</div>
		<div class="a-one">
			<p>
				<router-link to="/">去首页逛逛</router-link>
			</p>
		</div>
	</div>
	<div class="footers">
		<div class="foot-one">
			<span>继续购物</span>
		</div>
		<div class="foot-two">
			<span>去结算</span>
		</div>
	</div>
	<Carousel/>
	</div>
</template>

<script>
		import rem from '../../static/remstyle.js'
		import Carousel from '@/components/Carousel'
export default {
	components:{Carousel},
  name: 'HelloWorld',
  data () {
    return {
      time:0,
    }
  },

  methods:{
    countDown(){
      let THIS=this;
      THIS.time--;
    }

  },
  mounted(){
    let THIS=this;
    THIS.time=3;
    setInterval(THIS.countDown,1000);
  },
  watch:{
    'time':function(newVal,oldVal){
          if(newVal==0){
            this.$router.push('/');
          }
    }
  }

}
</script>

<style>
	@import "../components/Cart.css";
</style>
