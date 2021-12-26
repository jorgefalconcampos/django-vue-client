<template>
    <div class="container">

        <h1>Listado de categorías</h1>

        <div class="box" v-for="e in elements" v-bind:key="e.id">
            <router-link :to=" '/detail/' + e.id ">
                <b-card
                    :title="e.title"
                >

                <b-card-text>
                    {{e.description}}
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>

                </b-card>
            </router-link>                        
        </div>
    </div>
</template>

<script>
export default {

    created() {
        this.findAll();

    },
    data() {
        return {
            elements: []
        };
    },
    methods: {
        findAll() {

            fetch("http://127.0.0.1:8000/api/category/"+this.$route.params.id+"/elements/?format=json")
                .then(res => res.json())
                .then(res => this.elements = res)
        }
    }, 
}
</script>