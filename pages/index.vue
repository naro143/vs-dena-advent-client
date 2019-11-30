<template>
  <ScrollContainer class="scroll">
    <div class="container">
      <Graph />
      <Today />
      <Twitter />
    </div>
  </ScrollContainer>
</template>

<script>
import Graph from '@/components/atoms/Graph'
import Today from '@/components/atoms/Today'
import Twitter from '@/components/atoms/Twitter'
import ScrollContainer from '@/components/containers/ScrollContainer'

export default {
  name: 'Index',
  components: {
    Graph,
    Today,
    Twitter,
    ScrollContainer
  },
  head: {
    bodyAttrs: {
      class: 'app'
    }
  }
}
</script>

<style scoped lang="sass">
.container
  @media screen and (min-width: $media-pc)
    max-width: 700px
    margin: 0 auto
</style>
