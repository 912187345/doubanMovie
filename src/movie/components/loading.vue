<template>
  <div class="loading">
        <mt-spinner type="triple-bounce" v-show="loadIcon"></mt-spinner>
        <span>
            {{ content }}
        </span>
    </div>
</template>

<script>
export default {
    props:['content','loadIcon'],
    name:'loading'
}
</script>

<style>
    .mint-spinner-triple-bounce{
        display: inline-block;
        vertical-align: middle;
    }
    .mint-spinner-triple-bounce > div{
        background-color: #26a2ff !important;
    }
    .loading > span{
        display: inline-block;
        vertical-align: middle;
    }
    .loading{
        text-align: center;
        line-height: 40px;
    }
</style>
