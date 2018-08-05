<template>
  <main id="home" class="view">
    <div class="heading">
      <md-icon name="mand-mobile-logo" color="#333"></md-icon>
      <h1><span>Mand Mobile</span></h1>
      <p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
    </div>
    <md-button @click="handleClick">点我</md-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon, Button, Toast } from 'mand-mobile';

@Component({
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
  },
})
// @ts-ignore
export default class HelloWorld extends Vue {
  private handleClick() {
    Toast.info('不错哟~');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.view
  padding 0 20px
  .heading
    text-align center
    margin-bottom 48px
    .md-icon
      width 100px
      height 80px
    h1
      color #333
      line-height 1.15
      font-size 64px
      margin-bottom 32px
      span
        position relative
        &::after
          content ""
          position absolute
          z-index -1
          left 0
          bottom 8px
          width 100%
          height 20px
          background #ecf6ff
    p
      font-size 32px
      color #666
      line-height 56px
</style>
