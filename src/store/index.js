import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlistSongs: [],
    songs: [
      { title: 'Nights in White Satin' },
      { title: 'Samba Pa Ti' },
      { title: 'Time is Tight' },
      { title: 'Going Home' },
    ]
    // songs: [
    //   { artist: 'Moody Blues', title: 'Nights in White Satin' },
    //   { artist: 'Santana ', title: 'Samba Pa Ti' },
    //   { artist: 'Booker T and the MGs', title: 'Time is Tight' },
    //   { artist: 'Mark Knopfler', title: 'Going Home' },
    // ]
  },
  mutations: {
    addNewSong(state, song) {
      state.songs.splice(0, 0, song);
    },
    moveToPlaylist(state, index) {
      let song = state.songs.splice(index, 1)[0];
      state.playlistSongs.splice(0, 0, song);
    },
    removeFromPlaylist(state, index) {
      let song = state.playlistSongs.splice(index, 1)[0];
      state.songs.splice(state.songs.length, 0, song);
    }
  },
  actions: {
  },
  getters: {
    playlistSongCount(state) {
      return state.playlistSongs.length;
    },
    songCount(state) {
      return state.songs.length;
    }
  },
  modules: {
  }
})
