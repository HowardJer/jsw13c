<template>
    <div id="playlistManager">
        <h1 class="title">Playlist Manager</h1>
        <section>
            <song-list :songs="songs" @add="moveToPlaylist" @addNewSong="addNewSong"></song-list>
            <play-list :songs="playlistSongs" @remove="moveToSongList"></play-list>
        </section>
    </div>    
</template>

<script>
import PlayList from './PlayList';
import SongList from './SongList';

export default {
    name: 'PlaylistManager',
    components: {
        PlayList,
        SongList
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    #playlistManager>section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        padding: 1 rem;
    }

</style>