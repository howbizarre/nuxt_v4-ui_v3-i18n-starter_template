<script lang="ts" setup>
const localePath = useLocalePath();
const thisPath = computed(() => localePath("/"));

const { data: page } = await useAsyncData(() => queryCollection("content").path('/pages' + thisPath.value).first());

watch(thisPath, async () => {
  page.value = await queryCollection("content").path('/pages' + thisPath.value).first();
});
</script>

<template>
  <UContainer class="my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl">
    <ContentRenderer v-if="page" :value="page" />

    <div v-else class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </UContainer>
</template>