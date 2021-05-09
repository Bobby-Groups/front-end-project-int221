<template>
  <form
    @submit.prevent="
      checkForm();
      putColor(colors[colorId - 1], newName, colorId, colorCode);
    "
    class="flex flex-row"
  >
    <label for="newName" class="mx-2">Color: </label>
    <div class="flex flex-col">
      <select
        name="selectColor"
        v-model="colorId"
        @change="selectColor($event)"
      >
        <option disabled>Please select one</option>
        <option
          :value="color.id"
          v-for="color of colors"
          :key="color.id"
          :style="{ backgroundColor: color.colorcode }"
          class="text-white"
        >
          {{ color.colorName }}
        </option>
      </select>
    </div>
    <div>
      <label for="newName" class="mx-2">New name:</label>
      <input type="text" v-model="newName" name="newName" />
      <label class="mx-2">Color code:</label>
      <input type="text" v-model="colorCode" name="colorCode" />
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
    <div class="flex flex-col mx-5 text-left">
      <span v-if="errors.length">
        <ul>
          <li
            v-for="error in errors"
            :key="error"
            class="font-bold text-red-600"
          >
            {{ error }}
          </li>
        </ul>
      </span>
    </div>
    <!-- <Button msg="Brand" @click="putBrand(colors,newName,colorId)"/> -->
  </form>
  <!-- <span>{{colorId}} </span>
    <span>{{newName}}</span> -->
</template>

<script>
// import Button from '../core/Button.vue'

export default {
  components: {
    // Button
  },
  data() {
    return {
      colors: [],
      colorId: null,
      newName: null,
      colorCode: null,
      errors: [],
      isNewName: false,
      isColorId: false,
      isColorCode: false,
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
    selectColor(event) {
      console.log(event.target.value);
      return (this.colorId = event.target.value);
    },
    async putColor(color, newName, id, code) {
      if (
        this.isNewName === true &&
        this.isColorId === true &&
        this.isColorCode === true
      ) {
        console.log(color);
        console.log(newName);
        console.log(code);
let newColor = {
    colorName: newName,
    id: parseInt(id),
    colorcode: code
}
color = newColor
        // color.colorName = newName;
        // color.id = parseInt(id);
        // color.colorcode = code;
        console.log(color);

        await this.putData("color", id, color);
      }
    },

    checkForm: function (e) {
      this.errors = [];
      if (this.newName) {
        this.isNewName = true;
        if (this.colorId) {
          this.isColorId = true;
        }
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.colorId) {
          this.errors.push("Please select color.");
        }
        if (!this.colorCode) {
          this.errors.push("Color Code required");
        }
        return true;
      }
      if (this.colorId) {
        this.isColorId = true;
        if (this.newName) {
          this.isNewName = true;
        }
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.newName) {
          this.errors.push("Name required.");
        }
        if (!this.colorCode) {
          this.errors.push("Color Code required");
        }
        return true;
      }

      if (this.colorCode) {
        this.isColorCode = true;
        if (this.newName) {
          this.isNewName = true;
        }
        if (this.colorId) {
          this.isColorId = true;
        }
        if (!this.newName) {
          this.errors.push("Name required.");
        }
        if (!this.colorId) {
          this.errors.push("Please select color.");
        }
        return true;
      }
      this.errors = [];

      if (!this.newName) {
        this.errors.push("Name required.");
      }
      if (!this.colorId) {
        this.errors.push("Please select color.");
      }
      if (!this.colorCode) {
        this.errors.push("Color Code required");
      }
      e.preventDefault();
    },
  },
};
</script>