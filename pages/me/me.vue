<template>
	<view class="page page-fill">
		<navigator url="../meInfo/meInfo">
			<view class="header">
				<view v-if="userIsLogin">
					<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face"></image>
				</view>
				<view v-else>
					<image 
					src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" 
					class="face"></image>
				</view>
				<view class="info-wapper" v-if="userIsLogin">
					<view class="nickname">
						BoscoGZ
					</view>
					<view class="nav-info">
						ID:123aa231d3a	
					</view>
				</view>
				
				<view class="info-wapper" v-else>
					<navigator url="../login/login">
						<view class="nickname regist-login">
							注册 / 登陆
						</view>
					</navigator>
			
				</view>
				
				<view class="set-wapper" v-if="userIsLogin">
					<image src="../../static/icos/settings.png" class="settings"></image>
				</view>
			</view>
		</navigator>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:true,
				userInfo:{}
			}
		},
		onShow() {
			var me = this;
			// 使用挂载方法获取用户数据
			var userInfo = me.getGlobalUser("globalUser")
			if(userInfo != null){
				me.userIsLogin = false;
				me.userInfo = userInfo
			} else{
				me.userInfo = true
				me.userInfo = {}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("me.css");

</style>
