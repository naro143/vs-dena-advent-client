<template>
  <div class="Graph">
    <h2>vs 総合いいね数</h2>
    <bar-chart :chart-data="dataCollection" :options="options" />
  </div>
</template>

<script>
import BarChart from './BarChart.js'
export default {
  name: 'Graph',
  components: {
    BarChart,
  },
  data: () => {
    return {
      shinsotsu: 0,
      general: 0,
    }
  },
  computed: {
    dataCollection() {
      return {
        display: false,
        labels: ['20卒内定者', '社員オールスター'],
        datasets: [
          {
            label: '総合いいね数',
            data: [this.shinsotsu, this.general],
            backgroundColor: ['#DC0451', '#FDC82F'],
          },
        ],
      }
    },
    options() {
      const maxLikes = Math.max(this.shinsotsu, this.general)
      // maxGraphValue = 100(min), 200, ...
      const maxGraphValue = maxLikes + 100 - (maxLikes % 100)
      return {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                max: maxGraphValue,
                stepSize: maxGraphValue / 10,
                fontSize: 16,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                fontSize: 16,
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
      }
    },
  },
  mounted() {
    this.getQiita()
  },
  methods: {
    async getQiita() {
      await this.$axios
        .get('https://vs-dena-advent.appspot.com/likes')
        .then((response) => {
          this.shinsotsu = response.data.shinsotsu
          this.general = response.data.general
        })
    },
  },
}
</script>

<style scoped lang="sass">
.Graph
  h2
    margin-left: 10px
    margin-right: 10px
    border-bottom: 4px solid $color-primary
</style>
