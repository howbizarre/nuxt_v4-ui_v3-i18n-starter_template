<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
const thisPath = computed(() => localePath("/"));

const { data: page } = await useAsyncData(() => queryCollection("content").path(thisPath.value).first());

onMounted(async () => {
  page.value = await queryCollection("content").path(thisPath.value).first();
});

watch(thisPath, async () => {
  page.value = await queryCollection("content").path(thisPath.value).first();
});
</script>

<template>
  <UContainer class="my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl">
    {{ t('LBL_HELLO') }} {{ thisPath }}

    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </UContainer>
</template>