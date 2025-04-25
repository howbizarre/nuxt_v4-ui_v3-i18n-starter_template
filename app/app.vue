<script setup lang="ts">
const i18nHead = useLocaleHead();
const { t } = useI18n();
const title = t('TXT_BASE_TITLE');

useHead({
  htmlAttrs: {
    lang: i18nHead?.value?.htmlAttrs?.lang || 'en'
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${title}` : title
});
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage class="prose dark:prose-invert" />
    </NuxtLayout>
  </UApp>
</template>
