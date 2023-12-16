<template>
  <div class="edit-page">
    <IconsEdit />
    <a
      :href="
        'https://github.com/libyzxy0/shoti/tree/main/content' +
        ($route.path == '/docs' ? '/docs/index' : $route.path) +
        '.md'
      "
      class="link-edit"
      >Edit this page on github</a
    >
  </div>
</template>