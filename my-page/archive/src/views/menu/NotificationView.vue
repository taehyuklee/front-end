<script setup>
import QuillEditor from '@/components/widgets/Editor.vue'
import './common.css'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name)

</script>

<template>

    <div>

        <div id="notification_body">

            <quill-editor></quill-editor>


        </div>
    </div>

</template>

<style scoped>

</style>