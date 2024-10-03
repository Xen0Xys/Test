<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";

console.log("API URL :", process.env.API_URL + "/version");
const result = await useFetch(process.env.API_URL + "/version");
console.log("Result :", result);
const version: VersionEntity = result.data.value;
console.log("Version :", version);

if(version)
    console.log(version.version);
else
    console.log(result.error.value);
</script>
