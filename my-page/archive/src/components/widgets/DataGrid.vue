<!-- vue good table next -->
<script setup>
import { ref } from 'vue';

// 컬럼 정의를 ref로 감싸기
const columns = ref([
    {
        label: 'Name',
        field: 'name',
    },
    {
        label: 'Age',
        field: 'age',
        type: 'number',
    },
    {
        label: 'Created On',
        field: 'createdAt',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
    },
    {
        label: 'Percent',
        field: 'score',
        type: 'percentage',
    },
]);

// 행 데이터도 ref로 감싸기
const rows = ref([
    { id: 1, name: "John", age: 20, createdAt: '', score: 0.03343 },
    { id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
    { id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
    { id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
    { id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
    { id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
]);
</script>

<template>

<div class="text">
    <vue-good-table
        :columns="columns"
        :rows="rows"
        :line-numbers="true"
        v-on:row-mouseenter="onRowMouseover"
        />
</div>
</template>

<style scoped>
.text {
    padding: 12px 60px;
}
</style>


