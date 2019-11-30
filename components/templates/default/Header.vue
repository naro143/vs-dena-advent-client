<template>
  <header class="Header">
    <img class="Header__logo" src="/logo-dena-white.png" alt="" />
    <h1 class="Header__title">
      vs DeNA Advent Calendar
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="sass">
$header_height: 56px
.Header
  position: fixed
  top: 0
  left: 0
  height: $header_height
  width: 100vw
  display: flex
  align-items: center
  background-color: $color-primary
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)
  z-index: 100
  &__logo
    margin: 0 10px
  &__title
    font-size: 18px
    line-height: 23px
    white-space: nowrap
    color: #fff
    font-weight: 300
</style>
