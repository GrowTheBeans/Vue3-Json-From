<template>
  <div>
    <i class="iconfont icon-shangjia"></i>
    <i class="iconfont icon-shouhuoxinxi"></i>
    <van-button type="primary" block @click="onMjd">调整移动端京东app</van-button>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "Mine",
  setup() {
    const router = useRouter()
    const onMjd = () => {
      router.push('/mjd')
    }
    return {
      onMjd
    }
  }
})
</script>

<style scoped></style>
