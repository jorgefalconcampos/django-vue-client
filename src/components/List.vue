<template>
    <div class="container">

        <!-- <b-table striped hover :items="elements" :fields="fields">
        </b-table> -->
        <ListDefault :elementsList="elements" />
    </div>
</template>

<script>

import ListDefault from '../components/partials/_ListDefault.vue';

export default {
    components: {
        ListDefault,
    },

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
            elements: []
        };
    },
    methods: {
        findAll() {

            fetch("http://127.0.0.1:8000/api/element/?format=json")
                .then(res => res.json())
                .then(res => this.elements = res)
        }
    }, 
}
</script>