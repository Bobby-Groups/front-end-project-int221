<template>

  <div class="grid grid-cols-3 grid-rows-5 gap-10 ml-48 mt-28">
    <div v-for="color of colors" :key="color.id">
      <button :style="{backgroundColor: color.colorvalue}" class="w-32 h-20 text-white">{{ color }}</button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      colors : []
    };
  },
  async created(){
    this.colors = await this.fetchColor() 
    console.log(this.colors);
  },
  methods:{
    async fetchColor(){
       const { data } = await this.getData('color')
       return data
    }
  }
};
</script>
