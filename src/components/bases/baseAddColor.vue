<template>
  <form
    @submit.prevent="
      checkForm();
      addColor(colorName, colorCode);
    "
 class="flex flex-row" >
 <div class="flex flex-row">
    <div>
      <span class="mx-2">Color name:</span>
      <input type="text" v-model="colorName" />
    </div>
    <div>
      <span class="mx-2">Color code:</span>
      <input type="text" v-model="colorCode" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
</div>
<div class="mx-5 text-left">
<span v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error" class="font-bold text-red-600">
            {{ error }}
          </li>
        </ul>
      </span>
</div>
     

    
    <!-- <Button msg="Confirm" @click="addColor(colorName,colorCode)"></Button> -->
  </form>
</template>

<script>
// import Button from "../core/Button.vue";

export default {
  components: {
    // Button,
  },
  data() {
    return {
      colorName: "",
      colorCode: "",
      errors: [],
      isColorName:false,
      isColorCode: false
    };
  },
  methods: {
    async addColor(name, code) {
        if(this.isColorName === true && this.isColorCode === true){
      let color = {
        colorName: name,
        colorcode: code,
      };
      console.log(color);
      await this.postData("color", color);
        }
 },
        checkForm: function (e) {
      this.errors = [];
      if (this.colorName) {
        this.isColorName = true;
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.colorCode) {
          this.errors.push("Color code required.");
          
        }
        return true;
      }
      if (this.colorCode) {
        this.isColorCode = true;
        if (this.colorName) {
          this.isColorName = true;
        }
        if (!this.colorName) {
          this.errors.push("Color name required.");
        }
    
        return true;
      }
      this.errors = [];

      if (!this.colorName) {
        this.errors.push("Color code required.");
      }
      if (!this.colorCode) {
        this.errors.push("Color name required.");
      }
      e.preventDefault();
    },
  },
};
</script>