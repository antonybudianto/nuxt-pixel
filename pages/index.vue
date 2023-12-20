<template>
  <div>
    <h2>Home (pages/index.vue)</h2>
    <div>{{ $moment().format("YYYY-DD-MM") }}</div>
    <HelloInput />
    <NuxtLink to="/deals">Deals</NuxtLink>
    <br /><br />
    <MpButton @click="count++"
      >Mekari Pixel MpButton on Nuxt v3!!! counter:{{ count }}</MpButton
    >
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MpButton } from "@mekari/pixel";

const count = ref(0);
</script>
