<script setup lang="ts">
import LinNavbar from '../components/MyDesignComponents/Lin-Navbar.vue';
</script>
<template>
  <div class="container">
    <LinNavbar class="navbar">
      <template #left>
        <div class="nav-logo">
          <img class="nav-logo-icon" src="../images/logo.jpg">
          <span class="nav-title">音乐搜索</span>
        </div>
      </template>
      <template #subnav>
        <div class="nav-subnav">
          <nav class="top-nav">
            <router-link to="/appDetail" class="top-nav-item" active-class="active">首页</router-link>
            <router-link to="/conversation" class="top-nav-item" active-class="active">交流群</router-link>
            <router-link to="/feedback" class="top-nav-item" active-class="active">问题反馈</router-link>
            <router-link to="/update" class="top-nav-item" active-class="active">更新日志</router-link>
            <router-link to="/donation" class="top-nav-item" active-class="active">捐赠列表</router-link>
          </nav>
        </div>
      </template>
      <template #right>
        <div class="nav-right">
          <img class="github-icon nav-icon" src="../images/icon-github.png">
        </div>
      </template>
    </LinNavbar>
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <div class="footer">
      <span class="copyright">2024-2025©音乐搜索 Power By 林峰</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}

.navbar {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;

  // 导航栏左侧logo
  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;


    .nav-logo-icon {
      width: 30px;
      height: 30px;
    }

    .nav-title {
      margin-left: 5px;
      font-weight: 700;
    }
  }

  // 导航栏导航条内容 --- 仅电脑端展示
  .nav-subnav {
    display: flex;
    align-items: center;
    height: 100%;
    background: transparent;
    padding-left: 20px;
    padding-right: 20px;

    .top-nav {
      display: flex;
      gap: 18px;
      height: 40px;
      align-items: center;
      padding: 0 18px;
    }

    .top-nav-item {
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0 16px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      border-radius: 16px;
      transition: background 0.2s, color 0.2s;
      cursor: pointer;

      &:hover,
      &.active {
        background: #4285f4;
        color: #fff;
      }
    }
  }

  // 检测屏幕宽度判断是否为手机屏幕
  @media (max-width: 768px) {
    .nav-subnav {
      display: none;
    }
  }

  // 导航栏右侧内容
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .nav-icon {
      display: flex;
      margin: 5px;
      width: 25px;
      height: 25px;
    }
  }

}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  .copyright {
    font-size: 0.8rem;
  }
}

// 页面切换动画css样式
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
