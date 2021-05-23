<template>
    <el-card>
        <div class="pic">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="90"></el-avatar>
        </div>
        <div class="imformation">
            <span class="username">username</span>
            <br>
            <span class="account">account</span>
        </div>
    </el-card>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.el-avatar {
    margin: 0 0 20px 10px;
}
.pic {
    float: left;
}
.imformation {
    padding: 7% 0 7% 40%;
}
.username {
    font-size: 2.5rem;
}
.account {
    font-size: 1.8rem;
    font-weight: 100;
}
</style>
