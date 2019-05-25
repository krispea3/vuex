// We export named constants with the names of all the actions
// In the store.js file we can import them with import * from. ES6 will automatically create the names
export const updateValue = ({commit}, payload) => {
    commit('updateValue', payload);
};

// export const action2 = () => {

// };