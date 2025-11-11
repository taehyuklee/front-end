<script setup>
    import { reactive } from 'vue'
    import TimeSeries from '@/components/charts/TimeSeries.vue';

    const props = defineProps({
        isSidebarClosed: Boolean,
        isDark: Boolean
    });
        

</script>

<template>
    <div id="common_body">
    <div class="text">
        <div class="view_title">Time Series</div>
        
        <TimeSeries/>
        
    </div>
    </div>
</template>


<style scoped>
    .text {
        padding: 12px 60px;
    }

    .view_title {
        font-size: 20px;
    }
</style>
