<template>
    <el-container>
        <el-header>欢迎使用 航空维修设备携行箱借还应用</el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <a><el-button type="text" @click="tools"><i class="el-icon-setting"></i></el-button></a>
            <el-divider direction="vertical"></el-divider>
            <a><el-button type="text" @click="user"><i class="el-icon-user"></i></el-button></a>
        </el-footer>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    tools () {
      this.$router.push('/tools')
    },
    user () {
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less" scoped>
// scoped 只在当前组件内生效
    .el-container {
        height: 736px;
        width: 414px;
        background-color: rgb(236,245,255);
    }
    .el-header {
        background-color: rgb(160,207,255);
        color: #fff;
        text-align: center;
        line-height: 60px;
        font-size: 1.5em;
        font-weight: 800;
    }
    .el-footer {
        background-color: rgb(160,207,255);
        padding: 7px;
    }
    .el-divider {
        height: 30px;
    }
    .el-footer .el-button {
        height: 50px;
        padding: 0 19% 0 19%;
        font-size: 3em;
        color:#fff;
    }
</style>
