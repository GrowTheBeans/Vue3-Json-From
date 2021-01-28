<template>
  <div class="schools_text_containers">
    <h2>热门院校</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SchoolsTextAlign'
})
</script>

<style lang="less" scoped>
.schools_text_containers {
  text-align: center;
  padding: 20px 200px;
  margin: 40px 0;
  background-color: rgb(255, 255, 255);
  h2 {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 22px;
    line-height: 1.35;
  }
}
</style>
