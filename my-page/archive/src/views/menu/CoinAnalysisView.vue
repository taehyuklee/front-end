<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import * as echarts from 'echarts'

// 분석 도구 목록
const tools = reactive([
    { id: 'corr', name: 'Correlation', desc: '두 코인의 상관관계 분석' },
    { id: 'rolling_corr', name: 'Rolling Correlation', desc: '윈도우 기반 변화량' },
    { id: 'autocorr', name: 'AutoCorrelation', desc: '시계열 자기상관 분석' },
    { id: 'volatility', name: 'Volatility', desc: '변동성 분석' },
    { id: 'summary', name: 'Stats Summary', desc: '통계 요약치' },
    { id: 'fourier', name: 'Fourier Transform', desc: '주파수 기반 분석' },
    { id: 'regression', name: 'Linear Regression', desc: '선형 회귀 분석' },
    { id: 'regime', name: 'Regime Change', desc: '상관성이 갑자기 달라지는 구간을 자동으로 감지' },
    { id: 'variance', name: 'Variance Component Analysis', desc: '분산 성분 분석을 수행' },

])

const selectedTool = ref(null)
const chartRef = ref(null)
let chartInstance = null

const outputTable = ref([])
const tableHeaders = ref([])

const currentTool = computed(() => {
    return tools.find(t => t.id === selectedTool.value)
})

function selectTool(id) {
    selectedTool.value = id
    renderEmptyChart()
}

function runAnalysis() {
    if (!selectedTool.value) return

    switch (selectedTool.value) {
    case 'corr':
        renderCorrChart()
        break
    case 'rolling_corr':
        renderRollingCorr()
        break
    case 'autocorr':
        renderAutoCorr()
        break
    case 'volatility':
        renderVolatility()
        break
    case 'summary':
        renderStatsSummary()
        break
    case 'fourier':
        renderFourier()
        break
    case 'regression':
        renderRegression()
        break
    }
}

function renderEmptyChart() {
    if (!chartInstance) {
    chartInstance = echarts.init(chartRef.value)
    }
    chartInstance.clear()
}

function renderCorrChart() {
    chartInstance.setOption({
    title: { text: 'Correlation Heatmap' },
    xAxis: { type: 'category', data: ['BTC', 'ETH'] },
    yAxis: { type: 'category', data: ['BTC', 'ETH'] },
    visualMap: { min: -1, max: 1 },
    series: [
        {
        type: 'heatmap',
        data: [
            [0, 0, 1],
            [0, 1, 0.82],
            [1, 0, 0.82],
            [1, 1, 1],
        ],
        }
    ],
    })

    outputTable.value = [
        { coinA: 'BTC', coinB: 'ETH', corr: 0.82 }
    ]
    tableHeaders.value = ['coinA', 'coinB', 'corr']
}

function downloadData() {
    const blob = new Blob([JSON.stringify(outputTable.value, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'analysis_result.json'
    a.click()
    URL.revokeObjectURL(url)
}

onMounted(() => {
    chartInstance = echarts.init(chartRef.value)
})
</script>


<template>
    <section class="analysis-container">

    <!-- 좌측 툴 패널 -->
    <aside class="tool-panel">
        <div class="panel-title">Analysis Tools</div>
        <div 
            class="tool-item" 
            v-for="tool in tools" 
            :key="tool.id"
            :class="{ active: selectedTool === tool.id }"
            @click="selectTool(tool.id)"
        >
        <div class="tool-name">{{ tool.name }}</div>
        <div class="tool-desc">{{ tool.desc }}</div>
        </div>
    </aside>

    <!-- 우측 결과 패널 -->
    <main class="result-panel">
        <div class="result-header">
        <h2>{{ currentTool?.name || 'Select a tool' }}</h2>

        <div class="option-buttons">
            <div class="btn" @click="runAnalysis" v-if="selectedTool">Run</div>
            <div class="btn" @click="downloadData" v-if="selectedTool">Download</div>
        </div>
        </div>

        <div class="chart-area" ref="chartRef">
        <p v-if="!selectedTool" class="no-select-text">
            Select an analysis tool from the left panel
        </p>
        </div>

        <div class="data-table" v-if="outputTable.length > 0">
        <table>
            <thead>
            <tr>
                <th v-for="h in tableHeaders" :key="h">{{ h }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, idx) in outputTable" :key="idx">
                <td v-for="h in tableHeaders" :key="h">{{ row[h] }}</td>
            </tr>
            </tbody>
        </table>
        </div>

    </main>

    </section>
</template>

<style scoped>
.analysis-container {
    display: grid;
    grid-template-columns: 240px 1fr; /* 패널 너비 약간 축소 */
    height: 100%;
    font-size: 14px; /* 전체 기본 폰트 줄임 */
}

/* =============== LEFT TOOL PANEL =============== */

.tool-panel {
    background: #f7f8fa;               /* 더 밝은 배경 */
    border-right: 2px solid #d0d3da;   /* 선 더 진하게 */
    padding: 20px 18px;
    overflow-y: auto;
    max-height: 100vh;

    box-shadow: 2px 0 8px rgba(0,0,0,0.06);  /* 오른쪽으로 그림자 */
}

/* 스크롤바 */
.tool-panel::-webkit-scrollbar {
    width: 6px;
}
.tool-panel::-webkit-scrollbar-track {
    background: #ededed;
    border-radius: 3px;
}
.tool-panel::-webkit-scrollbar-thumb {
    background: #b5b5b5;
    border-radius: 3px;
}

/* Title 더 선명하게 */
.panel-title {
    font-size: 18px;
    margin-bottom: 18px;
    margin-left: 12px;
    font-weight: 700;
    color: #2c3344;
    letter-spacing: -0.3px;
}

/* Tool Item */
.tool-item {
    padding: 12px 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.15s;
    border: 1px solid #e1e3e7;

    background: #ffffff;               /* 카드화 */
}

/* Hover 시 약한 그림자로 상자처럼 보이게 */
.tool-item:hover {
    background: #f0f2f9;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
}

/* Active 상태는 확실하게 구분 */
.tool-item.active {
    background: #4a6cf7;
    color: white;
    border: 1px solid #3b59d4;
    box-shadow: 0px 2px 6px rgba(74,108,247,0.45);
}

.tool-name {
    font-weight: 600;
    font-size: 14px;
}

.tool-desc {
    opacity: 0.8;
    font-size: 12px;
}


/* =============== RIGHT RESULT PANEL =============== */

.result-panel {
    padding: 18px 24px;
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.result-header h2 {
    font-size: 20px;
    margin: 0;
}

.option-buttons .btn {
    padding: 6px 12px;
    background: #4a6cf7;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 6px;
    font-size: 13px;
}

.chart-area {
    height: 360px; /* 높이 줄임 */
    margin-top: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.no-select-text {
    text-align: center;
    padding-top: 140px;
    opacity: 0.6;
    font-size: 13px;
}

/* =============== TABLE AREA =============== */

.data-table {
    margin-top: 20px;
    font-size: 13px;
}

.data-table table {
    border-collapse: collapse;
    width: 100%;
}

.data-table th,
.data-table td {
    border: 1px solid #ddd;
    padding: 6px 10px;
    font-size: 13px;
}

.data-table th {
    background: #f7f7f7;
    font-weight: 600;
}
</style>
