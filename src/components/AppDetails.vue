<script setup lang="ts">
import LinButton from './MyDesignComponents/Lin-Button.vue';
import LinCard from './MyDesignComponents/Lin-Card.vue';
// 模拟首页展示的用户数据
const appDetails = [
  {
    'title': '页面简洁',
    'subtitle': '软件整体页面设计简洁大方，观感舒适！',
    'imgUrl': 'https://ts1.tc.mm.bing.net/th/id/R-C.da52d4d9acc6c7001f14b8196ea31252?rik=KsFqSh8Aem8YxQ&riu=http%3a%2f%2fi.52desktop.cn%3a81%2fupimg%2fallimg%2f20120904%2f201294183110109778084.jpg&ehk=qIzilzYgZiLrFrs3oSXhUfuSvqgjl83MwuwuR6ylX6c%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    'title': '在线播放',
    'subtitle': '软件内音乐均支持在线播放，歌词展示！',
    'imgUrl': 'https://tse3-mm.cn.bing.net/th/id/OIP-C.cxed4QwRlZxDEzCuXwEa4wHaNK?rs=1&pid=ImgDetMain',
  },
  {
    'title': '无损下载',
    'subtitle': '软件内音乐支持无损下载，满足满足满足！',
    'imgUrl': 'https://wallpaperm.cmcm.com/7c2092019b25247a6e7e67cdcd8da5db.jpg',
  },
  {
    'title': '免费无广',
    'subtitle': '软件无任何形式的广告，放心使用！',
    'imgUrl': 'https://img-baofun.zhhainiao.com/fs/6fc46cefb7b776eac4d912345cc2b093.jpg',
  }
]

</script>
<template>
  <div class="app-container">
    <div class="app-info-container">
      <img class="app-icon" src="../images/logo.jpg" alt="">
      <h2>音乐搜索</h2>
      <span>将所有的烦恼都抛掷脑后</span>
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
  padding-top: 60px;
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
