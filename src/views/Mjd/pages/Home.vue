<template>
  <div class="home">
    <div class="wrapper">
      <nav>2</nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Home"
})
</script>

<style scoped lang="less">
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5em;
  right: 0;
  padding: 0 .18em;
  background: url("../../../assets/jd/jd_floor.jpg") no-repeat top center;
  background-size: 100% 30%;

  nav {
    background: #fff;
  }
}


</style>
