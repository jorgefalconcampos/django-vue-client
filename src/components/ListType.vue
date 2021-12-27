<template>
    <div class="container">
        <ListDefault :elementsList="elements" />
        <h1>Listado de tipos</h1>

    </div>
</template>

<script>

import ListDefault from './partials/_ListDefault.vue';

export default {

    components: {
        ListDefault,
    },

    created() {
        this.findAll();
        console.log("find all from created")

    },
    data() {
        return {
            elements: []
        };
    },
    methods: {
        findAll() {
            fetch("http://127.0.0.1:8000/api/type/"+this.$route.params.id+"/elements/?format=json")
                .then(res => res.json())
                .then(res => this.elements = res)
        }
    },
    watch: {
        "$route.params.id"(){
            this.findAll();
            console.log("find all from watcher")
        }
    }
}
</script>