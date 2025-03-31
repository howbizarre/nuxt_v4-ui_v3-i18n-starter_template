<script lang="ts" setup>
const { t } = useI18n();
const { data: author } = await useAsyncData("larbish", () => queryCollection('authors').where("name", "=", "Baptiste Leproux").first());

useHead(() => ({
  title: t('LBL_INFO')
}));
</script>

<template>
  <UContainer class="my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl">
    {{ t('LBL_INFO') }}: <strong>{{ author?.name }}</strong>
  </UContainer>
</template>