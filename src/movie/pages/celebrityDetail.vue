<template>
    <div>
        <mt-header :title="celebrity.name" v-show='celebrityLoading'>
            <mt-button slot="left" icon="back" @click="goback">返回</mt-button>
        </mt-header>
        <mt-spinner type="double-bounce" v-show="!celebrityLoading"></mt-spinner>
        <div class="wrap" v-show='celebrityLoading'>
            <info :url='celebrity.avatars.large'>
                <div class="con" slot="con">
                    <detail-item
                        title="性别"
                        :text='celebrity.gender'>
                    </detail-item>
                    <detail-item
                        title="出生地"
                        :text='celebrity.born_place'>
                    </detail-item>
                    <detail-item
                        title="英文名"
                        :text='celebrity.name_en'>
                    </detail-item>
                    <detail-item
                        :unRouter=true
                        title="更多外名"
                        :list='celebrity.aka_en'>
                    </detail-item>
                    <detail-item
                        :unRouter=true
                        title="更多外名"
                        :list='celebrity.aka'>
                    </detail-item>
                </div>
            </info>
            <p>最受好评的5部作品--</p>
            <ul class="worksList">
                <li v-for='item in celebrity.works'>
                    <div>
                        <img :src="item.subject.images.large">
                    </div>
                    <div>
                        {{ item.subject.title }} <span class="score">{{ item.subject.rating.average }}</span> {{ item.subject.year }}
                    </div>
                    <div>
                        <span v-for='(duty, index) in item.roles'>
                            <span v-if="index !== 0">/</span>{{ duty }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang='less'>
    .worksList{
        padding: 0 2%;
        overflow: hidden;
        >li{
            float: left;
            width: 45%;
            margin-bottom: 20px;
        }
        >li:nth-child(2n+1){
            margin-right: 6%;
        }
    }
</style>

<script>
import { mapState } from 'vuex'
import detailItem from '../components/detailItem'
import info from '../components/info'
export default {
    methods:{
        goback(){
            window.history.back();
        }
    },
    computed:{
        ...mapState(['celebrity','celebrityLoading'])
    },
    components:{
        detailItem,
        info
    }
}
</script>
