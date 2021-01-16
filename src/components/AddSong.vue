<template>
    <div class="panel-block">
        <form @submit.prevent="addNewSong">
            <div class="field has-addons">               
                <div class="control is-expanded">
                    <input class="input" type="text" placeholder="Title" v-model="newTitle">
                </div>
                <div class="control">
                    <button class="button is-info" type="submit">Add</button>
                </div>
            </div>
        </form>
    </div>    
</template>

<script>
export default {
    name: 'AddSong',
    data() {
        return {
            newTitle: ''           
        }
    },
    methods: {
        addNewSong() {
            if(this.newTitle) {
                this.$store.commit('addNewSong', {
                    title: this.newTitle
                });           
                this.newTitle = ''
              
            }
        }
    }
}
</script>

<style scoped>
    form {
        width: 100%;
    }

</style>