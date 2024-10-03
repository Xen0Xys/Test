<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type {VersionEntity} from "../server/src/common/models/entities/version.entity.js";

const result = await useFetch("https://api.test.coolify.dotslash.fr/version");
const version: VersionEntity = result.data.value;

if(version)
    console.log(version.version);
else
    console.log(result.error.value);
</script>
