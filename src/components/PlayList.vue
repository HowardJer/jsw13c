<template>
    <div>
        <nav class="panel is-success">
            <p class="panel-heading">
                Playlist ({{ songCount }})
            </p>
            <a
                class="panel-block is-active"
                v-for="(song, index) in songs"
                :key="index"
                @click="removeFromPlaylist(index)">
            
                <span class="panel-icon">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </span>
               
                {{ song.artist }} - {{ song.title }}
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: "PlayList",
    computed: {
        songCount() {
            return this.$store.getters.playlistSongCount;
        },
        songs() {
            return this.$store.state.playlistSongs;
        },
    },
    methods: {
        removeFromPlaylist(index) {
            this.$store.commit("removeFromPlaylist", index);
        },
    },
};
</script>

<style scoped>
</style>