<template>
  <client-only>
    <div
      :class="{
        'sticky top-0 left-0 z-50 backdrop-filter backdrop-blur-3xl bg-black/80': scrollY > 0,
        '': scrollY == 0,
      }"
    >
      <div
        class="flex items-center justify-between container mx-auto py-6 gap-4"
      >
        <div id="left-nav" class="flex items-center gap-4">
          <Appname />
          <NavItem to="/">home</NavItem>
          <NavItem to="/movies">movies</NavItem>
          <NavItem to="series">series</NavItem>
          <NavItem to="news">news</NavItem>
          <NavItem to="comingsoon">coming soon</NavItem>
          <NavItem to="topimdb">top imdb</NavItem>
        </div>
        <div id="right-nav">
          <div v-if="$store.state.auth.loggedIn">
            <Button
              @click="logout"
              variant="pill"
              custom-class="border-2 border-primary-500 uppercase tracking-wider"
              >logout</Button
            >
          </div>
          <div v-else>
            <NuxtLink to="/login">
              <Button
                variant="pill"
                custom-class="border-2 border-primary-500 uppercase tracking-wider"
                >login</Button
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import NavItem from "@/components/navitem";
import Appname from "@/components/appname";
import Button from "@/components/button";
export default {
  name: "Navbar",
  components: {
    NavItem,
    Appname,
    Button,
  },
  data() {
    return {
      scrollY: 0,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
