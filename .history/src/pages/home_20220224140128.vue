<template>
<div class="container">
    home
</div>
</template>

<script setup>
import {ref} from 'vue'
let menu_data = ref([
    {'index': '/', 'name': '字符串脱敏', 'icon': 'el-icon-menu'},
    {'index': '/string','name': '数值', 'icon': 'el-icon-menu'}
])
let active_index = ref('2')
const handleSelect = (key, keyPath) => {
    active_index.value = key
}

</script>

<style lang="scss" scoped>
@import '../common/mixin.scss';

</style>
