<template>
  <div class="min-h-screen">
    <div
      class="grid grid-cols-3 grid-rows-3 ml-48 my-16 rounded-lg shadow-md bg-gray-300"
    >
      <div v-for="color of colors" :key="color.id">
        <div class="">
        <button
          :style="{ backgroundColor: color.colorcode }"
          @click="pickColor(color.id,color.colorcode,color.colorName)"
          class="w-32 h-20 mx-5 my-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
        >
        </button>
        </div>
      </div>
    </div>

    <router-link
      to="/brand"
      class="p-5 border-4 bg-black text-white rounded-xl min-h-screen"
      >CONFIRM</router-link
    >
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
// import { store } from './vuex/store.js'

export default {
  data() {
    return {
      colors: [],
      color: {
        colorcode: "",
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
