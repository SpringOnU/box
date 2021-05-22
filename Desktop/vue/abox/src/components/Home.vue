<template>
    <el-container>
        <el-header>欢迎使用 航空维修设备携行箱借还应用</el-header>
        <el-main>
            <button class="el-button"><i class="el-icon-sell"></i><br/><br/>工具借出</button>
            <button class="el-button"><i class="el-icon-sold-out"></i><br/><br/>工具归还</button>
            <button class="el-button"><i class="el-icon-notebook-2"></i><br/><br/>工具状态</button>
            <button class="el-button"><i class="el-icon-s-claim"></i><br/><br/>工具检查</button>
        </el-main>
        <el-footer>
            <a><el-button type="text" @click="tools"><i class="el-icon-setting"></i></el-button></a>
            <el-divider direction="vertical"></el-divider>
            <a><el-button type="text"><i class="el-icon-user"></i></el-button></a>
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
      console.log(123)
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
    .el-main {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }
    .el-main .el-button {
        width: 120px;
        height: 120px;
        font-size: 1.3em;
        font-weight: 500;
        margin: 10px;
    }
    .el-footer {
        background-color: rgb(160,207,255);
        padding: 7px;
    }
    .el-card {
        padding: 10px;
        margin: 20px;
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
    .active {
        background-color: red;
    }
</style>
