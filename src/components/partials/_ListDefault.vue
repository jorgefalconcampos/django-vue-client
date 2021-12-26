<template>
    <div>
        <div v-for="e in elementsList" v-bind:key="e.id">
            <router-link :to=" '/detail/' + e.id ">
                <b-card :title="e.title">

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

    props: [
        'elementsList'
    ],
    
    data(){
        return {
            elements: []
        }
    }

}
</script>