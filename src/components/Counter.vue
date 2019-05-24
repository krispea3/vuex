<template>
    <div>
        <!-- Using methods to change counter with $store.commit -->
        <!-- <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary ml-3" @click="decrement">Decrement</button> -->

        <!-- Using mappedMutations -->
        <!-- <button class="btn btn-primary" @click="incrementCounter">Increment</button>
        <button class="btn btn-primary ml-3" @click="decrementCounter">Decrement</button> -->

        <!-- Using mappedActions with payload-->
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary ml-3" @click="decrement(50)">Decrement</button>
        <br>
        <!-- Actions can only receive 1 payload argument. If we need more we need to pass an object  -->
        <button class="btn btn-primary mt-3" @click="asyncIncrement({by: 100, duration: 500})">Async Increment</button>
        <button class="btn btn-primary mt-3 ml-3" @click="asyncDecrement({by: 50, duration: 1000})">Async Decrement</button>


    </div>
</template>

<script>
    // Same as mapGetters (see Result.vue for more details)
    // Mutations in components should only be done if the whole App doesn't have asynchronous tasks!!
    // As soon we use asynchronous tasks we should only use Actions that will commit the mutations!!
    // import { mapMutations } from "vuex";
    import { mapActions } from "vuex";
    export default {
        methods: {
            // mapActions is the prefered way. Can run asynchronously
            // mapActions create a function in the background that can receive an argument. Usually called payload
            // It also can be called by this.$store.dispatch('actionName', payload)
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement',
            ]),

            // mapMutations: Only use in synchronous tasks!!!
            // ...mapMutations([
            //     'incrementCounter',
            //     'decrementCounter'
            // ]),

            // increment() {
            //     // Using mutations from central store.
            //     // We access the store $store and use commit function. The function name has to be passed as string!
            //     this.$store.commit('incrementCounter')
                
            //     // Using central store from vuex (see store.js file)
            //     // this.$store.state.counter++;

            //     // Using local state in App.vue
            //     // this.$emit('updated', 1);
            // },
            // decrement() {
            //     // Using mutations from central store.
            //     // We access the store $store and use commit function. The function name has to be passed as string!
            //     this.$store.commit('decrementCounter')

            //     // Using central store from vuex (see store.js file)
            //     // this.$store.state.counter--;

            //     // Using local state in App.vue
            //     // this.$emit('updated', -1);
            // }
        }
    }
</script>