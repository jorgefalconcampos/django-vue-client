<template>
    <div>
        <b-list-group>
            <div class="box" v-for="c in categories" v-bind:key="c.id">
                <b-list-group-item button>
                    <router-link :to=" '/category/' + c.id + '/category' ">
                        {{c.title}}                 
                    </router-link>                        
                </b-list-group-item>
            </div>
        </b-list-group>    
    </div>    
    
</template>


<script>
export default {

    created() {
        this.findAll();

    },
    data() {
        return {
            categories: []
        };
    },
    methods: {
        findAll() {

            fetch("http://127.0.0.1:8000/api/category/")
                .then(res => res.json())
                .then(res => this.categories = res)
        }
    }, 
}
</script>