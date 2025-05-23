<script setup lang="ts">
import LinUpdate from '@/components/MyDesignComponents/Lin-Update.vue';

const updateLog = [
  {
    version: 'v1.0.0',
    date: '2025-03-18',
    importent: '',
    normal: '稳定版',
    littie: '',
    details: [
      '音乐搜索正式版发布！',
    ]
  },
  {
    version: 'v1.1.0',
    date: '2025-03-20',
    importent: '',
    normal: '稳定版',
    littie: '',
    details: [
      '【修复】歌词界面会透过点到音乐列表的问题。',
      '【修复】下载完成音乐点击打开会闪退的问题。',
      '【修复】歌词界面下滑时会闪退的问题。',
      '【修复】未播放音乐点击切换歌曲按钮闪退问题。'
    ]
  },
  {
    version: 'v1.2.0',
    date: '2025-03-21',
    importent: '',
    normal: '稳定版',
    littie: '',
    details: [
      '【新增】绑定歌单功能（仅支持酷我）。',
      '【新增】完善播放形式（单曲循环、随机播放、顺序播放）。',
    ]
  },
  {
    version: 'v1.3.0',
    date: '2025-03-22',
    importent: '',
    normal: '稳定版',
    littie: '',
    details: [
      '【修复】软件关闭但播放仍继续的问题。',
    ]
  }
].reverse()

</script>

<template>
  <div class="update-container">
    <LinUpdate :update-log="updateLog" />
  </div>
</template>

<style scoped lang="scss">
.update-container {
  display: flex;
  width: 100%;
  padding: 40px;
}
</style>