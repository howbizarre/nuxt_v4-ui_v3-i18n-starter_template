<script setup lang="ts">
const i18nHead = useLocaleHead();
const { t } = useI18n();
const title = computed(() => t('TXT_BASE_TITLE'));

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead?.value?.htmlAttrs?.lang,
    dir: i18nHead?.value?.htmlAttrs?.dir
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title.value}` : `${title.value}`;
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
}));
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <UContainer class="my-3">
      <NavBar />

      <NuxtPage class="prose lg:prose-xl prose-zinc dark:prose-invert" />
    </UContainer>
  </UApp>
</template>
