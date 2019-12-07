<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item>
				<image src="../../static/carousel/batmanvssuperman.png" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/spiderman.png" class="carousel"></image>
			</swiper-item>
			<!-- <swiper-item v-for=" item in carouselList">
				<image :src="item.image" class="carousel"></image>
			</swiper-item> -->
		</swiper>
		
		<!-- 热门超英 -->
		<view class="hot-wrapper page-block">
			<!-- 标题 -->
			<view class="hot-tittle">
				<image src="../../static/icos/hot.png" class="hot-ico"></image>
				<view class="hot-tittle-item">
					超英预告
				</view>
			</view>
			<!-- 电影详情 -->
			<view class="hot-bottom">
				<scroll-view scroll-x="true" class="page-block hot">
					<view class="single-poster" v-for="item in hotSuperList">
						<view class="poster-wapper">
							<image :src="item.cover" class="poster"></image>
							<view class="movie-name">
								{{item.name}}
							</view>
							<Star innerScore = "item.score" showNum = "1"></Star>
						</view>
					</view>
					
					<view class="single-poster" @click="showTrailer">
						<view class="poster-wapper">
							<image src="../../static/poster/civilwar.jpg" class="poster"></image>
							<view class="movie-name">
								美国队长33333333
							</view>						
							<Star innerScore = "9.1" showNum = "1"></Star>
						</view>
					</view>
					
					<view class="single-poster">
						<view class="poster-wapper">
							<image src="../../static/poster/civilwar.jpg" class="poster"></image>
							<view class="movie-name">
								美国队长33333333
							</view>
							<view class="movie-score">
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-gray.png" class="star-ico"></image>
								<view class="movie-num">
									9.0
								</view>
							</view>
						</view>
					</view>
					
					<view class="single-poster">
						<view class="poster-wapper">
							<image src="../../static/poster/civilwar.jpg" class="poster"></image>
							<view class="movie-name">
								美国队长33333333
							</view>
							<view class="movie-score">
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-gray.png" class="star-ico"></image>
								<view class="movie-num">
									9.0
								</view>
							</view>
						</view>
					</view>
					
					<view class="single-poster">
						<view class="poster-wapper">
							<image src="../../static/poster/civilwar.jpg" class="poster"></image>
							<view class="movie-name">
								美国队长33333333
							</view>
							<view class="movie-score">
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
								<image src="../../static/icos/star-gray.png" class="star-ico"></image>
								<view class="movie-num">
									9.0
								</view>
							</view>
						</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
		
		<!-- 电影预告 -->
			<view class="hot-wrapper page-block">
				<view class="hot-tittle">
					<image src="../../static/icos/108x108.png" class="hot-ico"></image>
					<view class="hot-tittle-item">
						热门预告
					</view>
				</view>
			</view>
			<view class="hot-movies page-block">
				<!-- <video 
				v-for="item in hotTrailerList"
				:src="item.trailer" 
				:poster="item.poster"
				class="hot-movie-single"
				controls>
				</video> -->
				<video 
				src="http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4" 
				poster="http://122.152.205.72:88/superhero/MARVEL/Thor3/poster.jpg"
				class="hot-movie-single"
				controls></video>
				
				<video
				src="http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4" 
				class="hot-movie-single"
				controls></video>
				
				<video
				src="http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4" 
				poster="http://122.152.205.72:88/superhero/MARVEL/Thor3/poster.jpg"
				class="hot-movie-single"
				controls></video>
				
				<video
				src="http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4" 
				poster="http://122.152.205.72:88/superhero/MARVEL/Thor3/poster.jpg"
				class="hot-movie-single"
				controls></video>
			</view>
		<!-- 电影预告结束 -->
		
		<!-- 猜你喜欢开始 -->
		<view class="hot-wrapper page-block">
			<view class="hot-tittle">
				<image src="../../static/icos/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-tittle-item">
					猜你喜欢
				</view>
			</view>
		</view>
		
		<view class="page-block guess-u-like" @click="showTrailer">
			<view class="single-like-movie">
				<image src="http://122.152.205.72:88/superhero/DC/GreenLantern/cover.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-tittle">
						钢铁侠5：薛利崛起 111111
					</view>
					<Star innerScore="9.1" showNum="0"></Star>
					<view class="movie-info">
						2020  / 美国 / 科幻 / 动作
					</view>
					<view class="movie-info">
						 克里斯·埃文斯，小罗伯特·唐尼，斯嘉丽·约翰逊，塞巴斯蒂安·斯坦，
						 安东尼·麦凯，唐·钱德尔
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe">
					<image src="../../static/icos/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞他
					</view>
					<view :animation="animationData" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
			<!-- 动态猜你喜欢 -->
			<view class="single-like-movie" v-for="(item,index) in guessLikeList">
				<image :src="item.cover" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-tittle">
						{{item.name}}
					</view>
					<Star innerScore="9.1" showNum="0"></Star>
					<view class="movie-info">
						{{item.basicInfo}}
					</view>
					<view class="movie-info">
						 {{item.releaseDate}}
					</view>
				</view>
				<view class="movie-oper" :data-index="index" @click="praiseMe">
					<image src="../../static/icos/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞他
					</view>
					<view :animation="animationDataArr[index]" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢结束 -->
	</view>
