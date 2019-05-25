// We export named constants with the names of all the getters
// In the store.js file we can import them with import * as whatevername from. ES6 will automatically create the names
export const value = state => {
    return state.value;
};