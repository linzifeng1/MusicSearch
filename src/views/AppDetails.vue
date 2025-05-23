<script setup lang="ts">
import LinButton from '../components/MyDesignComponents/Lin-Button.vue';
import LinCard from '../components/MyDesignComponents/Lin-Card.vue';
import imgOne from '../images/img-one.png';
import imgTwo from '../images/img-two.jpg';
import imgThree from '../images/img-three.jpg';
import imgFour from '../images/img-four.jpg';
// 模拟首页展示的用户数据
const appDetails = [
  {
    'title': '页面简洁',
    'subtitle': '软件整体页面设计简洁，拒绝一切花里胡哨，简约而不简单！',
    'imgUrl': imgOne,
  },
  {
    'title': '在线播放',
    'subtitle': '软件内音乐均支持在线播放，歌词展示，播放流畅，是你的第一选择！',
    'imgUrl': imgTwo,
  },
  {
    'title': '无损下载',
    'subtitle': '软件内音乐支持无损下载，好听的音乐不该止步于此，满足满足满足！',
    'imgUrl': imgThree,
  },
  {
    'title': '免费无广',
    'subtitle': '软件无任何形式的广告，拒绝广告，给用户更好的使用提要！',
    'imgUrl': imgFour,
  }
]

</script>
<template>
  <div class="app-container">
    <div class="app-info-container">
      <img class="app-icon" src="../images/logo.jpg" alt="">
      <h2>音乐搜索</h2>
      <span>将所有的不开心都抛掷脑后</span>
      <div class="button-group">
        <LinButton>本地下载</LinButton>
        <LinButton>网盘下载</LinButton>
      </div>
    </div>
    <div class="app-desc-container">
      <LinCard v-for="(item, index) in appDetails"
        :key="index"
        class="app-card"
        :img-url="item.imgUrl">
        <template #title>{{ item.title }}</template>
        <template #subtitle>{{ item.subtitle }}</template>
      </LinCard>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 100px;
}

.app-info-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .app-icon {
    width: 5rem;
    height: 5rem;
  }

  .button-group {
    display: flex;
    margin-top: 20px;
    gap: 16px;
  }
}

.app-desc-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px 0 100px 0;
}

// 检测屏幕宽度判断是否为手机屏幕
@media (max-width: 768px) {
  .app-desc-container {
    flex-direction: column;
    height: auto;
    padding: 30px;

    .app-card {
      width: 100%;
    }
  }
}
</style>
