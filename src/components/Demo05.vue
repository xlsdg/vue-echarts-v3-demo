<template>
  <div class="echarts">
    <h2><router-link to="/">Go Back</router-link></h2>
    <div>
      <button @click="doLoading">Random</button>
    </div>
    <div class="echart" :style="style">
      <IEcharts
        :option="bar"
        :loading="loading"
        :resizable="true"
        @ready="onReady"
        @resize="onResize"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
  import IEcharts from 'vue-echarts-v3/src/full.js'

  export default {
    name: 'Demo05',
    components: {
      IEcharts
    },
    data: () => ({
      loading: true,
      style: {},
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
      }
    }),
    methods: {
      doLoading () {
        const that = this
        let data = []
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min))
        }
        that.loading = !that.loading
        that.bar.series[0].data = data
        that.style = {
          width: Math.floor(Math.random() * (1024 + 1 - 400) + 400) + 'px',
          height: Math.floor(Math.random() * (768 + 1 - 200) + 200) + 'px'
        }
      },
      onReady (ins) {
        console.dir(ins)
      },
      onResize (width, height) {
        console.log(width, height)
      },
      onClick (event, instance, echarts) {
        console.log(arguments)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .echarts {
    width: 1024px;
    height: 768px;
    margin: 0 auto;
  }
  .echart {
    width: 600px;
    height: 400px;
    border: 1px solid #000;
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
