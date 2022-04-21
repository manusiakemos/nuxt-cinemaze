<template>
  <div class="w-1/2 md:w-1/3">
    <form
      v-on:submit.prevent="searchMovies"
      id="searchForm"
      class="w-full container mx-auto flex items-center"
    >
      <input
        type="search"
        id="search-box-input"
        name="search"
        autocomplete="off"
        class="
          py-2
          px-4
          ring-0
          focus:ring-0
          rounded-full
          h-12
          backdrop-filter backdrop-blur-sm
          bg-opacity-10
          border-2 border-gray-300
          bg-black/70
          focus:border-2 focus:border-primary-700
          outline-0
          focus:outline-0
          outline-none
          focus:outline-none
          text-white
          hover:border-primary-700 hover:border-2
          grow
          w-full
          md:w-1/2
          lg:w-1/3
          placeholder:text-gray-300
        "
        v-model="search"
        placeholder="Search movies here..."
      /><button
        class="
          ml-2
          bg-primary-500
          text-white
          uppercase
          font-semibold
          tracking-wider
          p-3
          h-12
          w-12
          rounded-full
          transform
          transition
          duration-150
          ease-in-out
          hover:scale-105
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            class="fill-white"
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchMovies() {
      this.$router.push({ path: "movies", query: { search: this.search } });
    },
  },
};
</script>
