<template>
  <div style="background: url('/images/glass-bg.jpg')" class="antialiased page-container">
    <main
      class="
        w-full
        min-h-screen
        text-gray-100
        relative
        backdrop-filter backdrop-sepia-0 backdrop-brightness-75 backdrop-blur-3xl
      "
    >
      <Navbar/>
      <div class="py-6">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../navbar.vue";
export default {
  name: "GuestLayout",
  components: { Navbar },
};
</script>
