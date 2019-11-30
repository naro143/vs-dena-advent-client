<template>
  <div class="Today">
    <h2>今日の記事</h2>
    <div class="row row--shinsotsu">
      <h3>20卒内定者</h3>
    </div>
    <QiitaCard v-if="!!shinsotsu" :url="shinsotsu" />
    <div v-else class="empty">
      該当記事なし
    </div>
    <div class="row row--general">
      <h3>社員オールスター</h3>
    </div>
    <QiitaCard v-if="!!general" :url="general" />
    <div v-else class="empty">
      該当記事なし
    </div>
  </div>
</template>

<script>
import QiitaCard from '@/components/atoms/QiitaCard'

export default {
  name: 'Today',
  components: { QiitaCard },
  data: () => {
    return {
      shinsotsu: null,
      general: null
    }
  },
  mounted() {
    this.getQiita()
  },
  methods: {
    async getQiita() {
      await this.$axios.get('/api/likes').then((response) => {
        this.shinsotsu = response.data.shinsotsu
        this.general = response.data.general
      })
    }
  }
}
</script>

<style scoped lang="sass">
.Today
  padding: 0 10px
  .row
    display: flex
    align-items: center
    margin: 10px 0
    border-bottom: 2px solid
    width: 70%
    h3
      margin: 0
    a
      margin: 0 0 0 5px
    &--shinsotsu
      border-color: $color-shinsotsu
    &--general
      border-color: $color-general
  h2
    border-bottom: 4px solid $color-primary
  .empty
    display: flex
    align-items: center
    justify-content: center
    height: 120px
    border: 1px solid $color-primary
    border-radius: 4px
    font-size: 24px
</style>
