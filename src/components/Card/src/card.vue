<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }" :shadow="shadow" class="common-card">
        <template #header v-if="header">
          <div class="card-header">
            <span>{{ cardName }}</span>
            <el-button class="button" type="text">{{ btnName }}</el-button>
          </div>
        </template>
        <div class="text item" :cardData='applicationList'></div>
        <div :class="imageCard === true ? 'application-image-card':'application-card'">
          <img :src="imageUrl" class="image">
          <div style="padding: 14px;" class="project-card">
            <span class="project-card-title">{{ title }}</span>
            <p class="project-card-description">{{ description }}</p>
            <div class="bottom">
              <time class="time">{{ time }}</time>
              <slot name="custom"></slot>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, ref, toRefs} from 'vue';

export default defineComponent({
  props: {
    cardName: {
      type: String,
      default: ''
    },
    btnName: {
      type: String,
      default: ''
    },
    cardData: {
      type: Array,
      default: () => {
        []
      }
    },
    header: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    shadow: {
      type: String,
      default: 'always'
    },
    imageCard: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const {cardData = []} = toRefs(props)
    const applicationList = cardData.value;
    return {
      applicationList
    };
  },
});
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 1024px) {
  .el-row {
    width: 100%;
  }
}
@media screen and (min-width: 640px) {
  .el-row {
    width: 32%;
    margin-right: 15px;
  }
}
.common-card {
  margin-bottom: 14px;

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }

  .application-image-card {
    display: block;
  }

  .application-card {
    display: none
  }

  .project-card {
    .project-card-title {
      font-size: 16px;
      color: rgba(0, 0, 0, .85)
    }

    .project-card-description {
      font-size: 14px;
      color: rgba(0, 0, 0, .45);
    }
  }

}
</style>
