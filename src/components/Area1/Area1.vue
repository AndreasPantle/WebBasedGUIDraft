<template>
  <div>
    <v-container>
      <h1>Area 1</h1>
      <v-img
        :src="placeholder_image"
        :width="600"
        alt="Area 1 Image"
        class="mt-4 mb-4"
      />
    </v-container>
  </div>
</template>

<script>
/* Images */
import placeholder_image from "@assets/images/600x400.svg";

export default {
  name: 'Area1',
  setup() {
    return {
      placeholder_image,
    };
  },
};
</script>

<style scoped></style>
