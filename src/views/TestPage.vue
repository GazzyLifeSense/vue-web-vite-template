<script setup lang="ts">
import { throttle, debounced } from '@/utils';

const throttleFunction = throttle(()=>{console.log(1)}, 1000)
const debouncedFunction = debounced(()=>{console.log(2)}, 1000)
</script>

<template>
    <div>
        <button @click="throttleFunction()">throttle</button>
        <button @click="debouncedFunction()">debounced</button>
    </div>
</template>

