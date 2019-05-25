// state is a reserved word an HAVE to be named with it!!
const state = {
    counter: 0,
};
// getters is a reserved word an HAVE to be named with it!!
// getters are accessed in component with this.$store.getters.functionname
// They also can be mapped in the component with import { mapGetters } then used in an
// array in computed method. (see Result.vue)
const getters = {
    counter: state => {
        return state.counter;
    },
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks'
    },
};
// mutations is a reserved word an HAVE to be named with it!!
// !!! Mutation cannot be run asynchronously !!!
// To use muations asynchronously we need an in between layer called actions
const mutations = {
    incrementCounter: (state, payload) => {
        state.counter += payload;
    },
    decrementCounter: (state, payload) => {
        state.counter -= payload;
    },
};
// actions is a reserved word an HAVE to be named with it!!
// Actions can be run asynchronously! It takes context as an argument. With context.commit('mutationsName')
// we actually run the mutation!
// We also can destructure the context argument if we only need one property of the argument. like ({commit}). See decrement
// It also has a optional second argument usually called payload that can be passed on the call of the action
const actions = {
    increment: (context, payload) => {
        context.commit('incrementCounter', payload);
    },
    decrement: ({commit}, payload) => {
        commit('decrementCounter', payload);
    },
    asyncIncrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('incrementCounter', payload.by);
        },payload.duration);
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('decrementCounter', payload.by);
        },payload.duration);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};