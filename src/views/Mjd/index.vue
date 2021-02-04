<template>
  <div id="Mjd__container">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

<style lang="less">
@import "../../styles/var.less";

#Mjd__container {
  width: 100vw;
  height: 100vh;
  background: @jd__bg-blue;
  font-family: -apple-system, Helvetica, sans-serif;
}
</style>
