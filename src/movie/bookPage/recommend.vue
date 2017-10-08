<template>
    <div>
        <p style='padding-left:15px;'>个人推荐~</p>
        <ul class='rList'>
        <li v-for='item in rList'>
            <router-link :to="'/book/'+item.id">
                <div>
                    <img :src='item.images.large' />
                </div>
                <div>
                    书名:{{ item.title }}
                </div>
                <div>
                    作者:{{ item.author[0] }}
                </div>
            </router-link>
        </li>
        </ul>
    </div>
</template>

<script>
    import jsonp from 'jsonp'
    export default {
        name:'recommend',
        mounted(){

        },
        data(){
            return {
                rList:[
                    {
                        "id": "1483894",
                        "title": "三国演义",
                        "images": {
                            "large": "https://img3.doubanio.com/lpic/s1661101.jpg",
                        },
                        "author": [
                            "罗贯中"
                        ],
                    },
                    {
                        "id": "1072774",
                        "title": "水浒传",
                        "images": {
                            "large": "https://img3.doubanio.com/lpic/s23574262.jpg",
                        },
                        "author": [
                            "施耐庵、罗贯中\\|校注"
                        ],
                    },
                    {
                        "id": "25709685",
                        "title": "守望者 上",
                        "images": {
                            "large": "https://img1.doubanio.com/lpic/s28805297.jpg",
                        },
                        "author": [
                            "[美]阿兰·摩尔"
                        ],
                    },
                    {
                        "id": "25907864",
                        "title": "守望者 下",
                        "images": {
                            "large": "https://img1.doubanio.com/lpic/s27445208.jpg",
                        },
                        "author": [
                            "[美]阿兰·摩尔"
                        ],
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped='scoped'>
    img{
        width:100%;
    }
    .rList{
        padding:0 15px;
        overflow:hidden;
        >li{
            float:left;
            width:49%;
            margin-bottom:20px;
        }
        >li:nth-child(2n+2){
            margin-left:2%;
        }
    }
</style>