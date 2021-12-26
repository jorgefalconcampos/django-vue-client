<template>
    <div class="container">

        <b-table striped hover :items="elements" :fields="fields">
        </b-table>

        <div class="box" v-for="e in elements" v-bind:key="e.id">

            <router-link :to=" '/detail/' + e.id ">
                <b-card
                    :title="e.title"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
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
            fields: [
                {
                    key: 'id',
                    sortable: true
                },
                {
                    key: 'title',
                    sortable: false
                },
                {
                    key: 'url_clean',
                    label: 'Url limpia',
                    sortable: true
                },
                {
                    key: 'description',
                    sortable: true
                },
                {
                    key: 'category',
                    sortable: true
                },
                
                
            ],
            elements: ["Uno", "Dos", "Tres"]
        };
    },
    methods: {
        findAll() {

            fetch("http://127.0.0.1:8000/api/element/")
                .then(res => res.json())
                .then(res => this.elements = res)
        }
    }, 
}
</script>