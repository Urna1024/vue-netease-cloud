import { createStore } from 'vuex'
import {getLyric} from '@/api'

export default createStore({
  state: {
    playlist:[
      {
        name:'我好像在哪见过你',
        id:417859631,
        al:{
          id:34780271,
          name:'彩券',
          pic:109951165386012146,
          picUrl:'http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg',
          pic_str:'109951165386012146'
        }
      }
    ],//播放列表
    playId:0,//播放音乐默认是列表中哪一首
    lyric:''//歌词
  },
  getters: {
  },
  mutations: {
    setPlaylist(state,newMusic){
      state.playlist[0]=newMusic
      //3.vuex接收到组件传来的新歌曲，替换掉原来数组的第0条
    },
    addNewMusic(state,newMusic){
      state.playlist.push(newMusic)
    },
    addPlayId(state){
      state.playId++
    },
    reducePlayId(state){
      state.playId--
    },
    setLyric(state,value){
      state.lyric=value//3.mutate state
    }
  },
  actions: {
    //在actions中获取与后台有关的数据交互，由于歌词在多个组件中都会被用到，所以我们直接在vuex里面获取并存储
    async reqLyric(content,payload){
      console.log(payload.id)
      const result=await getLyric(payload.id)
      //2.commit mutations
      content.commit('setLyric',result.data.lrc.lyric)
      //逗号后面的从后台歌词数据中取到的，是固定写法
    }
  },
  modules: {
  }
})
