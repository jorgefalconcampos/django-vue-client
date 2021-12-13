<template>
    <div class="container">
            <b-card :title="element.title" class="mb-2">
                <b-card-text>{{element.description}}</b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
    </div>
</template>

<script>
export default {

    created() {
        this.find();

    },
    data() {
        return {
            element: Object
        };
    },
    methods: {
        find() {

            fetch("http://127.0.0.1:9000/api/element/1/")
                .then(res => res.json())
                .then(res => this.element = res)
        }
    }, 
}
</script>