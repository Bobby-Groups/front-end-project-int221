<template>
  <div class="min-h-screen overflow-hidden">
    <div class="flex flex-col ml-32">
      <div v-for="brand of brands" :key="brand.id">
        <div class="border-4">
          <b>{{ brand.brandName }}</b>
          <div class="flex flex-row">
            <div
              v-for="type of brand.types"
              :key="type.id"
              class="border-2 border-black p-4"
            >
              <table class="text-left text-xs">
                <tr>
                  <span> {{ type.typename }} </span>
                </tr>
                <tr>
                  <img
                    src="@/assets/TeamPhoto/bird.jpg"
                    alt="bird"
                    class="w-32 h-32"
                  />
                </tr>
                <tr>
                  <td>
                    <div>Price: {{ type.price }}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="w-40">description: {{ type.description }}</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <router-link
        to="/total"
        class="p-5 border-4 bg-black text-white rounded-xl"
        >CONFIRM</router-link
      >
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
