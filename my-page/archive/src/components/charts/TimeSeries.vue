<template>
    <div id="main" ref="chartRef" class="w-full h-[100vh]"></div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import * as echarts from 'echarts'

    const chartRef = ref(null)
    let chartInstance = null

    onMounted(() => {
    chartInstance = echarts.init(chartRef.value)

    const formatTime = echarts.time.format
    const _data = generateData1()

    const option = {
        useUTC: true,
        title: {
            text: 'Coin Time Series',
            left: 'center'
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        xAxis: [
        {
            type: 'time',
            interval: 1000 * 60 * 30,
            axisLabel: {
            showMinLabel: true,
            showMaxLabel: true,
            formatter: (value, index, extra) => {
                if (!extra || !extra.break) {
                return formatTime(value, '{HH}:{mm}', true)
                }
                if (extra.break.type === 'start') {
                return (
                    formatTime(extra.break.start, '{HH}:{mm}', true) +
                    '/' +
                    formatTime(extra.break.end, '{HH}:{mm}', true)
                )
                }
                return ''
            }
            },
            breakLabelLayout: {
                moveOverlap: false
            },
            breaks: [
            {
                start: _data.breakStart,
                end: _data.breakEnd,
                gap: 0
            }
            ],
            breakArea: {
                expandOnClick: false,
                zigzagAmplitude: 0,
                zigzagZ: 200
            }
        }
        ],
        yAxis: {
        type: 'value',
        min: 'dataMin'
        },
        dataZoom: [
        {
            type: 'inside',
            xAxisIndex: 0
        },
        {
            type: 'slider',
            xAxisIndex: 0
        }
        ],
        series: [
        {
            type: 'line',
            symbolSize: 0,
            data: _data.seriesData
        }
        ]
    }

    chartInstance.setOption(option)

    // ✅ 반응형 리사이즈
    const resizeHandler = () => chartInstance.resize()
    window.addEventListener('resize', resizeHandler)

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeHandler)
        chartInstance?.dispose()
    })
    })

    // 💡 원래 JS 코드의 데이터 생성 로직 그대로
    function generateData1() {
        const seriesData = []
        const time = new Date('2024-04-09T09:30:00Z')
        const endTime = new Date('2024-04-09T15:00:00Z').getTime()
        const breakStart = new Date('2024-04-09T11:30:00Z').getTime()
        const breakEnd = new Date('2024-04-09T13:00:00Z').getTime()

        for (let val = 1669; time.getTime() <= endTime; ) {
            if (time.getTime() <= breakStart || time.getTime() >= breakEnd) {
            val =
                val +
                Math.floor((Math.random() - 0.5 * Math.sin(val / 1000)) * 20 * 100) / 100
            val = +val.toFixed(2)
            seriesData.push([time.getTime(), val])
            }
            time.setMinutes(time.getMinutes() + 1)
        }

        return {
            seriesData,
            breakStart,
            breakEnd
        }
    }
</script>

<style scoped>
    #main {
        width: 100%;
        height: 100vh;
    }
</style>
