<template>

<div class="flex flex-col ml-10">
  <div v-for="brand of brands" :key="brand.id" class="flex flex-col lg:w-2/3">
    
    <div class="flex flex-row text-lg font-black">
      <div>{{ brand.brandName }}</div>
    </div>
<div class="flex">
      <div v-for="type of brand.types" :key="type.id" class="flex flex-col my-6 mx-1">
        <div class="flex flex-col w-11/12 h-full bg-white px-8 py-6 rounded-xl space-y-5 items-center">
          <h3 class="font-serif font-bold text-gray-900 text-xl">
            {{ type.typename }}
          </h3>
          <img
            class="lg:w-8/12 md:w-8/12 rounded-md"
            :src="`${`http://23.98.77.87/backend/brandimg/`}`+brand.id"
            alt="motivation"
          />
          <div>
 <p class="text-left leading-relaxed text-sm whitespace-normal">
           {{ type.description }}
          </p>

          </div>
          <p class="text-center">Price: {{type.price}}</p>
         
          <div>
            
          <router-link to="/total"
            @click="pickBrandType(
                brand.id,
                brand.brandName,
                type.id,
                type.typename,
                type.price,
                type.description,
                brand.images,

              ); postProduct();"
            class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent"

          >
            Buy
          </router-link>
          </div>
        </div>
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
    pickBrandType(
      brandId,
      brandName,
      typeId,
      typeName,
      typePrice,
      typeDescrip,
      images
    ) {
     
      let brand = {
        types: [
          {
            id: typeId,
            typename: typeName,
            price: typePrice,
            description: typeDescrip,
          },
        ],
        id: brandId,
        brandName: brandName,
        images: images
      };
      console.log(brand.images);
      this.$store.dispatch("addBrandType", brand);
      this.$store.dispatch("addTypeId",typeId)
      this.$store.dispatch("addImage",brand.images)
      this.$store.dispatch("addProduct");
      
    },
    async postProduct() {
      let data = await this.$store.state.product;
      const res = this.postData("product", data);
      if (res.status === 200) {
        console.log("SUCCESS: " + await this.$store.state.products);
      }
    },
  },
};
</script>


