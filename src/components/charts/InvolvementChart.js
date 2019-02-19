import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient: null
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
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    // background-image: linear-gradient(to top, #8b1a2a 0%, #ff0713 100%);
    this.gradient.addColorStop(0, '#ff0713')
    this.gradient.addColorStop(1, '#8b1a2a')

    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Вовлеченность',
          backgroundColor: this.gradient,
          data: this.data,
          pointBackgroundColor: '#ff0713',
          pointRadius: 0,
          pointBorderColor: 'white',
          pointHoverBorderWidth: 4,
          pointHoverRadius: 7,
          pointHitRadius: 60
        }
      ]
    },
    {
      animation: {
        duration: 2000,
        easing: 'easeInOutCirc'
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scales: {
        yAxes: [{
          ticks: {
            // display: false,
            max: 100,
            stepSize: 20,
            callback: function (value, index, values) {
              return value + '%'
            }
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.2)',
            zeroLineWidth: 0,
            drawBorder: false,
            drawTicks: false
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'white',
            fontSize: 14
          },
          gridLines: {
            display: false
          }
        }]
      },
      tooltips: {
        // background-image: linear-gradient(-3deg, #c42037 0%, #ff030f 100%);
        backgroundColor: '#ff030f',
        bodyFontSize: 14,
        titleFontSize: 0,
        titleMarginBottom: 0,
        displayColors: false,
        xPadding: 20,
        yPadding: 6,
        cornerRadius: 10,
        footerFontSize: 10,
        callbacks: {
          label (tooltipItem) {
            return Math.round(tooltipItem.yLabel * 100) / 100 + '%'
          }
        }
      }
    })
  }
}
