<script setup lang="ts">

import {NoixButton} from "@";
import NoixPasswordInput from "@/components/NoixPasswordInput.vue";
import {ref} from "vue";

const passwordInputModel = ref();


</script>
<template>
  <h3>Hello Noix</h3>

  <h3 class="text-3xl">Hello World</h3>

  <NoixButton>Default</NoixButton>
  <NoixButton variant="secondary">Secondary</NoixButton>
  <NoixButton variant="danger">Danger</NoixButton>

  <NoixButton :loading="true">Default</NoixButton>
  <NoixButton variant="secondary" :loading="true">Secondary</NoixButton>
  <NoixButton variant="danger" :loading="true">Danger</NoixButton>

  <NoixPasswordInput label="" v-model="passwordInputModel" />


</template>

<style scoped>

</style>