// We export named constants with the names of all the mutations
// In the store.js file we can import them with import * as whatevername from. ES6 will automatically create the names
export const updateValue = (state, payload) => {
    state.value = payload;
};