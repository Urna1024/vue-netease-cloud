<template>
  <HeaderCom/>
  <SwiperCom/>
  <IconList/>
  <MusicList/>

</template>

<script>
  import HeaderCom from "@/components/header/HeaderCom";
  import SwiperCom from "@/components/swiper/SwiperCom";
  import IconList from "@/components/icon-list/IconList";
  import MusicList from "@/components/music-list/MusicList";

  export default {
    name: 'HomeView',
    components: {
      HeaderCom, SwiperCom, IconList, MusicList

    }
  }
</script>
