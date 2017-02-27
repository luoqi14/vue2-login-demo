<template>
  <div class="h100 index-container" v-title data-title="登录后页面">
    <div class="h100 flex flex-c flex-dv">
      <p class="mb20">登录用户为：{{getUser()}}</p>
      <mt-button type="primary" size="large" @click.native.prevent="logout">退出</mt-button>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        selected: true
      }
    },
//    computed: {
//      user () {
//        console.log(this.$store)
//        return this.$store.state.login.user
//      }
//    },
    created () {
      let user = this.getUser();
      if (!user) { // 未登录跳到登录页
        this.$router.push({path: '/login'});
      }
    },
    methods: {
      getUser () {
        return window.localStorage.getItem('access-token')
      },
      logout () {
        window.localStorage.setItem('access-token', '')
        this.$router.push({path: '/login'});
      }
    }
  }
</script>
<style>
  .index-container {
    padding: 10px;
  }

</style>
