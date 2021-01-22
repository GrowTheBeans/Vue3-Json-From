<template>
  <ColumnList :list='list'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是tes1专栏，有一段非常有意思的见解',
    avatar: ''
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是tes2专栏，有一段非常有意思的见解',
    avatar: ''
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style lang="less">
</style>
