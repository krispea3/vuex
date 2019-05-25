import Vue from "vue";
import Vuex from "vuex";
// Import outsourced counter store
import counter from "./modules/counter";
// Import outsource actions. Use 'as whatevername'. ES6 will create an object whatevername which holds 
// all the actions from the actions.js file
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);
// Import store in main.js to make it available for the whole app.
export const store = new Vuex.Store({
    // state is a reserved word an HAVE to be named with it!!
    state: {
        value: 0,
    },
    // getters is a reserved word an HAVE to be named with it!!
    // getters are accessed in component with this.$store.getters.functionname
    // They also can be mapped in the component with import { mapGetters } then used in an
    // array in computed method. (see Result.vue)
    getters,
    // mutations is a reserved word an HAVE to be named with it!!
    // !!! Mutation cannot be run asynchronously !!!
    // To use muations asynchronously we need an in between layer called actions
    mutations,
    // actions is a reserved word an HAVE to be named with it!!
    // Actions can be run asynchronously! It takes context as an argument. With context.commit('mutationsName')
    // we actually run the mutation!
    // We also can destructure the context argument if we only need one property of the argument. like ({commit}). See decrement
    // It also has a optional second argument usually called payload that can be passed on the call of the action
    actions,
// Merging Outsourced counter store
    modules: {
        counter
    }
});