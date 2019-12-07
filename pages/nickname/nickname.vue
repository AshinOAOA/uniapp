<template>
	<view class="page page-fill">
		 <form @submit="formNickname">
		 	<view class="page-block" style="margin-top: 20upx;">
		 		<input 
				   type="text" 
				   value="" 
				   name="nickname" 
				   :value="globalUser.nickname" 
				   class="input"
				   placeholder="输入文字"
				   maxlength="8"/>
		 	</view>
			<button type="primary" form-type="submit" class="submitBtn">修改</button>
		 </form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser :{}
			}
		},
		onLoad(){
			 var me = this
			 var globalUser = me.getGlobalUser("globalUser")
			 me.globalUser = globalUser
		},
		methods: {
			formNickname(e){
				var me = this;
				var nickname = e.detail.value.nickname
			}
		}
	}
</script>

<style>
	@import url("nickname.css");
</style>
