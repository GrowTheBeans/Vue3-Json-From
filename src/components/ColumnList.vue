<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="5" v-for="column in list" :key="column.id">
      <el-skeleton animated :loading="loading" :rows="5">
        <template #default>
          <el-card shadow="hover" :body-style="{ padding: '20px' }">
            <template #header>
              <div class="clearfix">
                <el-tag color="#7bbfea" size="mini" effect="dark" hit>主题</el-tag>
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
              <el-button plain size="small" type="primary" @click="onPosts">
                <span>进入专栏</span>
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>
            </div>
          </el-card>
        </template>
      </el-skeleton>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, ref } from 'vue'
import { ColumnProps } from './InterColumn.type.'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>
    }
  },
  setup(props) {
    const loading = ref(true)
    const TagColor = reactive([])
    const router = useRouter()
    const onPosts = () => {
      router.push('/posts')
    }
    setTimeout(() => (loading.value = false), 1000)
    const imgColumnList = props?.list?.filter((column) => {
      if (!column.avatar) {
        column.avatar = require('./image/svg/book.svg')
      }
    })
    return {
      imgColumnList,
      TagColor,
      loading,
      onPosts
    }
  }
})
</script>

<style lang="less" scoped>
@import "../style/mixin.less";
.header_title {
  display: flex;
  align-items: center;
  float: right;
  padding: 3px 0;
}
.el-col {
  margin: 36px 0 0 0;
}
:deep(.el-card) {
  height: 340px;
  border: 1px solid #f2f6fc;
  box-sizing: border-box;
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
    box-shadow: 0 0 0 2px #f2f6fc;
    background-color: rgba(0, 0, 0, 0.02);
  }
  h5 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: 500;
    font-family: Helvetica;
  }
  p {
    .ellips(3);
    text-indent: 1.5em;
    letter-spacing: 1.5px;
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-button {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
  }
}
</style>
