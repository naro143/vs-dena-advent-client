<template>
  <div class="Twitter">
    <h2>Twitter</h2>
    <a href="https://twitter.com/hashtag/DeNA21AdCal?src=hashtag_click">
      #DeNA21AdCal
    </a>
    <a href="https://twitter.com/hashtag/DeNA20AdCal?src=hashtag_click">
      #DeNA20AdCal
    </a>
    <a href="https://twitter.com/hashtag/DeNA_AdCal?src=hashtag_click">
      #DeNA_AdCal
    </a>
    <a
      href="https://twitter.com/DeNAxTech?ref_src=twsrc%5Etfw"
      class="twitter-follow-button"
      data-size="large"
      data-lang="ja"
      data-show-count="false"
    >
      Follow @DeNAxTech
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
  a
    display: block
    margin: 10px 0
    color: $color-shinsotsu
    &:first-of-type
      color: $color-naitei
    &:last-of-type
      color: $color-general
</style>
