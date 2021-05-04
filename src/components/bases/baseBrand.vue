<template>
  <div class="flex flex-col">
    <div v-for="brand of brands" :key="brand.id">
      <div class="flex flex-row border-4">
        <div class="border-4 border-black p-4">
          {{ brand.brandName }}
        <p v-for="type of brand.types" :key="type.id">
          {{ type.typename }}
        </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [],
    };
  },
  async created() {
    this.brands = await this.fetchBrand();
    console.log(this.brands);
  },

  methods: {
    async fetchBrand() {
      const { data } = await this.getData("brand");
      return data;
    },
  },
};
</script>
