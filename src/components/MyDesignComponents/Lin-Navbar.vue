<script setup lang="ts"></script>
<template>
    <div class="navbar-container">
        <div class="left-content">
            <slot name="left"></slot>
        </div>
        <div class="navbar-subnav">
            <slot name="subnav"></slot>
        </div>
        <div class="right-content">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.navbar-container {
    display: flex;
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .05);
    background-color: #fff;
    // border-bottom-left-radius: 20px;
    // border-bottom-right-radius: 20px;

    .left-content {
        display: flex;
        height: 100%;
    }

    .navbar-subnav {
        margin-left: 20px;
        height: 100%;
    }

    // 使左侧内容靠左，右侧内容靠右，auto 表示自动分配剩余空间，即右侧内容会占据剩余的所有空

    .right-content {
        margin-left: auto;
        height: 100%;
    }
}
</style>