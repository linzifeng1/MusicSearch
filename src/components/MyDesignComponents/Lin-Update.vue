<script setup lang="ts">
import LinTag from './Lin-Tag.vue';

/**
 * @author 林峰
 * @description 更新列表组件 --- 整体组件非item
 * @date 2025-05-22
 */

// 定义更新日志项的接口
interface UpdateLogItem {
    version: string;
    date: string;
    importent: string;
    normal: string;
    littie: string;
    details: string[];
}

defineProps<{ updateLog: UpdateLogItem[]}>();



</script>
<template>
    <div class="lin-up-container">
        <div class="lin-up-header">
            <h1 class="lin-up-title">更新日志</h1>
            <span class="lin-up-subtitle">记录每一次进步与成长</span>
            <!-- 版本统计信息 -->
            <div class="lin-up-total-container">
                <div class="up-total-item-container">
                    <span class="uptimes total-text">{{ updateLog.length }}</span>
                    <span>版本更新</span>
                </div>
                <div class="up-total-item-container">
                    <span class="upyears total-text">1</span>
                    <span>年度迭代</span>
                </div>
                <div class="up-total-item-container">
                    <span class="latest-version total-text">{{ updateLog[0].version }}</span>
                    <span>最新版本</span>
                </div>
            </div>
        </div>
        <div class="lin-up-content">
            <div class="lin-up-item" v-for="(item, index) in updateLog" :key="index">
                <div class="version-badge" :class="{ 'latest-badge': index == 0 }">
                    {{ item.version }}
                    <span class="latest-tag" v-if="index == 0">最新</span>
                </div>
                <!-- 中间分割线 -->
                <div class="divide-line"></div>
                <!-- 版本内容 -->
                <div class="update-content" :class="{ 'latest-content': index == 0 }">
                    <!-- 内容头部 -->
                    <div class="update-header">
                        <div class="version-info">
                            <h2 class="version-title">{{ item.version }}</h2>
                            <span class="update-date">{{ item.date }}</span>
                        </div>
                    </div>
                    <!-- 内容详情 -->
                    <div class="version-details">
                        <!-- 版本标签 -->
                        <div class="version-tags">
                            <LinTag type="error" v-if="item.importent !== ''">{{ item.importent }}</LinTag>
                            <LinTag type="success" v-if="item.normal !== ''">{{ item.normal }}</LinTag>
                            <LinTag type="warning" v-if="item.littie !== ''">{{ item.littie }}</LinTag>
                        </div>
                        <!-- 更新内容 -->
                        <div class="update-details">
                            <h3>更新内容</h3>
                            <ul>
                                <li v-for="(dItem, index) in item.details" :key="index" :class="['detail-item', dItem.toLowerCase().includes('【修复】') ? 'fix-item' :
                                    dItem.toLowerCase().includes('【新增】') ? 'new-item' :
                                        dItem.toLowerCase().includes('【优化】') ? 'optimize-item' : '']">
                                    {{ dItem }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.lin-up-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .lin-up-header {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        .lin-up-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: black;
        }

        .lin-up-subtitle {
            font-size: 1rem;
        }

        .lin-up-total-container {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;

            .up-total-item-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;

                .total-text {
                    font-size: 2.2rem;
                    font-weight: bold;
                    color: #4285f4;
                }
            }
        }
    }

    .lin-up-content {
        display: flex;
        flex-direction: column;
        width: 80%;

        .lin-up-item {
            display: flex;
            width: 100%;

            // 左侧标签样式
            .version-badge {
                position: relative;
                display: flex;
                min-width: 100px;
                height: 36px;
                background: #f0f0f0;
                border-radius: 18px;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                font-size: 0.9rem;
                color: #555;

                // 最近一个条目的样式 --- 否则为默认灰色样式
                &.latest-badge {
                    background: #4285f4;
                    color: white;
                    box-shadow: 0 3px 10px rgba(66, 133, 244, 0.3);
                }

                .latest-tag {
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background: #ff5252;
                    color: white;
                    font-size: 0.7rem;
                    padding: 2px 8px;
                    border-radius: 10px;
                    font-weight: 500;
                    box-shadow: 0 2px 5px rgba(255, 82, 82, 0.3);
                }
            }

            // 中间分割线样式
            .divide-line {
                display: flex;
                width: 2px;
                height: 100%;
                background: #e0e0e0;
                margin: 0 20px 0 20px;
            }

            // 右侧更新详情
            .update-content {
                margin-bottom: 20px;
                flex: 1;
                background: #f9f9f9;
                border-radius: 12px;
                padding: 24px;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
                width: calc(100% - 140px);
                transition: box-shadow 0.3s ease;

                // 最新条目的更新内容背景样式
                &.latest-content {
                    background: rgba(66, 133, 244, 0.05);
                    border: 1px solid rgba(66, 133, 244, 0.2);
                }

                &:hover {
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                }

                .update-header {
                    .version-title {
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: #333;
                        margin: 0;
                    }

                    .update-date {
                        font-size: 0.9rem;
                        color: #888;
                    }
                }

                .version-details {
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;

                    .version-tags {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-bottom: 20px;
                    }

                    .update-details {

                        h3 {
                            font-size: 1.1rem;
                            font-weight: 600;
                            color: #444;
                            margin-bottom: 12px;
                            position: relative;
                            padding-left: 16px;

                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 4px;
                                height: 16px;
                                background: #4285f4;
                                border-radius: 2px;
                            }
                        }

                        ul {
                            list-style: none;
                            padding: 0;
                            margin: 0;

                            .detail-item {
                                position: relative;
                                padding-left: 20px;
                                margin-bottom: 12px;
                                line-height: 1.5;
                                color: #555;
                                transition: transform 0.2s;

                                &:hover {
                                    transform: translateX(3px);
                                }

                                &::before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 10px;
                                    width: 6px;
                                    height: 6px;
                                    border-radius: 50%;
                                    background: #4285f4;
                                }
                            }

                            /* 根据内容类型设置不同样式 */
                            .fix-item::before {
                                background: #ff9800;
                            }

                            .new-item::before {
                                background: #4caf50;
                            }

                            .optimize-item::before {
                                background: #9c27b0;
                            }
                        }
                    }
                }

            }
        }
    }
}
</style>