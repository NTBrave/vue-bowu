<template>
  <div class="user">
      <div><mt-button size="small" @click="back">返回</mt-button></div>
      <div>
      <div class="nav">
        <mt-button size="small" @click.native.prevent="active = '1'">陶瓷</mt-button>
        <mt-button size="small" @click.native.prevent="active = '2'">书画</mt-button>
        <mt-button size="small" @click.native.prevent="active = '3'">青铜器</mt-button>
        <mt-button size="small" @click.native.prevent="active = '4'">玉器</mt-button>
        <mt-button size="small" @click.native.prevent="active = '5'">金木雕</mt-button>
        <mt-button size="small" @click.native.prevent="active = '6'">端砚</mt-button>
      </div>
      
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="1">
            <mt-cell v-for="n in list1" :title="n.n" :key="n.n" ></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in list2" :title="n.n" :key="n.n"  ></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in list3" :title="n.n" :key="n.n"  ></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-cell v-for="n in list4" :title="n.n" :key="n.n" ></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="5">
            <mt-cell v-for="n in list5" :title="n.n" :key="n.n"  ></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="6">
            <mt-cell v-for="n in list6" :title="n.n" :key="n.n"  ></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      list1:[{n:"明崇祯款青花罗汉纹炉"},{n:"明石湾窑翠毛釉梅瓶"},{n:"西晋青釉堆贴人物鸟兽谷仓"},{n:"南朝青釉四耳罐"},{n:"北宋青白釉印花葫芦形注子碗"},{n:"宋金三彩婴戏图长方枕"}],
      list2:[{n:"沈周 青山暮云图轴"},{n:"赵孟頫 行书陋室铭卷"},{n:"唐寅 清溪松荫图轴"},{n:"林则徐 行书轴"},{n:"无款 伏虎罗汉图轴"},{n:"沈完 兰亭修禊图轴"}],
      list3:[{n:"春秋楚王孙铜钟"},{n:"战国错银青铜罍"},{n:"战国附耳青铜筩"},{n:"钩铜戟"},{n:"连钩铜戟"},{n:"长刺连钩铜戟"}],
      list4:[{n:"寿山石雕东方朔像"},{n:"镌乾隆御诗白玉碗"},{n:"双龙耳活环狮羊钮翠玉盖瓶"},{n:"明青玉桃"},{n:"明青玉桃式洗"},{n:"新石器时代青玉璋"}],
      list5:[{n:"金漆木雕大神龛"},{n:"方形宣炉罩"},{n:"木雕鱼龙纹雀替"},{n:"通雕葫芦荷花纹穿插枋"},{n:"人物花板"},{n:"通雕梅花螃蟹纹梁托"}],
      list6:[{n:"端石随形砚"},{n:"端石长方板砚"},{n:"端石梅雀砚"},{n:"端石长方砚"},{n:"端石芭蕉砚"},{n:"端石井田砚"}],
      active: this.$route.params.id,
      // title:this.$route.params.id,
    }
  },

  methods:{back(){this.$router.push('/collection')}},
};  

</script>
<style lang="css" scoped>
  .item {
    display: inline-block;
  }
 
  .nav {
    padding: 10px;
  }
 
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>