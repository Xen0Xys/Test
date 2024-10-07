<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";
const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig.public.apiUrl);

const result = await useFetch(runtimeConfig.public.apiUrl + "/version");
const version: VersionEntity = result.data.value;

if(version)
    console.log(version.version);
else
    console.log(result.error.value);
</script>
