<template>
  <div class="Today">
    <h2>今日の記事</h2>
    <div class="row row--naitei">
      <h3>21卒内定者</h3>
    </div>
    <QiitaCard v-if="!!naitei && !!naitei.url" :data="naitei" />
    <div v-else class="empty">
      <p>該当の記事がないか未公開です。</p>
      <p class="small">※記事は毎朝7:00頃に公開されます。</p>
    </div>
    <div class="row row--shinsotsu">
      <h3>20新卒</h3>
    </div>
    <QiitaCard v-if="!!shinsotsu && !!shinsotsu.url" :data="shinsotsu" />
    <div v-else class="empty">
      <p>該当の記事がないか未公開です。</p>
      <p class="small">※記事は毎朝7:00頃に公開されます。</p>
    </div>
    <div class="row row--general">
      <h3>社員オールスター</h3>
    </div>
    <QiitaCard v-if="!!general && !!general.url" :data="general" />
    <div v-else class="empty">
      <p>該当の記事がないか未公開です。</p>
      <p class="small">※記事は毎朝7:00頃に公開されます。</p>
    </div>
    <h2>カレンダー</h2>
    <div class="row row--naitei">
      <h3>21卒内定者</h3>
    </div>
    <QiitaCard :data="naiteiCalendar" />
    <div class="row row--shinsotsu">
      <h3>20新卒</h3>
    </div>
    <QiitaCard :data="shinsotsuCalendar" />
    <div class="row row--general">
      <h3>社員オールスター</h3>
    </div>
    <QiitaCard :data="generalCalendar" />
  </div>
</template>

<script>
import moment from 'moment'
import QiitaCard from '@/components/atoms/QiitaCard'

export default {
  name: 'Today',
  components: { QiitaCard },
  data: () => {
    return {
      naitei: null,
      shinsotsu: null,
      general: null,
      naiteiCalendar: {
        title: 'DeNA 21 新卒 Advent Calendar 2020',
        url: 'https://qiita.com/advent-calendar/2020/dena-21-shinsotsu',
      },
      shinsotsuCalendar: {
        title: 'DeNA 20 新卒 Advent Calendar 2020',
        url: 'https://qiita.com/advent-calendar/2020/dena-20-shinsotsu',
      },
      generalCalendar: {
        title: 'DeNA Advent Calendar 2020',
        url: 'https://qiita.com/advent-calendar/2020/dena',
      },
    }
  },
  mounted() {
    const day = moment(new Date()).format('D')
    this.getQiita(day - 1)
  },
  methods: {
    async getQiita(index) {
      await this.$axios
        .get('https://vs-dena-advent-298406.appspot.com/articles')
        .then((response) => {
          this.naitei = response.data.naitei[index]
          this.shinsotsu = response.data.shinsotsu[index]
          this.general = response.data.general[index]
        })
    },
  },
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
    &--naitei
      border-color: $color-naitei
    &--shinsotsu
      border-color: $color-shinsotsu
    &--general
      border-color: $color-general
  h2
    border-bottom: 4px solid $color-primary
  .empty
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 0 10px
    height: 120px
    border: 1px solid $color-primary
    border-radius: 4px
    font-size: 20px
    .small
      font-size: 16px
</style>
