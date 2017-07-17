<template>
    <div style="font-size:0;">
        <div class="img">
            <img :src="url">
        </div>
        <slot name="con">
        </slot>
    </div>
</template>

<script>
export default {
    props:['url']
}
</script>

<style scoped lang='less'>
    img{
        display: block;
        width: 100%;
    }
    .img{
        width: 35%;
    }
    .con{
        width: 63%;
        margin-left: 2%;
        >div{
            line-height: 23px;
        }
    }
    .img,.con{
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
    }
</style>
