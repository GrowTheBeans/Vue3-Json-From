<template>
  <div class="schools_text_containers">
    <h2>热门院校</h2>
    <el-row class="row-bg" :gutter="20" id="Logo">
      <el-col :span="4" v-for="item in colleage" :key="item.key">
        <el-card :body-style="{ padding: '10px' }" shadow="never">
          <sup class="city">{{ item.City }}</sup>
          <img style="width: 120px; height: 120px" :src="item.Logo" :alt="item.Name" />
          <div style="padding: 14px 0">
            <h4>{{ item.Name }}</h4>
            <div class="bottom">
              <el-tooltip :content="item.Affiliation" placement="top" effect="light">
                <i class="el-icon-info" style="color: #999"></i>
              </el-tooltip>
              <time class="time ellips_single">时间：{{ currentDate }}</time>
              <span class="ellips_single">{{ item.Type }}类型大学</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'
import { ColleageProps } from './InterColumn'
import Viewer from 'viewerjs'
import dayjs from 'dayjs'
export default defineComponent({
  name: 'SchoolsTextAlign',
  props: {
    colleage: {
      type: Array as PropType<ColleageProps[]>
    }
  },
  setup() {
    const currentDate = ref(dayjs().format('YYYY-MM-DD'))
    onMounted(() => {
      const viewer = new Viewer(document.getElementById('Logo') as HTMLElement, {
        navbar: false,
        button: false,
        title: [0, (imageData: { alt: string }) => `${imageData.alt}`],
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          play: {
            show: 4
          },
          oneToOne: 4,
          rotateLeft: 4,
          rotateRight: 4
        }
      })
      return viewer
    })
    return {
      currentDate
    }
  }
})
</script>

<style lang="less" scoped>
.schools_text_containers {
  text-align: center;
  padding: 20px 200px;
  margin: 40px 0 0 0;
  background-color: rgb(255, 255, 255);
  h2 {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 22px;
    line-height: 1.35;
  }
  .city {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 12px;
    min-width: 40px;
    height: 30px;
    line-height: 30px;
    border-radius: 0 0 0 10px;
    background-color: #409eff;
  }
  h4 {
    font-weight: bold;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 14px;
    .time {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
