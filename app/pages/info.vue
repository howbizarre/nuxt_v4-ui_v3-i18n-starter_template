<script lang="ts" setup>
const { t, locale } = useI18n();
const { data: authors } = await useAsyncData("larbishauthors", () => queryCollection('authors').all());

useHead(() => ({
  title: t('LBL_INFO')
}));
</script>

<template>
  <UContainer class="my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl">
    <p>{{ t('LBL_INFO') }}: {{ locale }}</p>

    <div v-for="author in authors" :key="author.id">
      <pre>{{ author.meta[locale] }}</pre>
      <br />
    </div>
</UContainer>
</template>
