<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <div v-for="item in leftBottomData" :key="item.id" class="workplace-dynamic">
        <el-avatar :src="item.user.avatar"></el-avatar>
        <!--      <span>{{ item.user.name }}在{{ item.group.name }}新建项目{{ item.project.name }}</span>-->
        <span>
          {{ item.user.name }}{{formatDynamicData(item.template)}}
        </span>
        <time class="workplace-dynamic-time">{{ transformTime(item.updatedAt) }}</time>
        <el-divider/>
      </div>

    </template>
  </Card>
</template>
<script>
import {defineComponent, ref, onMounted,computed} from 'vue';
import {Card} from '@/components/Card';
import {leftBottomData} from "@/views/dashboard/workplace/data";
import {transformTime} from '@/utils/utils';

export default defineComponent({
  components: {Card},
  setup() {
    const data = ref('');
    const res = ref(null);

    onMounted(() => {
      formatDynamicData()
    })
    // const formatDynamicData = computed (() => {
    //      leftBottomData.map(item=>{
    //        return item.template
    //     })
    // })
    const formatDynamicData = (data) => {
     if(data!==undefined){
       const reg = /@\{(.*?)\}/;
       var res = data.match(reg);
           var res2 = res.join(',')
           const res1  = res2.replace(reg, "$1")
           const res3 = res1.split(',');
       leftBottomData.map(item=>{
         data.replace(reg,item[res3[0]].name).replace(reg,item[res3[1]].name)
         console.log(data)
       })

     }
    }
    // const formatDynamicData = () => {
    //   leftBottomData.map(item => {
    //      const reg = /@\{(.*?)\}/;
    //     const reg1 = /@\{.*?\}/g
    //     var res = item.template.match(reg);
    //     var res2 = res.join(',')
    //     const res1  = res2.replace(reg, "$1")
    //     const res3 = res1.split(',');
    //    return item.template.replace(reg,item[res3[0]].name).replace(reg,item[res3[1]].name)
    //
    //     // while (res = reg.exec(item.template)) {
    //     //   console.log(res[1])
    //     // //  data.value = item.template.replace(reg1,item[res[1]].name)
    //     // }
    //   })
    // }
    return {
      leftBottomData,
      cardName: ref('动态'),
      transformTime,
      formatDynamicData
    }
  }
})
</script>
<style lang="scss" scoped>
.workplace-dynamic {
  width: 97%;
  margin: 0 auto;

  .el-avatar {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .workplace-dynamic-time {
    display: -webkit-box;
    font-size: $font-size-small;
    color: $color-text-gray;
    text-indent: 44px;
  }
  &:last-child {
    padding-bottom: 20px;
    .el-divider {
      display: none;
    }
  }
}
</style>
