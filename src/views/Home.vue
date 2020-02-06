<template>
  <div id="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <aside class="catalog">
      <div class="card-list">
        <Card
        v-for="product in allProducts"
        :key="product.id">
          <div class="body">
            <h1>{{product.name}}</h1>
            <p>${{product.price | toCurrency}}</p>
          </div>
          <template #footer>
            <div class="actions">
              <router-link
              :to="{
                name: 'product detail',
                params: {
                  id: product.id
                }
              }"
              class="link">Details</router-link>
              <button
              type="button">Add to Cart</button>
            </div>
          </template>
        </Card>
      </div>
    </aside>
    <aside class="details">
      <router-view/>
    </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations, mapActions } from 'vuex';
const Card = () => import('@/components/website/ProductCard.vue');

export default {
  name: 'home',
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      allProducts: 'website/allProducts'
    })
  },
  beforeMount: async function() {
    this.setLoading(true);
    await this.getProducts();
    this.setLoading(false);
  },
  methods: {
    ...mapMutations({
      setLoading: 'app/SET_LOADING'
    }),
    ...mapActions({
      getProducts: 'website/getProducts'
    })
  }
}
</script>

<style lang="sass" scoped>
#home
  width: 100%
  height: 100%
  display: flex
  align-items: flex-start
#home > aside
  height: 100%
.catalog
  width: 55%
  height: 100%
  overflow-y: scroll
  margin: 0 3rem
  .card-list
    padding: 3rem 0
    padding-right: 3rem
    font-size: 0.9rem
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 3rem
  .body > h1
    margin: 0.5rem 0
    font-size: 1.2rem
    text-transform: capitalize
  .body > p
    margin: 0
  .actions
    display: flex
    align-items: center
    justify-content: flex-end
  .actions > *
    margin-left: 1rem
  .actions > button
    font-family: $text-font
    font-weight: bold
    padding: 0.5rem 0.8rem
    background-color: $red
    color: $white
    border: 1px solid $red
    border-radius: 5px
    cursor: pointer
.details
  width: 45%
  height: 100%
</style>