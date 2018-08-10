<template>
  <div class='echarts'>
    <h2><router-link to="/">Go Back</router-link></h2>
    <IEcharts
      :option='option'
    />
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3'
import 'echarts-gl'

export default {
  name: 'Demo07',
  components: {
    IEcharts
  },
  data () {
    return {
      option: {
        grid3D: {},
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        series: [{
          type: 'scatter3D',
          symbolSize: 50,
          data: [[-1, -1, -1], [0, 0, 0], [1, 1, 1]],
          itemStyle: {
            opacity: 1
          }
        }]
      }
    }
  },
  methods: {
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
