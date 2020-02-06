<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.card
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: auto 1fr auto
  grid-template-areas: 'head' 'body' 'foot'
  gap: 1rem 0
  padding-bottom: 1.5rem
  border: 1px solid $white
  border-radius: 5px
  transition: all 0.1s ease-in-out
  &:hover
    border: 1px solid rgba($light_gray, 0.3)
    box-shadow: 20px 20px 10px 0px rgba(0,0,0,0.20)
header
  grid-area: head
main
  grid-area: body
  display: flex
footer
  grid-area: foot
main, footer
  padding: 0 2rem
</style>