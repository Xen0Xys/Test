<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";

const result = await useFetch("http://localhost:4000/version");
const version: VersionEntity = result.data.value;

if(version)
    console.log(version.version);
else
    console.log(result.error);
</script>
