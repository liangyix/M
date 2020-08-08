<template>
	<div class="">
		<div class="ccc">
			<div class="window">
				<div class="wins">
					<div class="win-top">
						<div class="win-top-one">
							<div class="win-one">
								<div class="">
									维纳斯机器人小维
								</div>
								<div class="star">
									小维
								</div>
							</div>
							<div class="win-two">
								<p>
									<span>转人工</span>
									<span class="close">∨</span>
								</p>
							</div>
						</div>
					</div>
					<div class="win-box">
						<div class="win-box-one">
							<div class="win-box-two">
								<div class="one-win">
									<span>加载更多历史消息</span>
								</div>
								<div class="two-win">
									<div class="two-win-img">
										<img src="https://tenant-assets.meiqiausercontent.com/pics.meiqia.bucket/d1705f50f23f1dee" />
									</div>
									<div class="thr-win">
										<div class="thr-div">
											10:54AM
										</div>
										<div class="thr-box">
											<div class="thr-boxs">
												<div class="thr-left"></div>
												<div class="thr-lefs"></div>
												<div class="">
													欢迎光临维纳斯鲜花网（vnasi.com）.做鲜花，我们是专业的！全国1-3小时免费送达！
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="four-win">
									<div class="two-win-img">
										<img src="https://tenant-assets.meiqiausercontent.com/pics.meiqia.bucket/d1705f50f23f1dee" />
									</div>
									<div class="thr-divs">
										<div class="thr-div">
											10:54AM
										</div>
										<div class="four-box">
											<div class="four-boxs">
												<div class="thr-left"></div>
												<div class="thr-lefs"></div>
												<div class="">
													您好，欢迎光临维纳斯，客服MM下班啦，我是代班客服机器人小维，有什么问题可以咨询我，我会尽量为您解答的。别看我是机器人，我可是很聪明的哦。
												</div>
												<div class="point">
													<div class="">
														<span>1. 结婚纪念日送什么花合适</span>
													</div>
													<div class="">
														<span>2. 查一下订单</span>
													</div>
													<div class="">
														<span>3. 你们电话多少？</span>
													</div>
													<div class="">
														<span>4. 怎么支付呢？</span>
													</div>
													<div class="">
														<span>5. 现在定下午能送吗</span>
													</div>
													<p class="point-p">点击问题或回复数字查看答案</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="five-bottom">
								<div class="five-div">
									<div class="five-foot">
										<div class="ac-icon">
											<span></span>
											<span></span>
										</div>

										<div class="bottom-box">
											<div class="bot-inp">
												<input type="text"  placeholder="请输入" autocomplete="off"/>
											</div>
										</div>
										<div class="send">
											<span>发送</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			$(function(){
		$(".status").click(function(){
			$(".ccc").show();
		});
		$(".close").click(function(){
			$(".ccc").hide();
		});
	})
		}
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;

}
.window{
	position: relative;
	width: 100%;
	height: 100%;
}
.wins{
	height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 60px;
    background: rgb(252, 252, 252);
    overflow: hidden;

}
.ccc{
	position: fixed;
    z-index: 9999999;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-sizing: border-box;
    width: 100%;
    padding-top: 60px;
    margin: 0px;
    overflow: hidden;
    display: none;
}
.win-top{
	position: absolute;
	top:0px;
	left: 0;
	width: 100%;
}
.win-top-one{
	width: 100%;
    height: 60px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    box-sizing: border-box;
    color: white;
    padding: 10px;
    background: rgb(0, 191, 157);
}
.win-one{
	width: 100%;
    display: inline-block;
    vertical-align: middle;
}
.star{
	font-size: 12px;
}
.win-two{
	text-align: right;
    white-space: nowrap;
    flex: 1 1 auto;
    padding: 10px 0px 10px 10px;
}
.win-two span:nth-child(1){
	font-size: 13px;
	opacity: 0.8;
}
.win-two span{
	font-size: 16px;
	display: inline-block;
	
}
.win-box{
	height: 100%;
    width: 100%;
    position: relative;
    background: rgb(252, 252, 252);
}
.win-box-one{
	width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
}
.win-box-two{
	width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    position: relative;
    padding: 40px 14px 14px;
}
.one-win{
	position: absolute;
    top: 10px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: rgb(119, 119, 119);
    cursor: pointer;
}
.two-win{
	width: 100%;
    position: relative;margin-bottom: 20px;
    padding-right: 10px;
    display: flex;
}
.two-win-img img{
	width: 36px;
    height: 36px;
    margin-right: 10px;
    margin-top: 16px;
    vertical-align: top;
}
.thr-win{
	text-align: left;
    max-width: calc(100% - 50px)
}
.thr-div{
	color: rgb(178, 178, 178);
    font-size: 12px;
    margin-bottom: 2px;
}
.thr-box{
	max-width: 100%;
    position: relative;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(240, 240, 240);
    border-image: initial;
}
.thr-boxs{
	font-size: 13px;
    word-break: break-word;
    padding: 10px 15px;
    border-radius: 3px;
}
.thr-boxs div:nth-child(3){
	width: 100%;
    display: inline-block;
    overflow: hidden;
}
.thr-left{
	position: absolute;
    top: 12px;
    left: -7px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 7px solid rgb(240, 240, 240);
}
.thr-lefs{
	position: absolute;
    top: 13px;
    left: -6px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 6px solid rgb(255, 255, 255);
}
.four-win{
	width: 100%;
    position: relative;
    display: flex;
}
.thr-divs{
	text-align: left;
    max-width: calc(100% - 50px);
}
.four-box{
	max-width: 100%;
    position: relative;
    background-color: rgb(255, 255, 255);
    float: left;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(240, 240, 240);
    border-image: initial;
}
.four-boxs{
	font-size: 13px;
    word-break: break-word;
    padding: 10px 15px;
    border-radius: 3px;
}
.point{
	width: 100%;
    display: inline-block;
    overflow: hidden;
}
.point div{
	margin: 3px 0px;
}
.point div span{
	font-size: 13px;
    color: rgb(96, 136, 230);
    cursor: pointer;
}
.point-p{
	color: rgb(170, 170, 170);
    margin-top: 1em;
    font-size: 13px;
}
.five-bottom{
	width: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;	
    height: 50px;
    background: rgb(252, 252, 252);
    display: flex;
}
.five-div{
	height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    border-top: 1px solid rgb(237, 237, 237);
}
.five-foot{
	position: relative;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 5px 10px 5px 14px;
}
.ac-icon{
	height: 20px;
    display: flex;
    flex-wrap: nowrap;
     margin-top: 10px;
}
.ac-icon span:nth-child(1){
	vertical-align: middle;
    padding-right: 20px;
    margin-right: 6px;
    height: 20px;
    display: inline-block;
    background: url(https://static.meiqia.com/widget/static/icon-desktop@2x.png) -23px -1px / 44px no-repeat;
    background-position: -23px -1px;
}
.ac-icon span:nth-child(2){
	vertical-align: middle;
    padding-right: 20px;
    height: 20px;
    display: inline-block;
    background: url(https://static.meiqia.com/widget/static/icon-desktop@2x.png) -23px -23px / 44px no-repeat;
    background-position: -23px -23px;
}

.bot-inp {
	width: 22.2rem;
	margin-left: 8px;
	margin-top: 4px;
}
.bot-inp input{
	display: block;
    width: 100%;
    height: 100%;
    font-size: 13px;
    line-height: 20px;
    padding: 8px 6px;
    outline: 0px;
    border-style: none;
    color: black;
}
.send{
	display: inline-block;
    height: 30px;
    width: 48px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    right: 0px;
    top: 5px;
    bottom: 0px;
}
.send span{
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    opacity: 1;
    color: white;
    border-width: 0px;
    outline: none;
    border-radius: 3px;
    background: rgb(0, 191, 157);
    padding: 0 10px;
    margin-left: -20px;
    margin-top: 6px;
}

</style>