<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wrapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>
			<input 
			placeholder="搜索预告" 
			maxlength="10" 
			class="search-inp"
			confirm-type="search"
			@confirm="searchMe"
			/>
		</view>
		<view class="movie-list page-block">
			<view class="movie-wrapper">
				<image 
				@click="showTrailer"
				src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			<view class="movie-wrapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view>
			
			<!-- 动态搜索预告图片 -->
			<view class="movie-wrapper" v-for="item in trailerList">
				<image 
				:src="item.cover"
				:data-trailerId="item.id"
				@click="showTrailer"
				class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trailerList:[],
				keywords:"", //搜索的关键字
				page:1,		 //当前第几页
				totalPages:1	//总页数
			}
		},
		methods: {
			pagedTrailerList(keywords,page,pageSize){
				var serverUrl = this.serverUrl;
				// 请求搜索预告图片
				uni.request({
				    url: serverUrl+'/search/list?keywords='+keywords+'&page='+page+'&pageSize='+pageSize,
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
						if(res.data.status == 200){
							var tempList= res.data.data.rows
							this.trailerList = trailerList.concat(tempList)
							this.totalPages = res.data.data.total;
							this.page = page
						}
				    },
					complete:()=>{
						// 下拉刷新请求到数据后停止
						 uni.stopPullDownRefresh()
					}
				});
			},
			searchMe(e){
				var me = this;
				//获取搜索的内容
				var value = e.detail.value;
				me.keywords = value;
				me.trailerList = [];
				this.pagedTrailerList(value,1,15)
			},
			// 点击图片跳转 
			showTrailer(e){
				var trailerId = e.currentTarget.dataset.trailerid
				// 跳转前带上id传过去
				uni.navigateTo({
					url: '../movie/movie?trailerId='+trailerId,
				});
		},
		onReachBottom() {
			var me = this;
			var page = me.page +1;  //查询下一个页面 当前页数+1
			var keywords = me.keywords;  //获得当前页面data里的搜索值 
			var totalPages = me.totalPages 
			//如果当前需要的分页数 和总页数相等  就不分页 
			if(page>totalPages){
				return ; 
			}
			me.pagedTrailerList(keywords,page,15)
		},
		onLoad(){
			var serverUrl = this.serverUrl;
			// 请求搜索预告图片
			uni.request({
			    url: serverUrl+'/search/list?keywords=&page=&pageSize=',
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
					if(res.data.status == 200){
						var trailerList= res.data.data.rows
						this.trailerList = trailerList
					}
			    },
				complete:()=>{
					// 下拉刷新请求到数据后停止
					 uni.stopPullDownRefresh()
				}
			});
		}
	},
	}
</script>

<style>
	@import url("search.css");
</style>
