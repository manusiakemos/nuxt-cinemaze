<template>
  <client-only>
    <div>
      <div class="mt-0 pt-0 text-gray-100 text-2xl font-bold py-6">
        You may also like
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(v, i) in suggest" :key="`suggest-${i}`">
          <MovieCard :movie="v" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "Reccomendations",
  props: ["suggest"],
};
</script>
