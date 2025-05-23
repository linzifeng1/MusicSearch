<script setup lang="ts">
const props = defineProps<{ type: string }>();
</script>
<template>
    <div class="tag" :class="{
        'tag-error': props.type === 'error',
        'tag-warning': props.type === 'warning',
        'tag-success': props.type === 'success',
    }">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.tag {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;

    &.tag-error {
        background-color: rgba(255, 82, 82, 0.1);
        color: #ff5252;
    }

    &.tag-success {
        background-color: rgba(76, 175, 80, 0.1);
        color: #4caf50;
    }

    &.tag-warning {
        background-color: rgba(255, 152, 0, 0.1);
        color: #ff9800;
    }

}
</style>