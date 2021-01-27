<template>
  <el-header>
    <el-row>
      <el-col :span="2" class="tl">
        <div class="grid-content">LOGO</div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content">
          <el-menu mode="horizontal" text-color="#fffef9" active-text-color="#11264f">
            <el-menu-item>高考动态</el-menu-item>
            <el-menu-item>查大学</el-menu-item>
            <el-menu-item>查专业</el-menu-item>
            <el-menu-item>段次线</el-menu-item>
            <el-tag type="success" hit>开始写文章</el-tag>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="3">
        <div v-if="HeaderLogin">
          <el-button size="small" plain @click="onLogin">登录</el-button>
          <el-button size="small" type="primary" plain @click="onSignup">注册</el-button>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ HeaderName }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <i class="el-icon-collection"></i>
                新建文章
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-cpu"></i>
                编辑资料
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="el-icon-setting"></i>
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'GobalHeader',
  props: {},
  setup() {
    const HeaderName = ref('粽子')
    const HeaderLogin = ref(true)
    const router = useRouter()
    const onLogin = () => {
      router.push('/login')
    }
    const onSignup = () => {
      router.push('/signup')
    }
    return {
      onLogin,
      onSignup,
      HeaderName,
      HeaderLogin
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
.el-menu {
  color: #fff;
  background-color: #0d6efd;
}
.el-menu-item {
  color: #fff;
  border: none;
}
.el-tag {
  cursor: pointer;
  color: #0d6efd;
  border: none;
}
:deep(.tl) {
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
