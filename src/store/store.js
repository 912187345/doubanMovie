import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jsonp from 'jsonp'
Vue.use(Vuex)

import * as types from './movieType';

export default new Vuex.Store({
	state:{
		count:0,
		bookList:[],
		moviewDetail:{},
		detailLoading:true
	},
	getters:{
		todo:state => state.todo.filter(todo => { if( todo.bol ){ return todo } } )
	},
	mutations:{
		increment( state, paylaod){
			state.count++;
		},
		bookList( state, paylaod ){
			state.bookList = paylaod;
		},
		[types.TOGGLE_MOVIE_DETAIL]( state, all ){
			state.moviewDetail = all;
			state.detailLoading = true;
		}
	},
	actions:{
		increment( { commit } ){
			commit('increment')
		},
		search( { commit, state } , search){
			jsonp('https://api.douban.com/v2/book/search?q=' + search + '&tag=' + search, null, function (err, data) {
			  if (err) {
			    console.error(err.message);
			  } else {
			    commit('bookList',data.books)
			    console.log( state.bookList )
			  }
			});
		},
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