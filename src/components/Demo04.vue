<template>
  <div class='echarts'>
    <h2><router-link to="/">Go Back</router-link></h2>
    <IEcharts
      :option='wordcloud'
      @ready='onReady'
    />
  </div>
</template>

<script>
// import Vue from 'vue'
import IEcharts from 'vue-echarts-v3/src/lite.js'
// import IEcharts from '../vue-echarts.js'
// import * as ECharts from 'echarts'
// import Wrapper from '../wrap.js'
import 'echarts-wordcloud'

// console.log(require('../vue-echarts.js'))
// import IEcharts from '../full.js'

// const IEcharts = Wrapper(ECharts)
// Vue.use(IEcharts)
// console.log(IEcharts)
export default {
  name: 'Demo04',
  components: {
    IEcharts
  },
  data () {
    // const that = this
    return {
      ins: null,
      echarts: null,
      wordcloud: {}
    }
  },
  methods: {
    onReady (instance, echarts) {
      const that = this
      that.ins = instance
      that.echarts = echarts

      that.wordcloud = {
        tooltip: {},
        series: [
          {
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: 'pentagon',
            width: 600,
            height: 400,
            drawOutOfBound: true,
            textStyle: {
              normal: {
                color: function () {
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') +
                    ')'
                  )
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: [
              {
                name: 'Sam S Club',
                value: 10000,
                textStyle: {
                  normal: {
                    color: 'black'
                  },
                  emphasis: {
                    color: 'red'
                  }
                }
              },
              {
                name: 'Macys',
                value: 6181
              },
              {
                name: 'Amy Schumer',
                value: 4386
              },
              {
                name: 'Jurassic World',
                value: 4055
              },
              {
                name: 'Charter Communications',
                value: 2467
              },
              {
                name: 'Chick Fil A',
                value: 2244
              },
              {
                name: 'Planet Fitness',
                value: 1898
              },
              {
                name: 'Pitch Perfect',
                value: 1484
              },
              {
                name: 'Express',
                value: 1112
              },
              {
                name: 'Home',
                value: 965
              },
              {
                name: 'Johnny Depp',
                value: 847
              },
              {
                name: 'Lena Dunham',
                value: 582
              },
              {
                name: 'Lewis Hamilton',
                value: 555
              },
              {
                name: 'KXAN',
                value: 550
              },
              {
                name: 'Mary Ellen Mark',
                value: 462
              },
              {
                name: 'Farrah Abraham',
                value: 366
              },
              {
                name: 'Rita Ora',
                value: 360
              },
              {
                name: 'Serena Williams',
                value: 282
              },
              {
                name: 'NCAA baseball tournament',
                value: 273
              },
              {
                name: 'Point Break',
                value: 265
              }
            ]
          }
        ]
      }
    }
  }
  // beforeMount () {
  //   const that = this
  // },
  // mounted () {
  //   const that = this
  // },
  // beforeDestroy () {
  //   const that = this
  // }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .echarts {
    width: 800px;
    height: 800px;
    margin: 0 auto;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
