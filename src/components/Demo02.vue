<template>
  <div class="echarts">
    <h2><router-link to="/">Go Back</router-link></h2>
    <IEcharts
      :option="map"
      theme="macarons"
      @ready="onReady"
      @click="onClick"
    />
    <IEcharts
      :option="bar"
      theme="macarons"
    />
  </div>
</template>

<script>
  import IEcharts from 'vue-echarts-v3/src/full.js'
  import World from 'echarts/map/json/world.json'
  import 'echarts/theme/macarons.js'

  IEcharts.registerMap('world', World)

  export default {
    name: 'Demo02',
    components: {
      IEcharts
    },
    data () {
      // const that = this
      return {
        ins: null,
        bar: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        map: {
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          geo: [{
            name: '世界地图',
            type: 'map',
            map: 'world',
            roam: true,
            selectedMode: 'single',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            }
          }],
          series: []
        }
      }
    },
    methods: {
      onReady (instance) {
        this.ins = instance
      },
      onClick (event, instance, echarts) {
        console.log(this.ins.getDataURL())
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
