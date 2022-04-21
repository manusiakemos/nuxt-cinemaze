<template>
  <client-only>
    <router-link :to="to" class="uppercase font-normal tracking-wider hover:text-primary-500">
      <slot></slot>
    </router-link>
  </client-only>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      required: false,
      default: "/",
      type: String,
    },
  },
};
</script>
