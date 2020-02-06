<template>
  <div id="detail" v-if="product">
    <h1>{{product.name}}</h1>
    <h2>${{product.price | toCurrency}}</h2>
    <p>{{product.description}}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      product: 'website/productById'
    })
  },
  watch: {
    id: async function(newValue) {
      await this.fetchProduct(newValue);
    }
  },
  beforeMount: async function() {
    await this.fetchProduct(this.id);
  },
  destroyed: function() {
    this.resetProduct();
  },
  methods: {
    ...mapMutations({
      setLoading: 'app/SET_LOADING',
      resetProduct: 'website/RESET_PRODUCT'
    }),
    ...mapActions({
      getProduct: 'website/getProduct'
    }),
    fetchProduct: async function(productId) {
      try {
        this.setLoading(true);
        await this.getProduct(productId);
        this.setLoading(false);
      } catch (error) {
        throw error;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#detail
  height: 100%
h1
  text-transform: uppercase
</style>