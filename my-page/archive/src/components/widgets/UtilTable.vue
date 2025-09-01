<!-- Vuetify Table -->

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps({
    items: {
        type: [],   // 문자열
        required: true
    },
    headers: {
        type: [],
        required: true
    }
})

function onRowClick(event, row) {
    console.log('Row clicked:', row.item) // Vuetify는 row.item에 데이터 들어있음
    // 예: 라우터 이동
    router.push(`/detail/${row.item.id}`)
}

</script>

<template>
    <v-app class="app-auto">
        <v-data-table
            :headers="headers"
            :items="items"
            single-select
            show-select
            @click:row="onRowClick"
            class="elevation-1"
        />
    </v-app>
</template>

<style scoped>
.text {
    padding: 12px 60px;
}

:deep(.v-data-table tbody tr) {
    cursor: pointer;
}

:deep(.v-data-table tbody tr:hover) {
    background-color: #f0f8ff;
}

.app-auto {
    min-height: 0;          /* 화면 전체를 덮지 않음 */
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    height: 100vh;
}

</style>
