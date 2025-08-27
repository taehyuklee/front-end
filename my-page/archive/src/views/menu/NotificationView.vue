<script setup>
import QuillEditor from '@/components/widgets/Editor.vue'
import './common.css'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name)

</script>

<template>

    <div id="notification_body">
        <div class="text">

            <quill-editor></quill-editor>

        </div>
    </div>

</template>

<style scoped>
    .text {
        padding: 12px 60px;
    /* padding: 12px 60px; */ /* 원래 이거임 */
    }
</style>