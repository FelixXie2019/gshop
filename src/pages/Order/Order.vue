<template>
  <section class="order">
    <header class="header">
      <span class="header_title">
        <span class="header_title_text">订单列表</span>
      </span>
    </header>
    <section class="order_no_login">
      <img src="./img/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order
    width 100%
    .header
      width 100%
      height 45px
      position fixed
      left 0
      top 0
      z-index 100
      background-color #02a774
      .header_title
        width 30%
        font-size 22px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        color #fff
        text-align center
    .order_no_login
      width 60%
      padding-top 140px
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
 
</style>
