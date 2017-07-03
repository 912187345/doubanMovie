// 电影详情 信息item
<template>
  <div>
    <div v-if="list"> 
        <span class="title">{{ title }}:</span>
        <span v-for='(item,index) in list' class="content"> 
            <span v-if='index !== 0'>/</span> <span v-if="item.name">{{ item.name }} </span> <span v-else>{{ item }}</span>
        </span>
    </div>
    <div v-else-if="text">
        <span class="title">{{ title }}:</span>
        <span class="content">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:['title','list','text']
}
</script>

<style scoped>
  .title{
      color: #333333;
  }
  .content{
      color: #666699;
  }
</style>
