<template>
    <div>
      <mt-header v-show='detailLoading' :title="moviewDetail.title">
            <mt-button slot="left" icon="back" @click='back()'>返回</mt-button>
      </mt-header>
      <mt-spinner type="double-bounce" v-show='!detailLoading'></mt-spinner>
        <div class="wrap" v-show='detailLoading'>
            <div style="font-size:0;">
                <div class="img">
                    <img :src="moviewDetail.images.large">
                </div>
                <div class="con">
                    <detail-item
                        title="导演"
                        :list='moviewDetail.directors'>
                    </detail-item>
                    <detail-item
                        title="主演"
                        :list='moviewDetail.casts'>
                    </detail-item>
                    <detail-item
                        title="类型"
                        :list='moviewDetail.genres'>
                    </detail-item>
                    <detail-item
                        title="制片国家/地区"
                        :list='moviewDetail.countries'>
                    </detail-item>
                    <detail-item
                        title="年份"
                        :text='moviewDetail.year'>
                    </detail-item>
                    <detail-item
                        title="豆瓣评分"
                        :text='moviewDetail.rating.average'>
                    </detail-item>
                </div>
            </div>
            <div class="summary">
                 {{ moviewDetail.summary }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import detailItem from '../components/detailItem'
export default {
    methods:{
        back(){
            window.history.back()
        },
        check(){
            console.log( this.$store.state.moviewDetail )
        }
    },
    mounted(){

    },
    computed:{
        ...mapState(['moviewDetail','detailLoading'])
    },
    components:{
        detailItem,
    }
}
</script>

<style>
    .wrap{
        margin-top: 10px;
    }
    img{
        display: block;
        width: 100%;
    }
    .mint-spinner-double-bounce{
        margin: 60px auto 0;
        width: 50px !important;
        height: 50px !important;
    }
    .mint-spinner-double-bounce-bounce2,.mint-spinner-double-bounce-bounce1{
        background-color: #26a2ff !important;
    }
    .img{
        width: 35%;
    }
    .con{
        width: 63%;
        margin-left: 2%;
    }
    .con > div{
        line-height: 23px;
    }
    .img,.con{
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
    }
    .summary{
        margin-top: 16px;
        text-indent: 2em;
    }
</style>
