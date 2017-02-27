<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    beforeCreate () {
      // 默认打开首页
      this.$router.push({path: '/index'})
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }

  .h100 {
    height: 100%;
  }

  /*  flex 布局 */
  .flex {
    display: -webkit-box;
    display: flex;
  }

  .flex1 {
    -webkit-box-flex: 1;
    flex: 1
  }

  .flex2 {
    -webkit-box-flex: 2;
    flex: 2
  }

  .flex3 {
    -webkit-box-flex: 3;
    flex: 3
  }

  .flex4 {
    -webkit-box-flex: 4;
    flex: 4
  }

  .flex5 {
    -webkit-box-flex: 5;
    flex: 5
  }

  .flex6 {
    -webkit-box-flex: 6;
    flex: 6
  }

  .flex-dv {
    -webkit-box-orient: vertical;
    flex-direction: column;
  }

  .flex-c {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
  }

  .flex-jb {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  /* 字体颜色 */
  .t_white {
    color: #fff;
  }

  .t_bd {
    color: #bdbdbd;
  }

  .t_green {
    color: #578f00;
  }

  .t_orange {
    color: #ff7200;
  }

  .t_blue {
    color: #0056b6;
  }

  .t_d5 {
    color: #d5d5d5;
  }

  .t_red {
    color: #f00;
  }

  .t_aaa {
    color: #aaa;
  }

  .t_6b {
    color: #6b6b6b;
  }

  .t_bluelight {
    color: #00c0ff;
  }

  .t_bluelight2 {
    color: #0072ff;
  }

  .t_black {
    color: #000;
  }

  .t_greenlight {
    color: #009d30;
  }

  /*padding / margin*/
  .p4 {
    padding: 4px;
  }

  .pl4 {
    padding-left: 4px;
  }

  .pr4 {
    padding-right: 4px;
  }

  .pt4 {
    padding-top: 4px;
  }

  .pb4 {
    padding-bottom: 4px;
  }

  .plr4 {
    padding-left: 4px;
    padding-right: 4px;
  }

  .ptb4 {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .p6 {
    padding: 6px;
  }

  .pl6 {
    padding-left: 6px;
  }

  .pr6 {
    padding-right: 6px;
  }

  .pt6 {
    padding-top: 6px;
  }

  .pb6 {
    padding-bottom: 6px;
  }

  .plr6 {
    padding-left: 6px;
    padding-right: 6px;
  }

  .ptb6 {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .p8 {
    padding: 8px;
  }

  .pl8 {
    padding-left: 8px;
  }

  .pr8 {
    padding-right: 8px;
  }

  .pt8 {
    padding-top: 8px;
  }

  .pb8 {
    padding-bottom: 8px;
  }

  .plr8 {
    padding-left: 8px;
    padding-right: 8px;
  }

  .ptb8 {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .p10 {
    padding: 10px;
  }

  .pl10 {
    padding-left: 10px;
  }

  .pr10 {
    padding-right: 10px;
  }

  .pt10 {
    padding-top: 10px;
  }

  .pb10 {
    padding-bottom: 10px;
  }

  .plr10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .ptb10 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .p15 {
    padding: 15px;
  }

  .pl15 {
    padding-left: 15px;
  }

  .pr15 {
    padding-right: 15px;
  }

  .pt15 {
    padding-top: 15px;
  }

  .pb15 {
    padding-bottom: 15px;
  }

  .plr15 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .ptb15 {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .p20 {
    padding: 20px;
  }

  .pl20 {
    padding-left: 20px;
  }

  .pr20 {
    padding-right: 20px;
  }

  .pt20 {
    padding-top: 20px;
  }

  .pb20 {
    padding-bottom: 20px;
  }

  .plr20 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .ptb20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .p25 {
    padding: 25px;
  }

  .pl25 {
    padding-left: 25px;
  }

  .pr25 {
    padding-right: 25px;
  }

  .pt25 {
    padding-top: 25px;
  }

  .pb25 {
    padding-bottom: 25px;
  }

  .plr25 {
    padding-left: 25px;
    padding-right: 25px;
  }

  .ptb25 {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .p30 {
    padding: 30px;
  }

  .pl30 {
    padding-left: 30px;
  }

  .pr30 {
    padding-right: 30px;
  }

  .pt30 {
    padding-top: 30px;
  }

  .pb30 {
    padding-bottom: 30px;
  }

  .plr30 {
    padding-left: 30px;
    padding-right: 30px;
  }

  .ptb30 {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .p40 {
    padding: 40px;
  }

  .pl40 {
    padding-left: 40px;
  }

  .pr40 {
    padding-right: 40px;
  }

  .pt40 {
    padding-top: 40px;
  }

  .pb40 {
    padding-bottom: 40px;
  }

  .plr40 {
    padding-left: 40px;
    padding-right: 40px;
  }

  .ptb40 {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .m4 {
    margin: 4px;
  }

  .ml4 {
    margin-left: 4px;
  }

  .mr4 {
    margin-right: 4px;
  }

  .mt4 {
    margin-top: 4px;
  }

  .mb4 {
    margin-bottom: 4px;
  }

  .mlr4 {
    margin-left: 4px;
    margin-right: 4px;
  }

  .mtb4 {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .m8 {
    margin: 8px;
  }

  .ml8 {
    margin-left: 8px;
  }

  .mr8 {
    margin-right: 8px;
  }

  .mt8 {
    margin-top: 8px;
  }

  .mb8 {
    margin-bottom: 8px;
  }

  .mlr8 {
    margin-left: 8px;
    margin-right: 8px;
  }

  .mtb8 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .m10 {
    margin: 10px;
  }

  .ml10 {
    margin-left: 10px;
  }

  .mr10 {
    margin-right: 10px;
  }

  .mt10 {
    margin-top: 10px;
  }

  .mb10 {
    margin-bottom: 10px;
  }

  .mlr10 {
    margin-left: 10px;
    margin-right: 10px;
  }

  .mtb10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .m15 {
    margin: 15px;
  }

  .ml15 {
    margin-left: 15px;
  }

  .mr15 {
    margin-right: 15px;
  }

  .mt15 {
    margin-top: 15px;
  }

  .mb15 {
    margin-bottom: 15px;
  }

  .mlr15 {
    margin-left: 15px;
    margin-right: 15px;
  }

  .mtb15 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .m20 {
    margin: 20px;
  }

  .ml20 {
    margin-left: 20px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .mb20 {
    margin-bottom: 20px;
  }

  .mlr20 {
    margin-left: 20px;
    margin-right: 20px;
  }

  .mtb20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .m25 {
    margin: 25px;
  }

  .ml25 {
    margin-left: 25px;
  }

  .mr25 {
    margin-right: 25px;
  }

  .mt25 {
    margin-top: 25px;
  }

  .mb25 {
    margin-bottom: 25px;
  }

  .mlr25 {
    margin-left: 25px;
    margin-right: 25px;
  }

  .mtb25 {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .mb70 {
    margin-bottom: 70px;
  }
</style>
