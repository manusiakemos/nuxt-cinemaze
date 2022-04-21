<template>
  <div>
    <iframe
      class="w-full min-h-screen"
      allowfullscreen="true"
      :src="movie.iframe_link"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  name: "MovieFrame",
};
</script>
