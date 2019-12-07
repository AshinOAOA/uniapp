<template>
	<view class="page page-fill">
		<form @submit="formBirth">
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="dateChange">
					<view class="birthday">{{birthday}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">修改</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday:"1996-07-01"
			}
		},
		methods: {
			dateChange(e){
				var birthday = e.detail.value;
				
			}
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser")
			me.globalUser = globalUser
			me.birthday = globalUser.birthday
		}
	}
</script>

<style>
	@import url("birthday.css");
</style>
