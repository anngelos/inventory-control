import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    addNewProduct(state, product) {
      state.products.push(product);
    },

    removeProduct(state, index) {
      state.products.splice(index, 1);
    },

    updateProduct(state, { index, product }) {
      state.products.splice(index, 1, product);
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addNewProduct', product);
    },

    deleteProduct({ commit }, index) {
      commit('removeProduct', index);
    }
  },
  plugins: [
    createPersistedState({
      key: 'my-vuex-store',
      paths: ['products'],
    }),
  ],
});
