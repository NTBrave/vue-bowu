<template>
  <div class="user">
    <div>
        <mt-button size="small" @click="back">返回</mt-button>
    </div>
      <div>
            <mt-cell title="账号： " value="77556785"></mt-cell>
            <mt-index-section index="收藏列表： 3">  
                <div @click="GoTaiwan">
                    <mt-cell title="翡翠白菜" @click="GoTaiwan">
                    <img slot="icon" src="..\resourse\images\fcbc\fcbc1.jpg" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="back">
                    <mt-cell title="金漆木雕大神龛">
                    <img slot="icon" src="..\resourse\images\jqmd\jqmd1.png" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="GoGuo">
                     <mt-cell title="四羊方尊">
                    <img slot="icon" src="..\resourse\images\syfz\syfz1.jpg" width="24" height="24">
                </mt-cell>
                </div>
            </mt-index-section>
            <mt-index-section index="点赞列表： 3">  
               <div @click="GoTaiwan">
                    <mt-cell title="翡翠白菜" @click="GoTaiwan">
                    <img slot="icon" src="..\resourse\images\fcbc\fcbc1.jpg" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="back">
                    <mt-cell title="金漆木雕大神龛">
                    <img slot="icon" src="..\resourse\images\jqmd\jqmd1.png" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="GoGuo">
                     <mt-cell title="四羊方尊">
                    <img slot="icon" src="..\resourse\images\syfz\syfz1.jpg" width="24" height="24">
                </mt-cell>
                </div>
            </mt-index-section>
            <mt-index-section index="浏览记录： 3">  
                 <div @click="GoTaiwan">
                    <mt-cell title="翡翠白菜" @click="GoTaiwan">
                    <img slot="icon" src="..\resourse\images\fcbc\fcbc1.jpg" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="back">
                    <mt-cell title="金漆木雕大神龛">
                    <img slot="icon" src="..\resourse\images\jqmd\jqmd1.png" width="24" height="24">
                </mt-cell>
                </div>
                <div @click="GoGuo">
                     <mt-cell title="四羊方尊">
                    <img slot="icon" src="..\resourse\images\syfz\syfz1.jpg" width="24" height="24">
                </mt-cell>
                </div>
            </mt-index-section>
         
    </div>
  </div>
</template>

<script>
export default {
    name: 'userpage',
    data() {
      return {

      }
    },

    methods:{
      back(){this.$router.push('/')},
      GoTaiwan(){this.$router.push('/home')},
       GoGuo(){this.$router.push('/oldhome')},


    },
  }
</script>
<style>
</style>
