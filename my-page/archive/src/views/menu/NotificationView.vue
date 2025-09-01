<script setup>
import QuillEditor from '@/components/widgets/Editor.vue'
import DataGrid from '@/components/widgets/DataGrid.vue'
import UtilTable from '@/components/widgets/UtilTable.vue'
import './common.css'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name)

const items = [
    {
        name: 'African Elephant',
        species: 'Loxodonta africana',
        diet: 'Herbivore',
        habitat: 'Savanna, Forests',
    },
    {
        name: 'African Elephant',
        species: 'Loxodonta africana',
        diet: 'Herbivore',
        habitat: 'Savanna, Forests',
    },
]


</script>

<template>

    <div id="notification_body">
        <div class="text">
            <div>News</div>
            <!-- <data-grid></data-grid> -->
            <util-table
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