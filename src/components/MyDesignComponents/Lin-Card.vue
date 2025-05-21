<script setup lang="ts">
const props = defineProps<{ imgUrl: string }>();
</script>
<template>
    <div class="card-container">
        <div class="card-image">
            <img class="image"
                :src="props.imgUrl"
                alt="">
        </div>
        <div class="card-content">
            <span class="card-title">
                <slot name="title"></slot>
            </span>
            <span class="card-subtitle">
                <slot name="subtitle"></slot>
            </span>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 250px;
    height: 300px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .05);
    border-radius: 20px;
    transition:
        box-shadow 0.3s cubic-bezier(.4, 0, .2, 1),
        transform 0.3s cubic-bezier(.4, 0, .2, 1);

    &:hover {
        box-shadow: none;
        transform: translateY(12px);

        .card-image .image {
            transform: scale(1.08);
        }
    }

    .card-image {
        display: flex;
        width: 100%;
        height: 70%;
        border-radius: 20px;
        overflow: hidden; // 防止图片放大后溢出

        .image {
            display: flex;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
        }
    }

    .card-content {
        display: flex;
        flex-direction: column;
        padding: 10px;

        .card-subtitle {
            font-size: 0.8rem;
            opacity: 0.8;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
        }
    }
}
</style>