<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
  />

  <div class="mt-20 ">
    <div class="p-3 bg-white rounded-xl mr-5 ml-20">
      <div class="flex justify-start">
        <img id="teamPic" src="../assets/TeamPhoto/boon.jpg" />
        <div class="ml-20 p-3">
          <h3 class="text-2xl ">{{ FEName }}</h3>
          <br />
          {{ NoFE }}<br />
          Position : {{ positionBoon }}<br /><br />
          
          <div id="icon" class="mr-20 mb-10">
          <a href="https://www.facebook.com/meawmafiaa"
            ><img id="icon" src="../assets/facebook.png"
          /> </a>
        </div>
        <div id="icon">
          <a href="https://www.instagram.com/uooq.js/"
            ><img id="icon" src="../assets/instagram.png"
          /></a> 
        </div>
        </div>
      </div>
    </div>

    <div class="p-3 bg-white rounded-xl mr-5 ml-20 mt-10">
      <div class="flex justify-start">
        <img id="teamPic" src="../assets/TeamPhoto/bird.jpg" />
        <div class="ml-20 p-3">
          <h3 class="text-2xl">{{ BEName }}</h3>
          <br />
          {{ NoBE }}<br />
          Position : {{ positionBird }}<br /><br />
          <div id="icon" class="mr-20 mb-10">
          <a href="https://www.facebook.com/konseaw"
            ><img id="icon" src="../assets/facebook.png"
          /> </a>
        </div>
        <div id="icon">
          <a href="https://www.instagram.com/b_birdsrp/"
            ><img id="icon" src="../assets/instagram.png"
          /></a> 
        </div>
        </div>
      </div>
    </div>
  </div>

    <div class="flex justify-items-center mr-5 font-mono text-3xl">About team</div>
  
  <div class="mt-20">
    <div class="p-3 bg-white rounded-xl max-w-max">
      <div class="flex justify-between w-full">
        <img id="teamPic" src="../assets/TeamPhoto/diz.jpg" />
        <div class="ml-10 p-3">
          <h3 class="text-2xl">{{ DOName }}</h3>
          <br />
          {{ NoDO }}<br />
          Position : {{ positionDiz }}<br /><br />

          <div id="icon" class="mr-20 mb-10">
          <a href="https://www.facebook.com/dit.forward/"
            ><img id="icon" src="../assets/facebook.png"
          /> </a>
        </div>
        <div id="icon">
          <a href="https://www.instagram.com/dlzzappear/"
            ><img id="icon" src="../assets/instagram.png"
          /></a> 
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
      FEName: "Pornwut Thammapatee",
      BEName: "Surapong Chamarai",
      DOName: "Pattarapol Sangsunee",

      NoFE: "62130500063",
      NoBE: "62130500100",
      NoDO: "62130500072",

      positionBoon: "Front-end, Database",
      positionBird: "Back-end, Database",
      positionDiz: "Devop, Network",
    };
  },
};
</script>

<style>
#teamPic {
  width: 300px;
  height: 300px;
}

#icon {
  display: block;
  width: 3em;
  height: 3em;
}
</style>