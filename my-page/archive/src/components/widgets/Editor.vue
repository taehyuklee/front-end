<!-- quill- editor for vue3 -->
<script setup>
import {ref} from 'vue' 
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

const globalOptions = ref({
    debug: 'info',
    // modules: {
    // toolbar: ['bold', 'italic', 'underline']
    // },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow'
})


</script>

<template>

    <div>
        <quill-editor theme="snow" :options="globalOptions"></quill-editor>
    </div>

</template>

<style scoped>

:deep(.ql-editor) {
    height: 300px;
    max-height: 300px;
    overflow-y: auto;
}

</style>