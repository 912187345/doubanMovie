<template>
    <div>
        <mt-spinner type="double-bounce" v-show='!item.images.large'></mt-spinner>
        <mt-header :title="item.title">
            <mt-button slot="left" icon="back" @click='back()'>返回</mt-button>
        </mt-header>
        <div class="wrap">
            <info :url='item.images.large'>
                <div class='con' slot="con">
                    <detail-item
                        title="作者"
                        :list='item.author'>
                    </detail-item>
                    <detail-item
                        title="出版社"
                        :list='item.publisher'>
                    </detail-item>
                    <detail-item
                        title="原作名"
                        :text='item.alt_title'>
                    </detail-item>
                    <detail-item
                        title="出版年"
                        :text='item.pubdate'>
                    </detail-item>
                    <detail-item
                        title="页数"
                        :text='item.pages'>
                    </detail-item>
                    <detail-item
                        title="豆瓣评分"
                        :text='item.rating.average'>
                    </detail-item>
                    <detail-item
                        title="定价"
                        :text='item.price'>
                    </detail-item>
                </div>
            </info>
            <div class="summary">
                {{ item.summary }}
            </div>
        </div>
    </div>
</template>

<script>
    import info from '../components/info'
    import detailItem from '../components/detailItem'
    import jsonp from 'jsonp'
    export default {
        name:'bookDetail',
        mounted(){
            jsonp(`https://api.douban.com/v2/book/${ this.$route.params.bookId }`,null,(err, data)=>{
                if( err ){
                    console.log(err)
                }else{
                    this.item = data;
                    console.log(data)
                }
            })
        },
        data(){
            return {
                item:{
                    images:{
                        large:''
                    }
                },
            }
        },
        components:{
            info,
            detailItem
        },
        destroyed(){
            this.item = {};
        },
        methods:{
            back(){
                window.history.back()
            }
        }
    }
</script>

<style lang="less">
    .wrap{
        margin-top: 10px;
    }
    .summary{
        margin-top: 16px;
        text-indent: 2em;
        line-height: 28px;
    }
</style>