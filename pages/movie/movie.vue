<template>
	<view class="page">
		<!-- 视频播放 -->
		<view class="player">
			<video
			src="http://122.152.205.72:88/superhero/MARVEL/AntMan2/trailer.mp4" 
			poster="http://122.152.205.72:88/superhero/MARVEL/AntMan2/poster.jpg"
			class="movie"
			controls></video>
		</view>

		<!-- 影片基本信息 -->
		<view class="movie-info">
			 <image 
			 src="http://122.152.205.72:88/superhero/MARVEL/AntMan2/cover.jpg" 
			 class="cover"></image>
			 <view class="movie-desc">
			 	<view class="tittle">
			 		惊奇队长真牛逼
			 	</view>
				<view class="basic-info">
					2018 / 美国 / 科幻 / 超级英雄
				</view>
				<!-- 影片原名 -->
				<view class="basic-info">  
					原名:Aquaman
				</view>
				<view class="basic-info">
					影片时长:143分钟(中国大陆)
				</view>
				<view class="basic-info">
					上映时间:2020-12-09(中国大陆)
				</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">
							综合评分:
						</view>
						<view class="movie-score">
							9.2
						</view>
					</view>
					<view class="score-stars">	
						<Star innerScore="9.2" showNum="0"></Star>
						<view class="prise-counts">
							555人点赞
						</view>
					</view>
				</view>
			 </view>
		</view>
	
		<!-- 分割线 -->
		<view class="line-wapper">
			<view class="line">
				
			</view>
		</view>
		
		
		<!-- 剧情介绍 -->
		<view class="plots-block">
			<view class="plots-title">
				剧情介绍
			</view>
			<view class="plots-desc">
				美国队长3：内战》是由美国漫威影业公司出品的科幻动作片，由安东尼·罗素
				、乔·罗素兄弟联合执导，克里斯·埃文斯、小罗伯特·唐尼、斯嘉丽·约翰逊、
				塞巴斯蒂安·斯坦、安东尼·麦凯联合主演。该片根据漫威2006年出版的漫画
				《内战》改编，背景故事承接于《复仇者联盟2：奥创纪元》事件的余波中，
				讲述了奥创事件后引发的一系列政治问题导致复仇者之间内部矛盾激化的故事。
				该片于2016年5月6日在美国、中国内地同步上
			</view>
		</view>
		
		<!-- 演职人员 -->
		<view class="scroll-block">
			<view class="plots-title">
				演职人员
			</view>
			<scroll-view scroll-x class="scrol-list">
					<!-- 导演照片 -->
				<view class="actor-wapper">
					<image
					src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg" 
					class="single-actor"
					mode="aspectFill"></image>
					<view class="actor-name">
						小罗伯特·唐尼
					</view>
					<view class="actor-role">
						导演
					</view>
				</view>
				
				<view class="actor-wapper">
					<image
					src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg" 
					class="single-actor"
					mode="aspectFill"></image>
					<view class="actor-name">
						克里斯·埃文斯
					</view>
					<view class="actor-role">
						导演
					</view>
				</view>
					<!-- 演员的 -->
				<view class="actor-wapper">
					<image
					src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=a92a5b9c9e2397ddd62ccb443fbf8a85/a1ec08fa513d269795fc6a265afbb2fb4316d89a.jpg" 
					class="single-actor"
					mode="aspectFill"></image>
					<view class="actor-name">
						斯嘉丽·约翰逊
					</view>
					<view class="actor-role">
						前度
					</view>
				</view>
				
				<view class="actor-wapper">
					<image
					src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=430c2522d962853592b58161f6d24ef4/eaf81a4c510fd9f90f760ab9292dd42a2934a4f9.jpg" 
					class="single-actor"
					mode="aspectFill"></image>
					<view class="actor-name">
						小明
					</view>
					<view class="actor-role">
						演员
					</view>
				</view>
				
			</scroll-view>
		</view>
		<!-- 演职人员 -->
		
		<!-- 剧照 -->
		<view class="scroll-block">
			<view class="plots-title">
				剧照
			</view>
			<scroll-view scroll-x class="scrol-list">
				<image 
				src="http://122.152.205.72:88/superhero/DC/Aquaman/photos/1.jpg" 
				class="plots-image"
				mode="aspectFill"
				@click="lookMe"></image>
				<image
				src="http://122.152.205.72:88/superhero/DC/Aquaman/photos/2.jpg" 
				class="plots-image"
				mode="aspectFill"></image>
				<image
				src="http://122.152.205.72:88/superhero/DC/Aquaman/photos/3.jpg" 
				class="plots-image"
				mode="aspectFill"></image>
				<image
				src="http://122.152.205.72:88/superhero/DC/Aquaman/photos/4.jpg" 
				class="plots-image"
				mode="aspectFill"></image>
			</scroll-view>
		</view>
		<!-- 剧照结束 -->
	</view>
</template>

<script>
	import Star from "../../components/star/star.vue"
	
	export default {
		data() {
			return {
				trailerInfo:{},
				plotPicsArray:[], //剧照
				directorArray:[] ,  //导演
				actorArray:[]
			}
		},
		onLoad(params) {
			// 获取上一个页面传入的参数 
			var trailerId = params.trailerId
			var serverUrl = this.serverUrl;
			
			// 请求预告片详细信息
			uni.request({
			    url: serverUrl+'/search/trailer'+trailerId,
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
						var trailerInfo= res.data.data
						this.trailerInfo = trailerInfo
						// 里面获得的剧照格式需要转换
						var plotPicsArray = JSON.parse(trailerInfo.pltoPics)
						this.plotPicsArray = plotPicsArray
					}
					}
				});
				
				// 请求导演信息 
				uni.request({
				    url: serverUrl+'/search/staff/'+trailerId + '/1',
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
							var directorArray= res.data.data
							this.directorArray = directorArray
						}
						}
					});
					
					// 请求演员信息
					uni.request({
					    url: serverUrl+'/search/staff/'+trailerId + '/2',
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
								var actorArray= res.data.data
								this.actorArray = actorArray
							}
							}
						});	
			
		},
		methods: {
			lookMe(){
				var me = this
				uni.previewImage({
					urls:me.plotPicsArray
				})
			}
		},
		components:{
			Star
		}
	}
</script>

<style>
  @import url("movie.css");
</style>
