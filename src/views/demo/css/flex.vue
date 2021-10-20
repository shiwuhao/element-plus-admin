<template>
  <PageWrapper :title="$route['meta']['title']">
    <template #content>
      flex布局常用伪类
      <div><code>flex-row</code>水平方向，起点在左端</div>
      <div><code>flex-row-re</code>水平方向，起点在右端</div>
      <div><code>flex-col</code>垂直方向，起点在顶端</div>
      <div><code>flex-col-re</code>垂直方向，起点在底端</div>
      <div>使用方式 <code>.flex-xx [.主轴对齐方式] [.交叉轴对齐方式]</code>中括号为可选值</div>
    </template>
    <el-card shadow="none" header="主轴为水平方向 flex-row " class="mb-2">
      <el-row :gutter="10">
        <!--    left    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row [.start] [.align-start]</code></div>
              <div>主轴：左对齐</div>
              <div>交叉轴：上对齐</div>
            </div>
            <div class="box flex-row">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row [.start] .align-center</code></div>
              <div>主轴：左对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-row align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row [.start] .align-end</code></div>
              <div>主轴：左对齐</div>
              <div>交叉轴：下对齐</div>
            </div>
            <div class="box flex-row align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    center    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .center [.align-start]</code></div>
              <div>主轴：居中对齐</div>
              <div>交叉轴：上对齐</div>
            </div>
            <div class="box flex-row center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .center .align-center</code></div>
              <div>主轴：居中对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-row center align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .center .align-end</code></div>
              <div>主轴：居中对齐</div>
              <div>交叉轴：下对齐</div>
            </div>
            <div class="box flex-row center align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    right    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .end [.align-start]</code></div>
              <div>主轴：右对齐</div>
              <div>交叉轴：上对齐</div>
            </div>
            <div class="box flex-row end align-start">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .end .align-center</code></div>
              <div>主轴：右对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-row end align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .end .align-end</code></div>
              <div>主轴：右对齐</div>
              <div>交叉轴：下对齐</div>
            </div>
            <div class="box flex-row end align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    between    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .between [.align-start]</code></div>
              <div>主轴：两端对齐</div>
              <div>交叉轴：上对齐</div>
            </div>
            <div class="box flex-row between">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .between .align-center</code></div>
              <div>主轴：两端对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-row between align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .between .align-end</code></div>
              <div>主轴：两端对齐</div>
              <div>交叉轴：下对齐</div>
            </div>
            <div class="box flex-row between align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    around    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .around [.align-start]</code></div>
              <div>主轴：两侧间隔相等</div>
              <div>交叉轴：上对齐</div>
            </div>
            <div class="box flex-row around">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .around .align-center</code></div>
              <div>主轴：两侧间隔相等</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-row around align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-row .around .align-end</code></div>
              <div>主轴：两侧间隔相等</div>
              <div>交叉轴：下对齐</div>
            </div>
            <div class="box flex-row around align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="none" header="主轴为垂直方向 - flex-col" class="mb-2">
      <el-row :gutter="10">
        <!--    left    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col [.start] [.align-start] </code></div>
              <div>主轴：上对齐</div>
              <div>交叉轴：左对齐</div>
            </div>
            <div class="box flex-col">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .center [.align-start]</code></div>
              <div>主轴：居中对齐</div>
              <div>交叉轴：左对齐</div>
            </div>
            <div class="box flex-col center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .end [.align-start]</code></div>
              <div>主轴：下对齐</div>
              <div>交叉轴：左对齐</div>
            </div>
            <div class="box flex-col end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    center    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col [.start] .align-center</code></div>
              <div>主轴：上对齐</div>
              <div>交叉轴：中对齐</div>
            </div>
            <div class="box flex-col align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .center .align-center</code></div>
              <div>主轴：居中对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-col center align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .end .align-center </code></div>
              <div>主轴：下对齐</div>
              <div>交叉轴：中对齐</div>
            </div>
            <div class="box flex-col end align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    right    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col [.start] .align-end</code></div>
              <div>主轴：上对齐</div>
              <div>交叉轴：右对齐</div>
            </div>
            <div class="box flex-col align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .center .align-end</code></div>
              <div>主轴：中对齐</div>
              <div>交叉轴：右对齐</div>
            </div>
            <div class="box flex-col center align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .end .align-end</code></div>
              <div>主轴：下对齐</div>
              <div>交叉轴：右对齐</div>
            </div>
            <div class="box flex-col end align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    between    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .between [.align-start]</code></div>
              <div>主轴：上下两端对齐</div>
              <div>交叉轴：左对齐</div>
            </div>
            <div class="box flex-col between">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .between [.align-center]</code></div>
              <div>主轴：上下两端对齐</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-col between align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .between .align-end</code></div>
              <div>主轴：上下两端对齐</div>
              <div>交叉轴：右对齐</div>
            </div>
            <div class="box flex-col between align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>

        <!--    around    -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .around [.align-start]</code></div>
              <div>主轴：上下两侧间隔相等</div>
              <div>交叉轴：左对齐</div>
            </div>
            <div class="box flex-col around">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .around .align-center</code></div>
              <div>主轴：上下两侧间隔相等</div>
              <div>交叉轴：居中对齐</div>
            </div>
            <div class="box flex-col around align-center">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="wrap">
            <div class="desc">
              <div>class：<code>.flex-col .around .align-end</code></div>
              <div>主轴：上下两侧间隔相等</div>
              <div>交叉轴：居右对齐</div>
            </div>
            <div class="box flex-col around align-end">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {reactive, toRefs} from "vue";

export default {
  name: "text",
  components: {PageWrapper},
  setup() {
    const state = reactive({
      text: 'Element Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.Element Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.'
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
code {
  color: red;
  margin-right: 10px;
  min-width: 150px;
}

.wrap {
  padding: 10px 0;

  .desc {
    @extend .text-overflow-3;
  }

  .box {
    background: #F2F6FC;
    height: 150px;

    .item {
      text-align: center;
      width: 50px;
      height: 20px;
      background: #C0C4CC;
      margin: 5px;
    }
  }
}
</style>