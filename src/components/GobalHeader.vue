<template>
  <el-header>
    <el-row>
      <el-col :span="2" class="tl">
        <div class="grid-content">LOGO</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="4">
        <el-button size="small" plain @click="onLogin">登录</el-button>
        <el-button size="small" type="primary" plain @click="onSignup">注册</el-button>
        <!-- <el-dropdown> -->
          <!-- <span class="el-dropdown-link"> -->
            <!-- 粽子 -->
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          <!-- </span> -->
          <!-- <template #dropdown> -->
            <!-- <el-dropdown-menu> -->
              <!-- <el-dropdown-item> -->
                <!-- <i class="el-icon-collection"></i> -->
                <!-- 新建文章 -->
              <!-- </el-dropdown-item> -->
              <!-- <el-dropdown-item> -->
              <!-- <i class="el-icon-cpu"></i> -->
                <!-- 编辑资料 -->
              <!-- </el-dropdown-item> -->
              <!-- <el-dropdown-item divided> -->
                <!-- <i class="el-icon-setting"></i> -->
                <!-- 退出 -->
              <!-- </el-dropdown-item> -->
            <!-- </el-dropdown-menu> -->
          <!-- </template> -->
        <!-- </el-dropdown> -->
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'GobalHeader',
  props: {},
  setup () {
    const router = useRouter()
    const onLogin = () => {
      router.push('/login')
    }
    const onSignup = () => {
      router.push('/signup')
    }
    return {
      onLogin,
      onSignup
    }
  }
})
</script>

<style lang="less" scoped>
.el-header {
  background-color: #0d6efd;
  color: #212529;
  height: 60px;
  line-height: 60px;
}
.el-col {
  text-align: right;
}
:deep(.tl){
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
</style>
