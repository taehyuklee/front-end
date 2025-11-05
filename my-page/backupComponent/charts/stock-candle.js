// import * as echarts from 'echarts';
import axios from 'axios';
// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

const upColor = '#00da3c';
const downColor = '#ec0000';

function splitData(rawData) {
  let categoryData = [];
  let values = [];
  let volumes = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i][0]);
    values.push([rawData[i][1], rawData[i][2], rawData[i][3], rawData[i][4], rawData[i][5], rawData[i][6]]);
    volumes.push([i, rawData[i][4], rawData[i][1] > rawData[i][2] ? 1 : -1]);
  }
  return { categoryData, values, volumes };
}

function calculateMA(dayCount, data) {
  var result = [];
  for (var i = 0, len = data.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data.values[i - j][1];
    }
    result.push(+(sum / dayCount).toFixed(3));
  }
  return result;
}

function setData(rawData) {
  var data = splitData(rawData);

  option = {
    animation: false,
    legend: {
      bottom: 10,
      left: 'center',
      data: ['Dow-Jones index', 'XRP', 'MA5', 'MA10', 'MA20', 'MA30']
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },

    axisPointer: {
      link: [{ xAxisIndex: 'all' }]
    },

    toolbox: {
      feature: {
        dataZoom: { yAxisIndex: false },
        brush: { type: ['lineX', 'clear'] }
      }
    },

    brush: { xAxisIndex: 'all', brushLink: 'all', outOfBrush: { colorAlpha: 0.1 } },

    visualMap: {
      show: false,
      seriesIndex: 5,
      dimension: 2,
      pieces: [
        { value: 1, color: downColor },
        { value: -1, color: upColor }
      ]
    },
    grid: [
      { left: '10%', right: '8%', height: '50%' },
      { left: '10%', right: '8%', top: '63%', height: '16%' }
    ],

    xAxis: [
      {
        type: 'category',
        data: data.categoryData,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: 'dataMin',
        max: 'dataMax'
      },

      {
        type: 'category',
        gridIndex: 1,
        data: data.categoryData,
        boundaryGap: false,
        axisTick: { show: false },
        axisLabel: { show: false }
      }
    ],

    yAxis: [
      { scale: true },
      { scale: true, gridIndex: 1, axisLabel: { show: false } }
    ],

    dataZoom: [
      { type: 'inside', xAxisIndex: [0, 1], start: 98, end: 100 },
      { show: true, xAxisIndex: [0, 1], type: 'slider', top: '85%', start: 98, end: 100 }
    ],

    series: [
      { name: 'Dow-Jones index', type: 'candlestick', data: data.values },
      { name: 'XRP', type: 'candlestick', data: data.values },
      { name: 'MA5', type: 'line', data: calculateMA(5, data), smooth: true },
      { name: 'MA10', type: 'line', data: calculateMA(10, data), smooth: true },
      { name: 'MA20', type: 'line', data: calculateMA(20, data), smooth: true },
      { name: 'MA30', type: 'line', data: calculateMA(30, data), smooth: true },
      { name: 'Volume', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: data.volumes }
    ]
  };

  myChart.setOption(option);
}

// ✅ axios + async 적용
async function loadData() {
  const res = await axios.get(`${ROOT_PATH}/data/asset/data/stock-DJI.json`);
  setData(res.data);
}

// 실행
loadData();
