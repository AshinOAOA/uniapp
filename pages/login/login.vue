<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>
			<!-- input框 -->
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input type="text" value="" name="username" class="input" 
						placeholder="请输入账号" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input type="password" name="password" value="" class="input" 
						placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<!-- 注册button按钮 -->
			<button type="primary" form-type="submit" style="margin-top: 60upx; width: 90%;">
				注册/登录
			</button>
			 <!-- h5 不支持第三方登录 屏蔽就完事了 -->
			<!-- #ifndef H5 -->
				<view class="third-wapper">
					<view class="third-line">
						<view class="single-line">
							<view class="line"></view>
						</view>
						
						<view class="third-word">
							第三方账号登录
						</view>
						
						<view class="single-line">
							<view class="line"></view>
						</view>
					</view>
					
					<view class="third-icos-wapper">
						<!-- #ifdef MP-WEIXIN -->
							<button open-type="getUserInfo" @getuserinfo="wxlogin"
									class="third-btn-ico"></button>
						<!-- #endif -->
					</view>
				</view>
			<!-- #endif -->
			
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 实现小程序授权的微信登录
			wxlogin(e){
				console.log(e)
				var me = this
				// 通过wx的api 获得用户基本信息
				var userInfo = e.detail.userInfo;
				// 实现微信登录
				 uni.login({
				 	provider:"weixin",
					success(loginResult) {
						console.log(loginResult)
						// 这时候可以获取微信登录的code了 等于token
						var code = loginResult.code 
						// 她们后端还需要定义登录到哪个小程序 
						var loginToWhichMP = 1
						uni.request({
							url: "https://www.imovietrailer.com/superhero/mpWXLogin/"+code,
							data:{
								"avatarUrl":userInfo.avatarUrl,
								"nickname":userInfo.nickname,
								"whichMP":loginToWhichMP 
							},
							method:"POST",
							success(res) {
								console.log(res)
								if(res.data.status ==556){
									uni.switchTab({
										url:"../me/me"
									})
								}
							}
						})
					}
				 })
			},
			// form表单提交
			formSubmit(e){
				var me = this;
				var username = e.detail.value.username
				var password = e.detail.value.password
				console.log(username,password)
				// 发起登录注册的请求
				uni.request({
				    url:'https://www.imovietrailer.com/superhero/user/registOrLogin',
					method:"POST",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						"qq":'1764194623',
						"username":username,
						"password":password
					},
				    success: (res) => {
				        console.log(res.data);
						// 获取真实数据之前,判断状态是否为200
						if(res.data.status == 556){
							var userInfo = res.data.data;
							// console.log(userInfo)
							// 把用户信息保存到全局的缓存中
							uni.setStorageSync("globalUser", userInfo)
							// 切换页面跳转 使用tab切换的api
							uni.switchTab({
								url:"../me/me"
							});
						}else if(res.data.status == 500){
							uni.showToast({
								title:res.data.msg,
								duration:2000,
								image:"../../static/icos/error.png"
							})
						}
						}
					});
			}
		}
	}
</script>

<style>
	@import url("login.css");
</style>
