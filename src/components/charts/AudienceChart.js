import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      gradient: null,
      chartColors: []
    }
  },
  props: {
    labels: {
      required: true,
      type: Array
    },
    data: {
      required: true,
      type: Array
    },
    colors: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Title'
    }
  },
  mounted () {
    if (!this.colors.length) {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(0, '#ff0713')
      this.gradient.addColorStop(1, '#8b1a2a')

      this.chartColors = this.gradient
    } else {
      this.chartColors = this.colors
    }

    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: this.chartColors,
          data: this.data
        }
      ]
    },
    {
      animation: {
        duration: 5000
      },
      responsive: true,
      maintainAspectRatio: false,
      // legend: false,
      tooltips: {
        // background-image: linear-gradient(-3deg, #c42037 0%, #ff030f 100%);
        bodyFontColor: '#ff030f',
        backgroundColor: 'white',
        bodyFontSize: 14,
        titleFontSize: 0,
        titleMarginBottom: 0,
        displayColors: false,
        xPadding: 20,
        yPadding: 6,
        cornerRadius: 10,
        footerFontSize: 10
      },
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: this.title
      }
    })
  }
}
