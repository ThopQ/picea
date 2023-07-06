<script setup lang="ts">
import { ref } from "vue";
import PCard from "./../src/components/PCard.vue";
import PButton from "../src/components/PButton.vue";

const loading = ref(false);
</script>

<template>
  <div class="container mx-auto px-1 py-16 sm:px-0">
    <PCard horizontal>
      <template #media>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          class="place-content-stretch sm:mb-7 sm:rounded-md md:max-w-xs"
        />
      </template>
      <template #title>
        <h3>Das ist eine Testkarte</h3>
      </template>
      <template #body>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          consectetur iusto amet est beatae illo doloremque inventore, mollitia
          aperiam adipisci exercitationem dolorum laudantium ad voluptatum
        </p>
      </template>
      <template #actions>
        <PButton @click="loading = !loading" :loading="loading">
          Save the Date!
        </PButton>
      </template>
    </PCard>
  </div>
</template>
