<template>
  <AppContainer>
    <Header />
    <nuxt />
  </AppContainer>
</template>
<script>
import AppContainer from '@/components/containers/AppContainer'
import Header from '@/components/templates/default/Header'

export default {
  components: { AppContainer, Header }
}
</script>
<style scoped lang="sass"></style>
