<template>
    <div class="coin_title"> {{ coinTitle }}</div>
    <div id="main" ref="chartRef" class="w-full h-[100vh]"></div>
</template>

<script setup>

    import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
    import { useUiStore } from '@/stores/ui'
    import * as echarts from 'echarts'

    const chartRef = ref(null)
    let chartInstance = null

    const uiStore = useUiStore() // store 사용

    const upColor = '#00da3c'
    const downColor = '#ec0000'

    const props = defineProps({
        rawData: Array,
        coinTitle: String,
        selectedDate: Array
    })

    // 날짜, open, close, low, high, volume
    // const rawData = props.rawData ? props.rawData : []
    const rawData = props.rawData
    const coinTitle = ref(props.coinTitle ? props.coinTitle : '')

    function splitData(rawData) {
        const categoryData = []
        const values = []
        const volumes = []
        for (let i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i][0])
            values.push([rawData[i][1], rawData[i][2], rawData[i][3], rawData[i][4]])
            volumes.push([i, rawData[i][5], rawData[i][1] > rawData[i][2] ? 1 : -1])
        }
        return { categoryData, values, volumes }
    }

    function calculateMA(dayCount, data) {
        const result = []
        for (let i = 0; i < data.values.length; i++) {
            if (i < dayCount) {
                result.push('-')
                continue
            }
            let sum = 0
            for (let j = 0; j < dayCount; j++) {
                sum += data.values[i - j][1]
            }
            result.push((sum / dayCount).toFixed(2))
        }
        return result
    }

    onMounted(() => {
        const data = splitData(rawData)
        chartInstance = echarts.init(chartRef.value)

        const option = {
            animation: false,
            legend: {
                bottom: 10,
                left: 'center',
                data: ['', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' }
            },
            axisPointer: { link: [{ xAxisIndex: 'all' }] },
            toolbox: {
                feature: {
                dataZoom: { yAxisIndex: false },
                brush: { type: ['lineX', 'clear'] }
                }
            },
            brush: { xAxisIndex: 'all', brushLink: 'all' },
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
                    min: 'dataMin',
                    max: 'dataMax'
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.categoryData,
                    boundaryGap: false,
                    axisTick: { show: false },
                    axisLabel: { show: false },
                    min: 'dataMin',
                    max: 'dataMax'
                }
            ],
            yAxis: [{ scale: true }, { scale: true, gridIndex: 1 }],
            dataZoom: [
                { type: 'inside', xAxisIndex: [0, 1], start: 70, end: 100 },
                { show: true, xAxisIndex: [0, 1], type: 'slider', top: '85%', start: 70, end: 100 }
            ],
            series: [
                { name: coinTitle.value, type: 'candlestick', data: data.values },
                { name: 'MA5',  type: 'line', data: calculateMA(5, data),  smooth: true },
                { name: 'MA10', type: 'line', data: calculateMA(10, data), smooth: true },
                { name: 'MA20', type: 'line', data: calculateMA(20, data), smooth: true },
                { name: 'MA30', type: 'line', data: calculateMA(30, data), smooth: true },
                { name: 'Volume', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: data.volumes }
            ]
        }

        watch(
            () => props.rawData,
            (newData) => {
                if (!chartInstance) return
                const data = splitData(newData)

                chartInstance.setOption({
                xAxis: [
                    { data: data.categoryData },
                    { data: data.categoryData }
                ],
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

        // 외부에서 바껴도 내부에서 이미 Mount된 데이터를 다시 세팅 안해주면 안바뀜
        watch(
            () => props.coinTitle,
            (newTitle) => {
                if (!chartInstance) return;

                // ref 값 업데이트
                coinTitle.value = newTitle;

                // chart series 이름과 legend 업데이트
                chartInstance.setOption({
                    series: [
                        { name: newTitle }  // 0번 series만 이름 변경
                    ],
                    legend: {
                        data: [newTitle, 'MA5', 'MA10', 'MA20', 'MA30'] // legend도 같이 변경
                    }
                });
            }
        );

        watch(
            () => props.selectedDate,
            (newDate) => {
                if (!chartInstance || !newDate?.length) return;

                // Date → "YYYY-MM-DD" 형식으로 변환
                const start = newDate[0] instanceof Date ? newDate[0].toISOString().slice(0,10) : newDate[0];
                const end = newDate[1] instanceof Date ? newDate[1].toISOString().slice(0,10) : newDate[1];

                chartInstance.setOption({
                dataZoom: [
                    {
                        type: 'inside',
                        xAxisIndex: [0, 1],
                        startValue: start,
                        endValue: end
                    },
                    {
                        show: true,
                        xAxisIndex: [0, 1],
                        type: 'slider',
                        top: '85%',
                        startValue: start,
                        endValue: end
                    }
                ]
                });
            }
        )


        chartInstance.setOption(option)

        // 반응형 처리
        const resizeHandler = () => chartInstance.resize()
        window.addEventListener('resize', resizeHandler)

        // cleanup
        onBeforeUnmount(() => {
            window.removeEventListener('resize', resizeHandler)
            // Optional Chaining(옵셔널 체이닝) 연산자
            chartInstance?.dispose()
        })

        window.addEventListener('resize', resizeHandler)

        
        // 사이드바 상태(true/false) 감지
        // watch(
        // () => props.isSidebarClosed,
        // async () => {
        //     await nextTick()
        //     // transition 끝난 뒤에 리사이즈
        //     setTimeout(() => {
        //     chartInstance?.resize()
        //     }, 250) // CSS transition 시간에 맞춰 조정
        // }
        // )


        // logic보다는 UI관련한 것
        watch(
            () => uiStore.isSidebarClosed,
            async () => {
                // DOM 변경될때까지 기다려야 한다.
                await nextTick()

                // 사이드바 열리거나 닫힐 때 애니메이션 중간에도 계속 리사이즈
                const start = performance.now()
                const duration = 400 // 사이드바 transition 시간 (ms)

                function animateResize(timestamp) {
                    const progress = timestamp - start
                    chartInstance?.resize()

                    if (progress < duration) {
                        requestAnimationFrame(animateResize)
                    }
                }

                requestAnimationFrame(animateResize)
            }
        )

    })
</script>

<style scoped>
    #main {
        width: 100%;
        height: 100vh;
    }

    .coin_title{
        font-size: 30px;
    }
</style>
