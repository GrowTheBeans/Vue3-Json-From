<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="5" v-for="column in list" :key="column.id">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div class="clearfix">
            <el-tag type="warning" size="mini" effect="plain">主题</el-tag>
            <span>Card name</span>
            <el-button class="header_title" type="text">
              <el-link :underline="false" type="primary">Operation button</el-link>
              <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                <i class="el-icon-warning-outline el-icon--right"></i>
              </el-tooltip>
            </el-button>
          </div>
        </template>
        <div class="column_containers">
          <img :src="column.avatar" :alt="column.title" />
          <h5>{{ column.title }}</h5>
          <p>{{ column.description }}</p>
          <el-button plain size="small" type="primary">
            <span>进入专栏</span>
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from './InterColumn'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>
    }
  }
})
</script>

<style lang="less" scoped>
.header_title {
  display: flex;
  align-items: center;
  float: right;
  padding: 3px 0;
}
.column_containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
    border: 4px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #F2F6FC;
    background-color: rgba(0, 0, 0, .02);
  }
  h5 {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 500;
  }
  p {
    text-indent: 1.5em;
    letter-spacing: 2px;
    font-size: 14px;
    margin-bottom: 30px;
  }
}
</style>
