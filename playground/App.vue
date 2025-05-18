<script setup lang="ts">

import NoixButton from "@/components/NoixButton.vue";
</script>

<template>
  <h3>Hello Noix</h3>

  <NoixButton>Default</NoixButton>
  <NoixButton variant="secondary">Secondary</NoixButton>
  <NoixButton variant="danger">Danger</NoixButton>

  <NoixButton :loading="true">Default</NoixButton>
  <NoixButton variant="secondary" :loading="true">Secondary</NoixButton>
  <NoixButton variant="danger" :loading="true">Danger</NoixButton>
</template>

<style scoped>

</style>