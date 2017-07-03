import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jsonp from 'jsonp'
Vue.use(Vuex)

import * as types from './movieType';

export default new Vuex.Store({
	state:{
		moviewDetail:{
			'images':{
				'large':'../assets/logo.png'
			}
		},
		detailLoading:true
	},
	mutations:{
		[types.TOGGLE_MOVIE_DETAIL]( state, all ){
			state.moviewDetail = all;
			state.detailLoading = true;
		}
	},
	actions:{
		[types.FETCH_MOVIE_DETAIL]({ commit, state }, id ){
			state.detailLoading = false;
			jsonp(`https://api.douban.com//v2/movie/subject/${ id }`,null,function(err, data){
				if (err) {
					console.log( err )
				} else {
					commit( types.TOGGLE_MOVIE_DETAIL, data );
					console.log( data )
				}
			})
		}
	}
})