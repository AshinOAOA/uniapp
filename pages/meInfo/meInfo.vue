<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">
					头像
				</view>
				<view class="right-wapper">
					<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face"></image>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png"
						 class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line">	
				</view>
			</view>
			
			<!-- 昵称 -->
			<view class="item-wapper face-line-upbottom" @click="editNickname">
				<view class="info-words">
					昵称
				</view>
				<view class="right-wapper">
					<view class="gray-fields{">
						BoscoGZ
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png"
						 class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line">	
				</view>
			</view>
			
			<!-- 生日 -->
			<view class="item-wapper face-line-upbottom" @click="editBirth">
				<view class="info-words">
					生日
				</view>
				<view class="right-wapper">
					<view class="gray-fields{">
						1996.07.01
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png"
						 class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line">	
				</view>
			</view>
			
			<!-- 性别 -->
			<view class="item-wapper face-line-upbottom" @click="editSex">
				<view class="info-words">
					性别
				</view>
				<view class="right-wapper">
					<view class="gray-fields{">
						男
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png"
						 class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line">	
				</view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="footer-wapper">
			<view class="footer-words" @click="cleanStorage">
				清理缓存
			</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="logout">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 修改性别
			editSex(){
				uni.navigateTo({
					url:"../sex/sex"
				})
			},
			// 修改生日
			editBirth(){
				uni.navigateTo({
					url:"../birthday/birthday"
				})
			},
			// 修改昵称
			editNickname(){
				uni.navigateTo({
					url:"../nickname/nickname"
				})
			},
			// 操作 更换头像
			operator(){
				uni.showActionSheet({
					itemList:["查看我的头像","从相册里选择上传"],
					success(res) {
						var index = res.tapIndex
						if(index == 0 ){
							// 预览头像
							var faceArr = []
							uni.previewImage({
								urls:"https://wx.qlogo.cn/mmopen/vi_32/arbGeh4q9B6mibic2rwLKOreRyFXbNCcnGiazlbOn91CddVFlAYc5YqGbR3YKwkMHFhQicg0TbC0GFpxwxPGH1fezQ/132",
							})
						}else{
							// 上传图片
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success(res) {
									var tempFilePath = res.tempFilePaths[0];
									uni.navigateTo({
										url:"../meFace/meFace?tempFilePath="+tempFilePath 
									})
								}
							})
							
						}
					}
				})
			},
			
			// 清理缓存
			cleanStorage(){
				 uni.clearStorageSync();
				uni.showToast({
					title:"清理缓存成功",
					mask:false,
					duration:1500
				})
			},
			// 退出登录 
			logout(){
				var globalUser = this.getGlobalUser("globalUser")
				var serverUrl = this.serverUrl
				uni.request({
				    url: serverUrl+'/user/logout?userId=',
					method:"POST",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						qq:'1764194623'
					},
				    success: (res) => {
				        console.log(res.data);
						// 获取真实数据之前,判断状态是否为200
						if(res.data.status == 556){
							uni.removeStorageSync("globalUser")
							uni.switchTab({
								url:"../index/index" 
							})
						}
						}
					});
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
