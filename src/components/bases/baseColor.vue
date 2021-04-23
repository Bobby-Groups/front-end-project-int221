<template>

  <div class="grid grid-cols-3 grid-rows-5 gap-10 ml-48 mt-28">
    <div v-for="color of colors" :key="color">
      <button :style="{backgroundColor: color}" class="w-32 h-20 text-white">{{ color }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        red: "#E74C3C",
        green: "#27AE60",
        blue: "#2E86C1",
        purple: "#8E44AD",
        yello: "#F4D03F",
        grey: "#707B7C",
        black: "#000",
        white: "#FFFF",
        brown: "#762400",
      },
    };
  },
};
</script>
