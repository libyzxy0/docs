<script setup>
useSeoMeta({
  title: "Blog",
  ogTitle: "Blog",
  description: "Blog post libyzxy0",
  ogDescription: "Blog post libyzxy0",
  ogImage: "",
  twitterCard: "",
});
</script>
<template>
  <main>
    <Header />
    <ContentDoc class="markdown-body">
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <GithubEdit />
  </main>
</template>