<template>
  <el-footer>
    © 粽子版权所有 | ICP备 |
    <el-link type="primary" :underline="false" disabled>{{ now }}</el-link>
  </el-footer>
</template>

<script lang='ts'>
import Dayjs from 'dayjs'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GonalFooter',
  setup () {
    const now = Dayjs().format('YYYY年MM月DD日 HH:mm:ss  A')
    return {
      now
    }
  }
})
</script>

<style lang="less" scoped>
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 0.8em;
  margin-top: 36px;
  background-color: #f8f9fa;
  .el-link {
    font-size: 12px;
    margin-left: 6px;
  }
}
</style>
