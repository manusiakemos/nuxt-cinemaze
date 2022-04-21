<template>
  <client-only>
    <ul class="flex justify-center items-center rounded w-auto font-sans">
      <li v-if="pagination.current_page > 1">
        <button
          class="
            block
            hover:text-white hover:bg-primary-700
            text-blue
            p-4
            rounded
          "
          @click="onPageChange(pagination.current_page - 1)"
        >
          Previous
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button
          :class="[
            page == pagination.current_page
              ? 'text-white bg-primary-500'
              : 'hover:text-white hover:bg-primary-700',
            'block p-4 rounded',
          ]"
          @click="onPageChange(page)"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="pagination.current_page < pagination.last_page">
        <button
          class="
            block
            hover:text-white hover:bg-primary-700
            text-blue
            p-4
            rounded
          "
          @click="onPageChange(pagination.current_page + 1)"
        >
          Next
        </button>
      </li>
    </ul>
  </client-only>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null;
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pages = [];
      for (let page = from; page <= to; page++) {
        pages.push(page);
      }
      return pages;
    },
  },
  methods: {
    onPageChange: function (page) {
      let params = { page: page };
      let search = this.$route.query.search ?? "";
      if(search){
        params.search = search;
      }
      this.$emit("onPageChanged", page);
      this.$router.push({ query: params });
    },
  },
};
</script>
