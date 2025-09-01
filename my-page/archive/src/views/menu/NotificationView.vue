<script setup>
import QuillEditor from '@/components/widgets/Editor.vue'
import DataGrid from '@/components/widgets/DataGrid.vue'
import UtilTable from '@/components/widgets/UtilTable.vue'
import './common.css'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name)

const headers = [
    {
        title: 'name',
        key: 'name'
    },
    {
        title: 'description',
        key: 'description',
        // width: '800px'
    }
]

const items = [
    {
        id: '1',
        name: 'Data Analysis APIs',
        description: 'New Open for my data analysis APIs',
    },
    {
        id: '2',
        name: 'etc APIs',
        description: 'the way to get a token for APIs',
    },
]


</script>

<template>

    <div id="notification_body">
        <div class="text">
            <div>News</div>
            <!-- <data-grid></data-grid> -->
            <util-table
                :headers="headers"
                :items="items"></util-table>
            <!-- <quill-editor></quill-editor> -->

        </div>
    </div>

</template>

<style scoped>
    .text {
        padding: 12px 60px;
    /* padding: 12px 60px; */ /* 원래 이거임 */
    }
</style>