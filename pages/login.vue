<template>
  <LayoutsMain>
    <div
      class="
        container
        mx-auto
        h-screen
        w-full
        absolute
        inset-0
        flex
        justify-center
        items-center
      "
    >
      <form
        @submit.prevent="prosesLogin"
        class="
          bg-black
          ring-2 ring-red-500
          w-full
          md:w-2/5
          rounded-xl
          text-gray-700
          relative
          px-12
          py-6
          mx-6
        "
      >
        <h4 class="text-center text-primary-500 font-semibold text-2xl py-6">
          welcome to cinemaze
        </h4>

        <div class="py-3 w-full">
          <FormsInput type="text" placeholder="username" v-model="username" />
        </div>

        <div class="py-3 w-full">
          <FormsInput type="password" v-model="password" />
        </div>

        <div class="py-6">
          <Button type="submit" variant="rounded">Login</Button>
        </div>
      </form>
    </div>
  </LayoutsMain>
</template>

<script>
export default {
  auth: "guest",
  name: "Login",
  data() {
    return {
      username: "manusiakemos",
      password: "password",
    };
  },
  methods: {
    async prosesLogin() {
      await this.$auth.loginWith("laravelSanctum", {
        data: {
          username: this.username,
          password: this.password,
        },
      });

      this.$router.push("/");
    },
  },
};
</script>
