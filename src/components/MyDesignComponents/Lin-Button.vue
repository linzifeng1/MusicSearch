<template>
    <button>
        <!-- 这里使用插槽占用组件字符 -->
        <slot />
    </button>
</template>
<style lang="scss" scoped>
button {
    background: #fff;
    border: 2px solid #e3eafc;
    border-radius: 24px;
    box-shadow: 0 2px 8px rgba(60, 64, 67, 0.08);
    color: #333;
    font-size: 15px;
    font-weight: 500;
    font-family: inherit;
    letter-spacing: .25px;
    line-height: normal;
    padding: 12px 32px;
    cursor: pointer;
    transition:
        box-shadow 0.25s cubic-bezier(.4, 0, .2, 1),
        transform 0.18s cubic-bezier(.4, 0, .2, 1),
        color 0.18s cubic-bezier(.4, 0, .2, 1),
        background 0.18s cubic-bezier(.4, 0, .2, 1),
        border-color 0.18s cubic-bezier(.4, 0, .2, 1);

    &:hover,
    &:focus-visible {
        background: #4285f4;
        color: #fff;
        border-color: #4285f4;
        box-shadow: 0 6px 24px rgba(66, 133, 244, 0.18);
        transform: translateY(-2px) scale(1.04);
    }

    &:active {
        background: #1a73e8;
        color: #fff;
        border-color: #1a73e8;
        box-shadow: 0 2px 8px rgba(66, 133, 244, 0.13);
        transform: scale(0.98);
    }
}
</style>