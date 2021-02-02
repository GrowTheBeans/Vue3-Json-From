<template>
  <div class="error_container">
    <h2>抱歉，页面无法访问…</h2>
    <el-button type="primary" round @click="onBtn">返回首页</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Error',
  setup() {
    const router = useRouter()
    const onBtn = () => {
      router.push('/')
    }
    return {
      onBtn
    }
  }
})
</script>

<style lang="less" scoped>
.error_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  h2 {
    font-size: 30px;
    font-weight: 500;
    color: #409eff;
    font-weight: Monospace;
  }
  :deep(.el-button) {
    margin-top: 60px;
    cursor: pointer;
  }
}
</style>
