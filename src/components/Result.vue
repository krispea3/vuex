<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>The doubled Counter is: {{ doubleCounter }}</p>
        <p>The stringed Counter is: {{ stringCounter }}</p>
    </div>
</template>

<script>
    // with this import we can use the getters in computed methods as an array
    import { mapGetters } from "vuex";

    export default {
        // Using mapped getters
        // If used with other computed methods we need to detructure the array with ...mapGetters
        // The values in the array are the names of the getter method in store.js
        // Now we can access them directly in html {{ }} with the name
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            counter() {
                // need to access counter.counter because the store.js has been split up in counter.js
                return this.$store.state.counter.counter;
            },
        }
    }
        // with state in App.vue passed as props
        // props: ['counter']

        // With state stored centrally in vuex store
        // computed: {
        //     counter() {
        //         return this.$store.state.counter;
        //     }
        // }
        //     doubledCounter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     stringedCounter() {
        //         return this.$store.getters.stringCounter;
        //     },
    // }
</script>