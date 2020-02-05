<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button
    type="submit"
    @click="createProduct">
      Create Product
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      form: {
        name: 'test product',
        description: 'this is a test product',
        price: 50.00
      }
    };
  },
  beforeMount: async function() {
    await this.getProducts();
  },
  methods: {
    getProducts: async function() {
      try {
        const resp = await axios.get('/api/products');
        // eslint-disable-next-line
        console.log(resp);
      } catch (error) {
        throw error;
      }
    },
    createProduct: async function() {
      try {
        const resp = await axios.post('/api/products', this.form);
        // eslint-disable-next-line
        console.log(resp);
      } catch (error) {
        throw error;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
