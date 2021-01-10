<template>
  <div>
    首页 {{sup}}
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
