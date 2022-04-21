<template>
   <button :class="variantClass" v-on:click="handleClick">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "rounded",
      required: false,
    },
    customClass: {
      type: String,
      default: "bg-primary-500 text-white",
      required: false,
    },
  },
  computed: {
    variantClass() {
      let baseClass = "transform duration-150 hover:scale-105 text-center font-semibold uppercase cursor-pointer";
      if(this.variant === 'rounded'){
        return baseClass + ' rounded px-4 py-2 hover:bg-primary-600 ' +  this.customClass;
      }else  if(this.variant === 'pill'){
        return baseClass + ' rounded-3xl px-4 py-2 hover:bg-primary-600 ' +  this.customClass;
      }
    }
  },
  methods: {
    handleClick(){
      this.$emit("click");
    }
  },
};
</script>
