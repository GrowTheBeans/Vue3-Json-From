<template>
  <div>
    <router-link to="/">推荐</router-link>
    <router-link to="/recommend">歌手</router-link>
    <router-link to="/singer">排行</router-link>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
import {ref} from "vue"

export default {
  name: "Home",
  setup() {
    const sup = ref(10)
    return {
      sup
    }
  }
}
</script>

<style scoped>

</style>
