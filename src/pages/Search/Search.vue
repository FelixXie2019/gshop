<template>
  <section class="search">
    <header class="header">
      <span class="header_title">
        <span class="header_title_text">搜索</span>
      </span>
    </header>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    .header
      width 100%
      height 45px
      position fixed
      top 0
      left 0
      background-color #02a774
      z-index 100
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width 30%
        color #fff
        font-size 22px
        text-align center
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 75%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 22%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
</style>
