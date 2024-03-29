import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl= "https://www.imovietrailer.com/superhero"
Vue.prototype.getGlobalUser = function(key){
	var userInfo =  uni.setStorageSync("globalUser")
	if(userInfo !=null && userInfo != ""&& userInfo != undefined){
		return userInfo;
	}else{
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
