<template>
    <div
      class="lg:grid lg:grid-cols-6 my-16 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 shadow-md bg-white"
    >
      <div v-for="color of colors" :key="color.id">
        <div class="">
        <button
          :style="{ backgroundColor: color.colorcode }"
          @click="pickColor(color.id,color.colorcode,color.colorName)"
          class="lg:w-30 lg:h-20 md:w-28 md:h-16 sm:w-16 sm:h-10 lg:mx-5 lg:my-10 md:mx-4 md:my-8 sm:mx-3 sm:my-6 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
        >
        </button>

        </div>

      </div>
 
    </div>

 
  
</template>

<script>
export default {
  
  data() {
    return {
      colors: [],
      color: {
        colorcode: "",
        active: 'Brand'
      },
    };
  },
  async created() {
    this.colors = await this.fetchColor();
  },
  methods: {
    async fetchColor() {
      const { data } = await this.getData("color");
      return data;
    },
    pickColor(colorId,colorcode,colorName) {
      let color = {
        colorcode: colorcode,
        id: colorId,
        colorName: colorName
      }
      
      this.$store.dispatch("addColor", color);
      console.log(this.$store.state.product);
    },
  },
};
</script>
