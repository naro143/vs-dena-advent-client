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
    BarChart
  },
  data: () => {
    return {
      shinsotsu: 0,
      general: 0
    }
  },
  computed: {
    dataCollection() {
      return {
        display: false,
        labels: ['20新卒', '社員オールスター'],
        datasets: [
          {
            label: '総合いいね数',
            data: [this.shinsotsu, this.general],
            backgroundColor: ['#DC0451', '#FDC82F']
          }
        ]
      }
    },
    options() {
      return {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10
              }
            }
          ]
        },
        layout: {
          padding: {
            left: 10,
            right: 10
          }
        }
      }
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
.Graph
  h2
    margin-left: 10px
    margin-right: 10px
    border-bottom: 4px solid $color-primary
</style>
