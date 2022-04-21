<template>
  <LayoutsGuest>
    <div class="container mx-auto" v-if="data">
      <div class="container mx-auto py-6 px-3 md:px-0">
        <div v-if="$store.state.auth.loggedIn" class="py-6">
          <MovieFrame :movie="data.movie"></MovieFrame>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:col-span-7">
            <MovieDetailCard :movie="data.movie" />
          </div>
          <div class="col-span-12 lg:col-span-5">
            <Recommendations :suggest="data.suggest" />
          </div>
        </div>
      </div>
    </div>
  </LayoutsGuest>
</template>

<script>
import MovieDetailCard from "@/components/movies/movie-detail-card.vue";
import Recommendations from "@/components/movies/recommendations.vue";
import MovieFrame from "@/components/movies/movie-frame.vue";
export default {
  auth: false,
  name: "IndexPage",
  components: { MovieDetailCard, Recommendations, MovieFrame },
  data() {
    return {
      data: null,
    };
  },
  async fetch() {
    let id = this.$route.params.id;
    let res = await this.$axios.get(`/api/v1/watch/${id}`);
    if (res.status == 200 && res.data.status) {
      this.data = res.data.data;
    }
  },
};
</script>
