<template>
  <div class="container">
    <div>
      <button @click="aaa">
        <svg t="1651026578126"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2061"
             width="20"
             height="20">
          <path d="M143 462h800c27.6 0 50 22.4 50 50s-22.4 50-50 50H143c-27.6 0-50-22.4-50-50s22.4-50 50-50z"
                p-id="2062"></path>
          <path d="M116.4 483.3l212.1 212.1c19.5 19.5 19.5 51.2 0 70.7s-51.2 19.5-70.7 0L45.6 554c-19.5-19.5-19.5-51.2 0-70.7 19.6-19.6 51.2-19.6 70.8 0z"
                p-id="2063"></path>
          <path d="M328.5 328.6L116.4 540.7c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7z"
                p-id="2064"></path>
        </svg>
      </button>
      歌单
    </div>
    <div>
      <router-link to="/search">
        <svg t="1650613108092"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2823"
             width="20"
             height="20">
          <path d="M988.6 868.5L750.1 629.9c-2.8-2.7-5.8-4.9-8.8-7.2 40.3-61.8 63.8-135.5 63.8-214.8 0-218-176.6-394.6-394.6-394.6-217.9 0-394.6 176.6-394.6 394.6 0 218 176.7 394.7 394.6 394.7 79.3 0 153.1-23.6 215-63.9 2.2 3 4.3 6 7.1 8.7L871.1 986c16.3 16.2 37.5 24.3 58.8 24.3 21.3 0 42.5-8.1 58.8-24.3 32.3-32.4 32.3-85-0.1-117.5M410.5 677.9c-148.9 0-270-121.2-270-270 0-148.9 121.1-270 270-270s270.1 121.2 270.1 270c-0.1 148.9-121.3 270-270.1 270"
                fill=""
                p-id="2824"></path>
        </svg>
      </router-link>
      &nbsp;
      <router-link to="/login">
        <svg t="1650612897089"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2003"
             width="20"
             height="20">
          <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                p-id="2004"></path>
          <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                p-id="2005"></path>
          <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                p-id="2006"></path>
        </svg>
      </router-link>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
  export default {
    name: "ListViewHeader",
    methods:{
      aaa(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped
       lang="less">
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;top: 10px;left: 0;
    button {
      border: 0;
      outline: none;
      background: #fff;
      vertical-align: middle;
    }
  }
.gap{height: 30px}
</style>