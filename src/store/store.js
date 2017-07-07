import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jsonp from 'jsonp'
Vue.use(Vuex)

import * as types from './movieType';

export default new Vuex.Store({
	state:{
		moviewDetail:{},
		celebrity:{},
		detailLoading:true,
		celebrityLoading:true
	},
	mutations:{
		[types.TOGGLE_MOVIE_DETAIL]( state, all ){
			state.moviewDetail = all;
			state.detailLoading = true;
		},
		[types.TOGGLE_MOVIE_CELEBRITY]( state, all){
			state.celebrity = all;
			state.celebrityLoading = true;
		}
	},
	actions:{
		[types.FETCH_MOVIE_DETAIL]({ commit, state }, id ){
			state.detailLoading = false;
			jsonp(`https://api.douban.com/v2/movie/subject/${ id }`,null,function(err, data){
				if (err) {
					console.log( err )
				} else {
					commit( types.TOGGLE_MOVIE_DETAIL, data );
					console.log( data )
				}
			})
		},
		[types.FETCH_MOVIE_CELEBRITY]({ commit, state }, id){
			state.celebrityLoading = false;
			jsonp(`https://api.douban.com/v2/movie/celebrity/${ id }`,null,function(err, data){
				if (err) {
					console.log( err )
				} else {
					commit( types.TOGGLE_MOVIE_CELEBRITY, data );
					console.log(data)
				}
			})
		}
	}
})