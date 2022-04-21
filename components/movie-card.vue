<template>
  <client-only>
    <router-link :to="`/movies/${movie.movie_id}`">
    <div
      class="
        relative
        rounded-lg
        overflow-clip
        bg-cover bg-center
        w-full
        aspect-[9/14]
        shadow-lg shadow-warning-100/30
        hover:shadow-primary-500/70
      "
      :style="`background-image: url('${movie.poster}');`"
    >
      <div
        class="
          absolute
          inset-0
          w-full
          py-2
          px-4
          flex
          items-center
          justify-center
          flex-col
          backdrop-filter backdrop-sepia-0
          bg-gradient-to-t
          from-black/70
          hover:from-black/30
          h-full
          cursor-pointer
        "
      >
        <div class="absolute bottom-0 px-4 py-3">
          <div class="font-normal text-sm tracking-wider text-gray-100">
            {{ movie.title }}
          </div>
        </div>
        <div
          class="
            bg-yellow-300
            text-yellow-700
            rounded-bl-xl
            font-semibold
            tracking-wider
            uppercase
            text-sm
            absolute
            right-0
            top-0
            px-2
            py-2
          "
        >
          {{ movie.imdb }}
        </div>
      </div>
    </div>
  </router-link>
  </client-only>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
