<script setup>
import { ref } from 'vue';

import ForceLink from '../../components/function/ForceLink.vue';
// import UtilTable from '../../components/widgets/UtilTable.vue';

</script>

<template>

    <div class="text">
        <div class="fun"> Fun Link </div>
        <force-link></force-link>
        <!-- <util-table></util-table> -->
    </div>

</template>

<style scoped>
.text {
    padding: 12px 60px;
}

.fun {
    margin-bottom: 50px;
}
</style>
