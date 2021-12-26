<template>
    <div>
        <b-list-group>
            <div class="box" v-for="t in type" v-bind:key="t.id">
                <b-list-group-item button>
                    <router-link :to=" '/category/' + t.id + '/type' ">
                        {{t.title}}                 
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

            fetch("http://127.0.0.1:8000/api/type/")
                .then(res => res.json())
                .then(res => this.type = res)
        }
    }, 
}
</script>