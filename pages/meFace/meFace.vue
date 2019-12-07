<template>
	<view class="page page-fill">
		<view class="pending-wapper">
			<image id="face" :src="temFace" class="pending-face" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">
				* 青葱你相册中选择等比宽高的图片
			</view>
		</view>
		
		<view class="footer-opertor">
			<view class="opertor-words" @click="changeFace">
				重新选择
			</view>
			<view class="opertor-words" @click="upload">
				确认上传
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				temFace:""
			}
		},
		methods: {
			// 重新选择 
			changeFace(){
				var me = this
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:["album"],
					success(res) {
						var tempFilePath = res.tempFilePaths[0];
						me.temFace = tempFilePath
					}
				})	
			},
			// 确认上传
			upload(){
				uni.showLoading({
					title:"没接口 下次再传",
					mask:true,
					success(){
						uni.navigateTo({
							url:"../meInfo/meInfo"
						})
					}
				})

			}
		},
		onLoad(params) {
			var tempFilePath = params.tempFilePath 
			this.temFace = tempFilePath
		}
	}
</script>

<style>
 @import url("meFace.css");
</style>