</template>

<script>
	import Star from "../../components/star/star.vue"
	export default {
		
		data() {
			return {
				carouselList:[],
				hotSuperList:[],
				hotTrailerList:[],
				guessLikeList:[],				
				animationData:{},
				animationDataArr:[
					{},{},{},{},{}
				]
			}
		},
		onUnload(){
			// 页面卸载的时候 清楚动画数据
			this.animationData = {},
			
			this.animationDataArr=[
					{},{},{},{},{}
				]
		},
		onPullDownRefresh(){
			this.refresh()
		},
		onLoad() {
			//#ifdef APP-PLUS || MP-WEIXIN
			// 在页面创建的时候 创建一个临时动画对象
			this.animation = uni.createAnimation()
			 //#endif
			
						// 请求轮播图  
			var serverUrl = this.serverUrl;
			uni.request({
			    url: serverUrl+'/index/carousel/list',
				method:"POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'1764194623'
				},
			    success: (res) => {
			        console.log(res.data);
					// 获取真实数据之前,务必判断状态是否为200
					if(res.data.status == 200){
						var carouselList= res.data.data
						this.carouselList = carouselList
					}
			    }
			});
			
			// 请求热门超英电影详情
			uni.request({
			    url: serverUrl+'/index/movie/hot?type=superhero',
				method:"POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'1764194623'
				},
			    success: (res) => {
					if(res.data.status == 200){
						var hotSuperList= res.data.data
						this.hotSuperList = hotSuperList
					}
			    }
			});
			
			// 请求电影预告片 
			uni.request({
			    url: serverUrl+'/index/movie/hot?type=trailer',
				method:"POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'1764194623'
				},
			    success: (res) => {
					if(res.data.status == 200){
						var hotTrailerList= res.data.data
						this.hotTrailerList = hotTrailerList
					}
			    }
			});
			
			// 请求猜你喜欢数据
			this.refresh()
			
		},
		methods: {
			// 封装猜你喜欢请求 
			refresh(){
				var serverUrl = this.serverUrl;
				uni.request({
				    url: serverUrl+'/index/guessULike',
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
							var guessLikeList= res.data.data
							this.guessLikeList = guessLikeList
						}
				    },
					complete:()=>{
						// 下拉刷新请求到数据后停止
						 uni.stopPullDownRefresh()
					}
				});
			},
			// 点击图片跳转
				showTrailer(e){
					var trailerId = e.currentTarget.dataset.trailerid
					// 跳转前带上id传过去
					uni.navigateTo({
						url: '../movie/movie?trailerId='+trailerId,
					});
			},
			// 点赞动画效果
			praiseMe(e){
			//#ifdef APP-PLUS || MP-WEIXIN
				var index = e.currentTarget.dataset.index
				console.log(index)
				// 构建动画数据 通过step表示动画完成
				this.animation.translateY(-60).opacity(1).step({
					duration:500
				})
				this.animationData = this.animation.export()
				this.animationData = this.animation
				this.animationDataArr[index] = this.animationData.export()
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					this.animationData = this.animation.export()
					this.animationData = this.animation
					this.animationDataArr[index] = this.animationData.export()
				}.bind(this), 600);
				//#endif
		},
		components:{
			Star
		}
	}
}
</script>

<style>
	@import url("index.css");
</style>
