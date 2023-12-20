<template>
  <div>
    <h2>Deals (pages/deals.vue)</h2>
    <div>Username: {{ auth?.username || "not-loggedin" }}</div>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
<script setup>
import { useAuth } from "~/composables/states";

definePageMeta({
  middleware: "auth"
});

const auth = useAuth();
console.log("auth:", auth.value);
</script>
