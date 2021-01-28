<template>
  <GobalHeader :user="user" />
  <ColumnList :list="list" />
  <SchoolsTextAlign />
  <GobalFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import GobalHeader from '../components/GobalHeader.vue'
import SchoolsTextAlign from '../components/SchoolsTextAlign.vue'
import GobalFooter from '../components/GonalFooter.vue'
import { ColumnProps, UserProps } from '../components/InterColumn'
const testData: ColumnProps[] = [
  {
    id: 1,
    key: 0,
    title: 'test1的专栏',
    description: '这是tes1专栏，有一段非常有意思的见解'
  },
  {
    id: 2,
    key: 1,
    title: 'test2的专栏',
    description:
      '这是tes2专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 3,
    key: 2,
    title: 'test3的专栏',
    description: '这是tes3专栏，有一段非常有意思的见解这是tes3专栏，有一段非常有意思的见解有一段非常有意思的见解'
  },
  {
    id: 4,
    key: 3,
    title: 'test4的专栏',
    description:
      '这是tes4专栏，有一段非常有意思的见解这是tes4专栏，有一段非常有意思的见解这是tes4专栏，有一段非常有意思的见解这是tes4专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 5,
    key: 3,
    title: 'test5的专栏',
    description: '这是tes5专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 6,
    key: 3,
    title: 'test6的专栏',
    description: '这是tes6专栏，有一段非常有意思的见解'
  },
  {
    id: 7,
    key: 3,
    title: 'test7的专栏',
    description:
      '这是tes7专栏，有一段非常有意思的见解这是tes7专栏，有一段非常有意思的见解这是tes7专栏，有一段非常有意思的见解这是tes7专栏，有一段非常有意思的见解这是tes7专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解这是tes2专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 8,
    key: 3,
    title: 'test8的专栏',
    description: '这是tes8专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 9,
    key: 3,
    title: 'test9的专栏',
    description:
      '这是tes9专栏，有一段非常有意思的见解这是tes9专栏，有一段非常有意思的见解这是tes999专栏，有一段非常有意思的见解这是tes99999专栏，有一段非常有意思的见解这是tes9999999专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  },
  {
    id: 10,
    key: 3,
    title: 'test10的专栏',
    description: '这是tes10专栏，有一段非常有意思的见解'
  },
  {
    id: 11,
    key: 3,
    title: 'test10的专栏',
    description: '这是tes10专栏，有一段非常有意思的见解',
    avatar: require('../assets/logo.png')
  }
]
const userData: UserProps = {
  id: '001',
  name: '大粽子',
  isLogin: true
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GobalHeader,
    GobalFooter,
    SchoolsTextAlign
  },
  setup() {
    return {
      list: testData,
      user: userData
    }
  }
})
</script>

<style lang="less"></style>
