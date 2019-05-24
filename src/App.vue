<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto">
                <h1>Vuex</h1>
                <!-- With state in App.vue passed as props -->
                <!-- <app-result :counter="counter"></app-result> -->

                <!-- With central state managment in store.js -->
                <app-result></app-result>
                <hr>
                <!-- With state in App.vue passed as props -->
                <!-- <app-counter @updated="counter += $event"></app-counter> -->

                <!-- With central state managment in store.js -->
                <app-counter></app-counter>
                <hr>
                <input type="text" v-model='value'>
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },

        // For v-model to work we need to use get and set on the computed method! 
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }   
            } 
        },
        components: {
            appCounter: Counter,
            appResult: Result,
        }
    }
</script>