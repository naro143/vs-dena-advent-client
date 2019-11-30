<template>
  <a :href="url" class="QiitaCard">
    <div class="image">
      <img
        src="https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png"
      />
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>
    </div>
  </a>
</template>

<script>
import parser from 'ogp-parser'

export default {
  name: 'QiitaCard',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      title: ''
    }
  },
  mounted() {
    this.getQiita()
  },
  methods: {
    async getQiita() {
      await parser(this.url, false)
        .then((data) => {
          console.log(data)
          this.title = data.title
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped lang="sass">
.QiitaCard
  display: flex
  height: 120px
  border: 1px solid $color-primary
  border-radius: 4px
  .image
    height: 120px
    width: 120px
    img
      height: 100%
      width: 100%
      object-fit: cover
  .content
    flex: 1
    display: flex
    flex-direction: column
    padding: 10px
    overflow: hidden
    .title
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 4
      overflow: hidden
      font-weight: bold
      color: #333
</style>
