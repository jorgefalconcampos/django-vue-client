<template>
    <div class="">
            <b-card :title="element.title" class="mb-2">

                <router-link :to="{name: 'list-category', params: {id: element.category} }">
                    Category: {{category.title}} 
                </router-link>
                <br>

                <router-link :to="{name: 'list-type', params: {id: element.type} }">
                    Type: {{type.title}}
                    
                </router-link>
                <b-card-text>{{element.description}}</b-card-text>
            </b-card>
    </div>
</template>

<script>
export default {

    created() {
        console.log(this.$route.params.id)
        this.find();
    },
    data() {
        return {
            element: Object,
            category: Object,
            type: Object
        };
    },
    methods: {
        find() {
            fetch("http://127.0.0.1:8000/api/element/" + this.$route.params.id + "/?format=json") 
                .then(res => res.json())
                .then(res => {
                    this.element = res
                    this.findCategory(this.element.id)
                    this.findType(this.element.id)
                });
        },
        findCategory(id) {
            fetch("http://127.0.0.1:8000/api/category/" + id + "/?format=json")
                .then(res => res.json())
                .then(res => this.category = res)
        },
        findType(id) {
            fetch("http://127.0.0.1:8000/api/type/" + id + "/?format=json")
                .then(res => res.json())
                .then(res => this.type = res)
        }
    }, 
}
</script>