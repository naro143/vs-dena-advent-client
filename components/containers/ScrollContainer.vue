<template>
  <div class="scrollContainer">
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/templates/default/Footer'

export default {
  name: 'ScrollContainer',
  components: { Footer },
}
</script>

<style scoped lang="sass">
.scrollContainer
  position: fixed
  overflow-y: scroll
  height: 100%
  width: 100%
  -webkit-overflow-scrolling: touch
</style>
