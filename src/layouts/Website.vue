<template>
  <div id="website">
    <header>
      <NavMenu :navItems="navItems" />
    </header>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import NavItems from '@/mock/nav.json';
import NavMenu from '@/components/website/NavMenu.vue';

export default {
  components: {
    NavMenu
  },
  data: function() {
    return {
      navItems: NavItems.mainNav
    };
  }
}
</script>

<style lang="sass" scoped>
#website
  height: 100vh
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 75px 85vh auto
  grid-template-areas: 'head' 'body' 'foot'
  overflow-y: hidden
header
  grid-area: head
  display: flex
  justify-content: center
  align-items: center
main
  grid-area: body
  height: 100%
footer
  grid-area: foot
</style>