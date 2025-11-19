<script setup>
  import { watch, onMounted, reactive, ref , computed} from 'vue'
  import { useRouter } from 'vue-router'
  import { useUiStore } from '@/stores/ui';

  const uiStore = useUiStore(); // 전역 상태 가져오기 

  const router = useRouter()

  // const activeChart = ref(false)
  const selectedChartId = ref(null); // 선택된 카드 ID를 저장


  const chartList = reactive([
    {
      id: '/coin_chart/candle',
      name: 'Candle Chart',
      description: 'Candle Stick Chart',
      thumbnail: new URL('@/assets/candle-stick.png', import.meta.url).href, // 이미지 경로 넣어도 됨
    },
    {
      id: '/coin_chart/timeseries',
      name: 'Time Series',
      description: 'Time Series Chart',
      thumbnail: new URL('@/assets/timeseries.png', import.meta.url).href, // 이미지 경로
    },
    // 필요한 만큼 추가
  ])

  // 선택된 카드만 남기도록 필터링
  const visibleCharts = computed(() => {
    if (selectedChartId.value) {
      return chartList.filter(c => c.id === selectedChartId.value)
    }
    return chartList
  })

  function selectChart(chartId) {
    console.log('선택된 차트:', chartId)

    const currentPath = router.currentRoute.value.path

    if (currentPath === chartId) {
      // 이미 해당 경로일 경우 → 부모로 돌아감
      router.push('/coin_chart')
      // selectedChartId.value = null
    } else {
      // 다른 경로일 경우 → 해당 자식 뷰로 이동
      router.push(chartId)
      // selectedChartId.value = chartId
    }
  }

  onMounted(() => {
    const path = router.currentRoute.value.path

    // /coin_chart/candle 같은 경로면 선택된 것으로 처리
    const match = chartList.find(c => c.id === path)

    if (match) {
      selectedChartId.value = match.id
    } else {
      selectedChartId.value = null
    }
  })

  // 라우트 변경될 때마다 selectedChartId 갱신
  watch(
    () => router.currentRoute.value.path,
    (newPath) => {
      const match = chartList.find(c => c.id === newPath)
      selectedChartId.value = match ? match.id : null
    }
  )
</script>

<template>
  <div id="common_body">
    <div class="text">
      <div class="view_title">Chart Tools</div>

      <div :class="{ cards: true, isDark: uiStore.isDark}">
        <div :class="{card: true, isDark: uiStore.isDark}" :key="chart.id" v-for="chart in visibleCharts">
          <div @click="selectChart(chart.id)" :class="{thumbnail: true, isActive: selectedChartId }">
            <!-- <p>{{ chart.thumbnail ? '' : chart.name }}</p> -->
            <!-- 이미지가 있으면 표시, 없으면 대체 텍스트 -->
            <img
              v-if="chart.thumbnail"
              :src="chart.thumbnail"
              :alt="chart.name"
            />
            <p v-else>{{ chart.name }}</p>
          </div>
          <div class="card-text">
            {{ chart.description }}
          </div>
          <div class="card-buttons">
            <div 
              class="card-button-1 hover-effect add-cursor"
              @click="selectChart(chart.id)"
            >
              {{ selectedChartId === chart.id ? 'Back To All' : 'View' }}
            </div>
            <!-- <div class="card-button-2 hover-effect add-cursor">
              Edit
            </div> -->
            <!-- <p class="card-bottom-text">
              for comparison of chart
            </p> -->
          </div>
        </div>
      </div>

      <router-view />

    </div>
  </div>
</template>


<style scoped>
  .text {
    padding: 12px 60px;
  }

  .cards {
      background-color: #e4e9f7;
      padding: 24px 0 48px 0;
      margin: 0px 0 0 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, 280px); /* 카드 폭을 고정하고, 화면에 맞게 자동 배치 */
      grid-auto-flow: row;
      justify-content: start; /* 왼쪽 정렬 */
      grid-gap: 25px; 
      transition: background-color 0.3s ease;
  }

  .cards.isDark {
    background-color: #18191a;
    transition: background-color 0.3s ease;
  }

  .card {
    background-color: white;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25); /* 그림자 조금 더 강조 */
    border-radius: 6px; 
  }

  .card.isDark {
    background-color: #3a3a3a;
    color: #e0e0e0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.05);
  }

  /* .thumbnail {
    height: 300px;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: #54595c;
    color: white;
    border-radius: 6px 6px 0 0; 
  } */

  .thumbnail {
    max-height: 200px; /* 기존 300px에서 줄이기 */
    display: flex; /* grid로 했을때랑 무슨 차이지? */
    align-items: center;
    justify-content: center;
    background-color: #858c91;
    border-radius: 6px 6px 0 0;
    overflow: hidden; /* 이미지 넘침 방지 */
    /* transition: transform 0.2s ease, opacity 0.2s ease; */
    cursor: pointer;     
    transition: all 0.4s ease;
  }

  .thumbnail img {
    max-width: 100%;
    max-height: 95%;
    object-fit: contain; /* 이미지 비율 유지 + 내부에 맞춤 */
  }

  .thumbnail.isActive {
    max-height: 0;    /* height 대신 max-height 줄이기 */
    opacity: 0;          /* 자연스러운 사라짐 효과 */
    /* 살짝 위로 이동하면서 사라짐 */
    transition: all 0.4s ease;
  }

  /* thumbnail event */
  .thumbnail:hover {
    transform: scale(1.03);
    opacity: 0.9;
  }

  .thumbnail img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }

  .card-text {
    padding: 24px; /* 기존 20px → 24px */
    font-size: 20px; /* 글자 조금 키움 */
  }

  .card-buttons {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50px 50px 1fr;
    grid-template-columns: 1fr;
    padding: 15px; 
  }

  .card-button-1 {
    display: -ms-grid;
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 15px;
    height: 30px;
    color: black;
    background-color: white;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-radius: 5px 0 0 5px;
    opacity: 0.5; 
  }

  .card-button-2 {
    display: -ms-grid;
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 15px;
    height: 30px;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 0 5px 5px 0;
    opacity: 0.5; 
    display: none;
  }

  .card-bottom-text {
    text-align: right;
    margin: 0;
    padding-top: 5px;
    font-size: 15px;
    opacity: 0.6; 
  }

  .hover-effect {
    -webkit-transition: all .2s;
    transition: all .2s; 
  }

  .hover-effect:hover {
    background-color: #54595c;
    color: white; 
  }
</style>
