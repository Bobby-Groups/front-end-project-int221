<template>
  <div v-for="myteam of team" :key="myteam.id" class="ml-1">
  <div class="lg:my-10 lg:mx-10 md:my-10 sm:my-10">
    <div class="p-3 bg-white rounded-xl lg:w-4/5 lg:h-full md:w-full sm:w-full h-full">
      <div class="flex flew-row">
        <img :src="myteam.img" class="lg:w-1/3 md:w-1/2 sm:w-5/12"/>
        <div class="ml-8 p-3">
          <div class="flex flex-col text-left my-3">
          <h3 class="lg:text-2xl md:text-xl sm:text-sm">{{myteam.name}}</h3>
         <div class="lg:text-2xl md:text-xl sm:text-sm">
           Student ID : {{myteam.stdId }}
           </div> 
         <div class="lg:text-2xl md:text-xl sm:text-sm">
          Position : {{myteam.pos}}
           </div>
         </div>
         <div class="flex flex-row lg:mt-10">
          <div class="mr-20 mb-10">
          <a :href="myteam.fb"
            ><img class="w-10" src="../assets/facebook.png"/></a>
        </div>
        <div id="icon">
          <a :href="myteam.ig"
            ><img class="w-10" src="../assets/instagram.png"
          /></a> 
        </div>
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
      team:[
        {
          name:"Pornwut Thammapatee",
          stdId:"62130500063",
          pos:"Front-end, Database",
          img:'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/46695892_1982123928509351_3836604456275804160_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGkcdt8309Dd8TiTbz-mZAlHdgg2OHxJj4d2CDY4fEmPqy8hEUK-j6CFXVRbX7XgfW1RBnj-_lOchBrA3RVVNky&_nc_ohc=BVirJ0bi4PMAX-103i7&_nc_ht=scontent.fbkk13-1.fna&oh=e69fe680e4d284f7587954a08fba0193&oe=60B9D3D8',
          fb: 'https://www.facebook.com/meawmafiaa',
          ig: 'https://www.instagram.com/boonpw/',
          id:1
        },
         {
          name:"Surapong Chamarai",
          stdId:"62130500100",
          pos:"Back-end, Database",
          img:"https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.18169-9/15965176_1175317199255422_7805047654377926282_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGsplvRW-XU9vq80b94o2OaayVs_54NtMdrJWz_ng20x9EYH72cza6pzBwizIrlhMVYI4TJYBDu-z7cvcxjdMYC&_nc_ohc=DUg9GpixTWAAX_FwReR&_nc_ht=scontent.fbkk12-4.fna&oh=7286dc59645fa041b92ed5e5a0470609&oe=60BF85C7",
           fb: 'https://www.facebook.com/dit.forward',
          ig: 'https://www.instagram.com/dlzzappear/',
          id:2
        },
         {
          name:"Pattarapol Sangsunee",
          stdId:"62130500072",
          pos:"Devop, Network",
          img:"https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/123269640_982133342272965_3991837066600109047_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHbfr75rCdD2f4L5v3fywXjNMmTPR1geeU0yZM9HWB55TtzITntHN5XeHaAML8Os6Sq9YzKcz0z3NdrGxaOkLq0&_nc_ohc=hP5Vk9-c6CsAX8A6BDL&_nc_ht=scontent.fbkk12-3.fna&oh=0117ed51c6728d89b85163c080d756cc&oe=60BADA77",
          fb: 'https://www.facebook.com/konseaw',
          ig: 'https://www.instagram.com/b_birdsrp/',
          id:3
        }
      ]
    };
  },
};
</script>

<style>
#teamPic {
  width: 18rem;
  height: 15rem;
}

#icon {
  display: block;
  width: 3em;
  height: 3em;
}
</style>