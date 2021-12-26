<template>
    <div>
        <b-navbar type="dark" variant="dark" class="pb-5">
            <b-navbar-brand>Elements app</b-navbar-brand>

            <b-nav-item-dropdown text="User" right>
                <b-dropdown-item href="#">A</b-dropdown-item>
                <b-dropdown-item href="#">B</b-dropdown-item>
                <b-dropdown-item href="#">C</b-dropdown-item>
            </b-nav-item-dropdown>


            <b-nav-item-dropdown text="Type" right>
                <b-dropdown-item v-for="t in types" v-bind:key="t.id" :to="'/type/' + t.id + '/elements'">
                    {{t.title}}
                </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Categories" right>
                <b-dropdown-item v-for="c in categories" v-bind:key="c.id" :to="'/category/' + c.id + '/elements'">
                    {{c.title}}
                </b-dropdown-item>
            </b-nav-item-dropdown>


            
            
        </b-navbar>
    </div> 
</template>


<script>
export default {

    created() {
        this.findAllType();
        this.findAllCategories();

    },
    data() {
        return {
            types: [],
            categories: []
        };
    },
    methods: {
        findAllType() {
            fetch("http://127.0.0.1:8000/api/type/")
                .then(res => res.json())
                .then(res => this.types = res)
        },
        

        findAllCategories() {
            fetch("http://127.0.0.1:8000/api/category/")
                .then(res => res.json())
                .then(res => this.categories = res)
        }

    }, 
}
</script>