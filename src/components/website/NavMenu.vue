<template>
  <nav>
    <router-link
    v-for="(item, index) in navItems"
    :key="index"
    :to="{
      name: item.route
    }">{{item.name}}</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.router-link-active
  color: $dark_gray
.router-link-exact-active
  color: $black
</style>