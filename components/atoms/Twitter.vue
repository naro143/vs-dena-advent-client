<template>
  <div class="Twitter">
    <h2>Twitter</h2>
    <a
      class="twitter-moment"
      href="https://twitter.com/i/moments/1333447615128563715?ref_src=twsrc%5Etfw"
    >
      Test
    </a>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  </div>
</template>

<script>
export default {
  name: 'Twitter',
}
</script>

<style scoped lang="sass">
.Twitter
  padding: 0 10px
  h2
    border-bottom: 4px solid $color-primary
</style>
