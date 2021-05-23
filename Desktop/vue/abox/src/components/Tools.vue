<template>
    <div>
        <button class="el-button"><i class="el-icon-sell"></i><br/><br/>工具借出</button>
        <button class="el-button"><i class="el-icon-sold-out"></i><br/><br/>工具归还</button>
        <button class="el-button"><i class="el-icon-notebook-2"></i><br/><br/>工具状态</button>
        <button class="el-button"><i class="el-icon-s-claim"></i><br/><br/>工具检查</button>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .el-footer .el-button {
        height: 50px;
        padding: 0 19% 0 19%;
        font-size: 3em;
        color:
        #fff;
    }
    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        top: 20%;
    }
    .el-button {
        width: 120px;
        height: 120px;
        font-size: 1.3em;
        font-weight: 500;
        margin: 10px;
    }
</style>
