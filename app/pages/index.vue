<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
const { data: home } = await useAsyncData(() => queryCollection("content").path(localePath("/")).first());
</script>

<template>
  <UContainer class="my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl">
    {{ t('LBL_HELLO') }}

    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </UContainer>
</template>