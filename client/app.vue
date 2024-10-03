<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";
const runtimeConfig = useRuntimeConfig();

console.log("API URL :", runtimeConfig.public.apiUrl + "/version");
const result = await useFetch(runtimeConfig.public.apiUrl + "/version");
console.log("Result :", result);
const version: VersionEntity = result.data.value;
console.log("Version :", version);

if(version)
    console.log(version.version);
else
    console.log(result.error.value);
</script>
