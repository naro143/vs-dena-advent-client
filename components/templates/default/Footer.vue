<template>
  <footer class="Footer">
    <p>@vs DeNA Advent Calendar</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="sass">
$footer_height: 28px
.Footer
  height: $footer_height
  margin: 0 0 56px
  background: $color-primary
  display: flex
  align-items: center
  justify-content: center
  color: white
  font-size: small
</style>
