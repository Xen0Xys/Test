<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";

const result = await useFetch("http://localhost:4000/version");
const version: VersionEntity = result.data.value;

console.log(version.version);
</script>
