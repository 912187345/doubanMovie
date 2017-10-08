<template>
    <div class='indexWrap'>
        <div class='title'>
            请选择~
        </div>
        <router-link to="/movie/shangying">        
            <mt-button type="primary" size='large' style='margin-bottom:30px;'>
                <img src='../assets/movieIcon.png' class='iconImg' slot="icon" />
                看电影
            </mt-button>
        </router-link>
        <router-link to='/book'>
            <mt-button type="primary" size='large'>
                <img src='../assets/bookIcon.png' class='iconImg' slot='icon' />
                看图书 
            </mt-button>
        </router-link>
    </div>
</template>
<script>
    
</script>
<style lang="less" scoped='scoped'>
    .indexWrap{
        width:90%;
        margin:0 auto;
        .iconImg{
            width:20px;
            height:20px;
        }
        .title{
            padding:20px 0 130px;
        }
    }
</style>