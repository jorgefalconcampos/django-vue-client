<template>
    <div>
        <b-list-group>
            <div class="box" >
                <h5>Tipos</h5>
                <b-list-group-item button v-for="t in types" v-bind:key="t.id">
                    <router-link :to=" '/type/' + t.id + '/type' ">
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
            types: []
        };
    },
    methods: {
        findAll() {

            fetch("http://127.0.0.1:8000/api/type/")
                .then(res => res.json())
                .then(res => this.types = res)
        }
    }, 
}
</script>