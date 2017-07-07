<template>
    <div>
      <mt-header v-show='detailLoading' :title="moviewDetail.title">
            <mt-button slot="left" icon="back" @click='back()'>返回</mt-button>
      </mt-header>
      <mt-spinner type="double-bounce" v-show='!detailLoading'></mt-spinner>
        <div class="wrap" v-show='detailLoading'>
            <info :url='moviewDetail.images.large'>
                <div class="con" slot="con">
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
            </info>
            <div class="summary">
                 {{ moviewDetail.summary }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import detailItem from '../components/detailItem'
import info from '../components/info'
export default {
    methods:{
        back(){
            window.history.back()
        }
    },
    computed:{
        ...mapState(['moviewDetail','detailLoading'])
    },
    components:{
        detailItem,
        info
    }
}
</script>

<style>
    .wrap{
        margin-top: 10px;
    }
    .summary{
        margin-top: 16px;
        text-indent: 2em;
    }
</style>
