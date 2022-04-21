<template>
  <div>
    <div
      class="min-h-screen w-full relative text-white"
      :style="`background:url('${homeBg}')`"
      id="page-container"
    >
      <div
        class="
          min-h-screen
          w-full
          absolute
          left-0
          top-0
          backdrop-filter backdrop-sepia-0 backdrop-brightness-50
          bg-gradient-to-b
          from-black/30
          to-red-400/30
        "
      >
        <div class="top-0 left-0 w-full h-full">
          <div>
            <Navbar />
          </div>
        </div>

        <div class="absolute inset-0 inset-y-1/2 w-full flex justify-center">
          <FormsSearch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  name: "IndexPage",
  data() {
    return {
      homeBg: "",
    };
  },
  async fetch() {
    let res = await this.$axios.get("/api/v1/home-bg");
    if (res.status == 200 && res.data.status) {
      this.homeBg = res.data.data.image_path;
    }
  },
};
</script>

<style>
#page-container {
  background-position: center center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
}
</style>
