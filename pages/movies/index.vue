<template>
  <LayoutsGuest>
    <client-only v-if="movies">
      <div class="container mx-auto">
        <h4 class="heading">Movies</h4>
        <div class="py-6">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div v-for="(movie, i) in movies.data" :key="`movie-${i}`">
              <MovieCard :movie="movie" />
            </div>
          </div>

          <div class="py-6">
            <Pagination
              :pagination="movies"
              :offset="4"
              @onPageChanged="fetchMovies"
            />
          </div>
        </div>
      </div>
    </client-only>
  </LayoutsGuest>
</template>

<script>
import Pagination from "@/components/pagination.vue";
export default {
  auth: false,
  name: "IndexPage",
  components: { Pagination },
  data() {
    return {
      movies: null,
    };
  },
  async mounted() {
    await this.fetchMovies();
  },
  watch: {
    "$route.params": {
      handler: function () {
        this.fetchMovies();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async fetchMovies(page = null) {
      let _page = page;
      let _search = this.$route.query.search ?? "";
      if (!page) {
        _page = this.$route.query.page;
      }
      let res = await this.$axios.get("/api/v1/movies", {
        params: {
          page: _page,
          search: _search,
        },
      });
      if (res.status == 200 && res.data.status) {
        this.movies = res.data.data;
      }
    },
  },
};
</script>
