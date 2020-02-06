import axios from "axios";

const state = {
  products: [],
  product: null
};

const getters = {
  allProducts: state => state.products,
  productById: state => state.product
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
  },
  SET_PRODUCT: (state, product) => {
    state.product = product;
  },
  RESET_PRODUCT: state => {
    state.product = null;
  }
};

const actions = {
  getProducts: async (context) => {
    try {
      const resp = await axios.get('/api/products');
      context.commit('SET_PRODUCTS', resp.data);
    } catch (error) {
      throw error;
    }
  },
  getProduct: async (context, prodId) => {
    try {
      const resp = await axios.get(`/api/products/${prodId}`);
      context.commit('SET_PRODUCT', resp.data);
    } catch (error) {
      throw error;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}