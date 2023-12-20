<template>
  <ClientOnly>
    <ThemeProvider>
      <div style="border: 1px solid green; padding: 12px 15px">
        LayoutDefault:
        <slot />
      </div>
    </ThemeProvider>
  </ClientOnly>
</template>
<script setup>
import { ThemeProvider } from "@mekari/pixel";
</script>
