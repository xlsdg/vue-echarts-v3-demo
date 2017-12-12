<template>
  <div class="echarts">
    <h2><router-link to="/">Go Back</router-link></h2>
    <IEcharts
      :option="option"
      @ready="onReady"
    />
  </div>
</template>

<script>
  import IEcharts from 'vue-echarts-v3/src/full.js'

  const symbolSize = 20
  const data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]]

  export default {
    name: 'Demo01',
    components: {
      IEcharts
    },
    data () {
      // const that = this
      return {
        ins: null,
        echarts: null,
        option: {
          title: {
            text: 'Try Dragging these Points'
          },
          tooltip: {
            triggerOn: 'none',
            formatter: function (params) {
              return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2)
            }
          },
          grid: {
          },
          xAxis: {
            min: -100,
            max: 80,
            type: 'value',
            axisLine: {onZero: false}
          },
          yAxis: {
            min: -30,
            max: 60,
            type: 'value',
            axisLine: {onZero: false}
          },
          dataZoom: [
            {
              type: 'slider',
              xAxisIndex: 0,
              filterMode: 'empty'
            },
            {
              type: 'slider',
              yAxisIndex: 0,
              filterMode: 'empty'
            },
            {
              type: 'inside',
              xAxisIndex: 0,
              filterMode: 'empty'
            },
            {
              type: 'inside',
              yAxisIndex: 0,
              filterMode: 'empty'
            }
          ],
          series: [
            {
              id: 'a',
              type: 'line',
              smooth: true,
              symbolSize: symbolSize,
              data: data
            }
          ]
        }
      }
    },
    methods: {
      onReady (instance, echarts) {
        const that = this
        that.ins = instance
        that.echarts = echarts

        const updatePosition = function () {
          that.ins.setOption({
            graphic: that.echarts.util.map(data, function (item, dataIndex) {
              return {
                position: that.ins.convertToPixel('grid', item)
              }
            })
          })
        }

        const showTooltip = function (dataIndex) {
          that.ins.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: dataIndex
          })
        }

        const hideTooltip = function (dataIndex) {
          that.ins.dispatchAction({
            type: 'hideTip'
          })
        }

        const onPointDragging = function (dataIndex, dx, dy) {
          data[dataIndex] = that.ins.convertFromPixel('grid', this.position)
          // Update data
          that.ins.setOption({
            series: [{
              id: 'a',
              data: data
            }]
          })
        }

        setTimeout(function () {
          // Add shadow circles (which is not visible) to enable drag.
          that.ins.setOption({
            graphic: that.echarts.util.map(data, function (item, dataIndex) {
              return {
                type: 'circle',
                position: that.ins.convertToPixel('grid', item),
                shape: {
                  cx: 0,
                  cy: 0,
                  r: symbolSize / 2
                },
                invisible: true,
                draggable: true,
                ondrag: that.echarts.util.curry(onPointDragging, dataIndex),
                onmousemove: that.echarts.util.curry(showTooltip, dataIndex),
                onmouseout: that.echarts.util.curry(hideTooltip, dataIndex),
                z: 100
              }
            })
          })
        }, 0)

        window.addEventListener('resize', updatePosition)

        that.ins.on('dataZoom', updatePosition)
      }
    }
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
