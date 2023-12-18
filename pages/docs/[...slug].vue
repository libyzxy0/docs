<script setup>
useSeoMeta({
  title: "Read the docs",
  ogTitle: "Read the docs",
  description: "This website is for documentation purposes.",
  ogDescription: "This website is for documentation purposes.",
  ogImage: "",
  twitterCard: "",
});
</script>
<template>
  <main>
    <ContentDoc class="md-style">
      <template #not-found>
        <div class="w-full h-screen flex items-center flex-col">
          <h1 class="text-[6rem] font-bold text-emerald-400 gfont-normal mt-[15rem]">404</h1>
          <p class="text-center gfont-code text-white font-medium text-xl">Document <b class="text-green-400">{{ $route.path.split('/')[2] + '.md' }}</b> not found.</p>
        </div>
      </template>
    </ContentDoc>
    <GithubEdit />
    <Footer />
  </main>
</template>