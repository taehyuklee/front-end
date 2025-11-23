<template>
  <div class="coin_title">{{ coinTitle }}</div>
  <div id="main" ref="chartRef" class="w-full h-[100vh]"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue"
import { useUiStore } from "@/stores/ui"
import * as echarts from "echarts"

const chartRef = ref(null)
let chartInstance = null

const uiStore = useUiStore()

const upColor = "#00da3c"
const downColor = "#ec0000"

const props = defineProps({
  rawData: Array,
  coinTitle: String,
  selectedDate: Array,
  timeType: { type: String, default: "day" } // 'day' | 'hour'
})

const coinTitle = ref(props.coinTitle ?? "")

/* -------------------------------------------------------------
 * Utility
 * ------------------------------------------------------------- */

function splitData(rawData) {
  const categoryData = []
  const values = []
  const volumes = []

  for (let i = 0; i < rawData.length; i++) {
    const row = rawData[i]
    categoryData.push(row[0])
    values.push([row[1], row[2], row[3], row[4]])
    volumes.push([i, row[5], row[1] > row[2] ? 1 : -1])
  }
  return { categoryData, values, volumes }
}

function calculateMA(dayCount, data) {
  const result = []

  for (let i = 0; i < data.values.length; i++) {
    if (i < dayCount) {
      result.push("-")
      continue
    }
    let sum = 0
    for (let j = 0; j < dayCount; j++) sum += data.values[i - j][1]
    result.push((sum / dayCount).toFixed(2))
  }
  return result
}

function getLast30DaysRange(categoryData) {
  const endIndex = categoryData.length - 1
  const endDate = new Date(categoryData[endIndex])
  const startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - 30)

  const startIndex = categoryData.findIndex(
    (d) => new Date(d) >= startDate
  )

  return {
    startIndex: Math.max(0, startIndex),
    endIndex
  }
}

/* -------------------------------------------------------------
 * Option Builders
 * ------------------------------------------------------------- */

function createBaseOption(data) {
  return {
    animation: false,
    legend: {
      bottom: 10,
      left: "center",
      data: [coinTitle.value, "MA5", "MA10", "MA20", "MA30"]
    },
    tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
    axisPointer: { link: [{ xAxisIndex: "all" }] },
    toolbox: {
      feature: {
        dataZoom: { yAxisIndex: false },
        brush: { type: ["lineX", "clear"] }
      }
    },
    brush: { xAxisIndex: "all", brushLink: "all" },
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
      { left: "10%", right: "8%", height: "50%" },
      { left: "10%", right: "8%", top: "63%", height: "16%" }
    ],
    xAxis: [
      {
        type: "category",
        data: data.categoryData,
        boundaryGap: false,
        min: "dataMin",
        max: "dataMax"
      },
      {
        type: "category",
        gridIndex: 1,
        data: data.categoryData,
        boundaryGap: false,
        axisTick: { show: false },
        axisLabel: { show: false },
        min: "dataMin",
        max: "dataMax"
      }
    ],
    yAxis: [{ scale: true }, { scale: true, gridIndex: 1 }],
    dataZoom: [
      { type: "inside", xAxisIndex: [0, 1], start: 70, end: 100 },
      {
        show: true,
        type: "slider",
        xAxisIndex: [0, 1],
        top: "85%",
        start: 70,
        end: 100
      }
    ],
    series: [
      { name: coinTitle.value, type: "candlestick", data: data.values },
      { name: "MA5", type: "line", data: calculateMA(5, data), smooth: true },
      { name: "MA10", type: "line", data: calculateMA(10, data), smooth: true },
      { name: "MA20", type: "line", data: calculateMA(20, data), smooth: true },
      { name: "MA30", type: "line", data: calculateMA(30, data), smooth: true },
      {
        name: "Volume",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data.volumes
      }
    ]
  }
}

function applyDayZoom(option) {
  option.dataZoom[0].start = 70
  option.dataZoom[0].end = 100
  option.dataZoom[1].start = 70
  option.dataZoom[1].end = 100
}

function applyHourZoom(option, data) {
  const { startIndex, endIndex } = getLast30DaysRange(data.categoryData)

  option.dataZoom = [
    {
      type: "inside",
      xAxisIndex: [0, 1],
      startValue: startIndex,
      endValue: endIndex
    },
    {
      show: true,
      type: "slider",
      xAxisIndex: [0, 1],
      top: "85%",
      startValue: startIndex,
      endValue: endIndex
    }
  ]
}

/* -------------------------------------------------------------
 * Lifecycle
 * ------------------------------------------------------------- */

onMounted(() => {
  const data = splitData(props.rawData)
  chartInstance = echarts.init(chartRef.value)

  const option = createBaseOption(data)

  if (props.timeType === "hour") applyHourZoom(option, data)
  else applyDayZoom(option)

  chartInstance.setOption(option)

  /* resize */
  const resizeHandler = () => chartInstance?.resize()
  window.addEventListener("resize", resizeHandler)

  /* sidebar animation → smoothly resize */
  watch(
    () => uiStore.isSidebarClosed,
    async () => {
      await nextTick()
      const start = performance.now()
      const duration = 400

      function animateResize(ts) {
        if (ts - start < duration) {
          chartInstance?.resize()
          requestAnimationFrame(animateResize)
        }
      }
      requestAnimationFrame(animateResize)
    }
  )

  /* cleanup */
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler)
    chartInstance?.dispose()
  })
})

/* -------------------------------------------------------------
 * Watchers
 * ------------------------------------------------------------- */

watch(
  () => props.rawData,
  (newData) => {
    if (!chartInstance) return
    const data = splitData(newData)

    chartInstance.setOption({
      xAxis: [{ data: data.categoryData }, { data: data.categoryData }],
      series: [
        { data: data.values },
        { data: calculateMA(5, data) },
        { data: calculateMA(10, data) },
        { data: calculateMA(20, data) },
        { data: calculateMA(30, data) },
        { data: data.volumes }
      ]
    })
  },
  { deep: true }
)

watch(
  () => props.coinTitle,
  (val) => {
    coinTitle.value = val
    chartInstance?.setOption({
      series: [{ name: val }],
      legend: { data: [val, "MA5", "MA10", "MA20", "MA30"] }
    })
  }
)

watch(
  () => props.selectedDate,
  (newDate) => {
    if (!chartInstance || !newDate?.length) return

    const start = newDate[0] instanceof Date ? newDate[0].toISOString().slice(0, 10) : newDate[0]
    const end = newDate[1] instanceof Date ? newDate[1].toISOString().slice(0, 10) : newDate[1]

    chartInstance.setOption({
      dataZoom: [
        { type: "inside", xAxisIndex: [0, 1], startValue: start, endValue: end },
        { show: true, type: "slider", xAxisIndex: [0, 1], top: "85%", startValue: start, endValue: end }
      ]
    })
  }
)
</script>

<style scoped>
#main {
  width: 100%;
  height: 100vh;
}
.coin_title {
  font-size: 30px;
}
</style>
