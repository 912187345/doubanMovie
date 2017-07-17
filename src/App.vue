<template>
    <div id="app">
      <transition name="homeTransition">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="homeTransition">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transitionName:'homeTransition'
    }
  }
}
</script>

<style lang='less'>
.homeTransition-enter-active,
.homeTransition-leave-active {
	transition: opacity .2s;
}
.homeTransition-enter,
.homeTransition-leave-active {
	opacity: 0;
}
</style>
