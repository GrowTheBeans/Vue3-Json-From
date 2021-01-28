<template>
  <div class="schools_text_containers">
    <h2>热门院校</h2>
    <el-row class="row-bg" :gutter="20">
      <el-col :span="4" v-for="o in 6" :key="o">
        <el-card :body-style="{ padding: '10px' }" shadow="never">
          <sup class="city">上海</sup>
          <el-image
            style="width: 120px; height: 120px"
            src="http://dakaojiang.com/apiServer/File/School/Logo/2018102247167626.jpg"
            fit="fill"
          ></el-image>
          <div style="padding: 14px 0">
            <h4>北京大学</h4>
            <div class="bottom">
              <el-tooltip content="Bottom center" placement="top" effect="light">
                <i class="el-icon-info" style="color: #999"></i>
              </el-tooltip>
              <time class="time ellips_single">时间：{{ currentDate }}</time>
              <span class="ellips_single">{{ Type }}类型大学</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
export default defineComponent({
  name: 'SchoolsTextAlign',
  setup() {
    const currentDate = ref(dayjs().format('YYYY-MM-DD'))
    const Type = ref('综合 财经')
    return {
      currentDate,
      Type
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
