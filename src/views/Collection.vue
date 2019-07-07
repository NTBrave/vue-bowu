<template>
  <div class="collection">
    <div>
        <mt-button size="small" @click="back">返回</mt-button>
    </div>
      <mt-index-list :showIndicator="true">
        <mt-index-section index="文物">
            <div @click="Gowenwu(1)"><mt-cell title="陶瓷"></mt-cell></div>
            <div @click="Gowenwu(2)"><mt-cell title="书画" @click="Gowenwu"></mt-cell></div>
            <div @click="Gowenwu(3)"><mt-cell title="青铜器" @click="Gowenwu"></mt-cell></div>
            <div @click="Gowenwu(4)"><mt-cell title="玉器" @click="Gowenwu"></mt-cell></div>
            <div @click="Gowenwu(5)"><mt-cell title="金木雕" @click="Gowenwu"></mt-cell></div>
            <div @click="Gowenwu(6)"><mt-cell title="端砚" @click="Gowenwu"></mt-cell></div>
        </mt-index-section>
        <mt-index-section index="标本">
            <mt-cell title="陆地动物标本"></mt-cell>
            <mt-cell title="中草药标本"></mt-cell>
            <mt-cell title="宝玉石标本"></mt-cell>
            <mt-cell title="海洋动物标本"></mt-cell>
            <mt-cell title="古生物化石"></mt-cell>
            <mt-cell title="矿物标本"></mt-cell>
        </mt-index-section>
        <mt-index-section index="专题">
            <mt-cell title="泰坦尼克"></mt-cell>
            <mt-cell title="贝类动物的世界"></mt-cell>
                <mt-cell title="晋国遗珍——山西出土周代文物..."></mt-cell>
            <mt-cell title="茗香茶韵——中国茶文化展"></mt-cell>
                <mt-cell title="岭南印记——粤港澳考古成果展"></mt-cell>
            <mt-cell title="曙光时代——意大利的伊特鲁里..."></mt-cell>
        </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
    name: 'aaa',
    data() {
      return {
        list:[{n:11},{n:22},{n:33},{n:44},{n:55},{n:66}],
      }
    },

    methods:{
      back(){this.$router.push('/')},
      Gowenwu:function(id){//传参+跳转
          this.$router.push('/itemize'+'/'+id)
      }

    },
  }
</script>
<style>
</style>
