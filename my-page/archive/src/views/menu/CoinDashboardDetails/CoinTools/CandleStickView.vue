<script setup>
    import { onMounted, reactive, ref, computed } from 'vue'
    import CandleChart from '@/components/charts/CandleChart.vue';
    import { get_coins, get_coins_data } from '@/api/axios.js'

    // const coinList = ref([{market: 'KRW-XLM'}, {market: 'KRW-XRP'}, {market: 'KRW-BTC'}])
    const coinList = ref([])
    const coinTitle = ref('Select Coin')
        
    // 날짜, open, close, low, high, volume
    let rawData = ref([ ]);
    let dates = ref();
    let selectedDates = ref();
    let selectedUnit = ref('day')
    let selectedCoin = ref('')
    const searchText = ref('')

    const filteredCoinList = computed(() => {
        if (!searchText.value) return coinList.value
        return coinList.value.filter(c =>
            // Include를 해서 %Like query처럼 구현
            c.market.toLowerCase().includes(searchText.value.toLowerCase())
        )
    })

    onMounted(async () => {
        // console.log(get_apis_await())
        const newData = await get_coins()
        // console.log(newData.data)
        coinList.value = newData.data
    }) 


    function getDates(e) {
        // event 확인하기 위함.
        // console.log(dates) 왜 dates와 e가 같을까 @update:model-value="getDates" 라고 했을때
        // 자식 컴포넌트에서 emit("update:modelValue", e.target.value) 이렇게 event가 전달된다 부모한테 그리고 해당 data는 e임을 알아야함.
        // 어쨌든 이미 v-model로 양방향 바인딩 되어 있고 dates가 변경되면, 새로운 값을 이벤트로 보내주고 있고 그게 e임.
        // console.log(e[0])
        // console.log(dates.value[0])
        // console.log(dates.value[1])
        if (!dates.value?.length) return;

        // const start = dates.value[0].toISOString().slice(0, 10)
        // const end = dates.value[1].toISOString().slice(0, 10)

        selectedDates.value = [dates.value[0], dates.value[1]]
        // console.log(selectedDates.value)
        // selectedDates.value = [dates.value[0], dates.value[1]]
        // console.log(selectedDates.value)
        
    }

    async function selectUnit(unit) {
        selectedUnit.value = unit
        const response = await get_coins_data(selectedCoin.value, unit);

        rawData.value = response;
    }

    

    async function selectCoin(coinNm, unit) {
        // console.log(coinNm)
        coinTitle.value = coinNm
        selectedCoin.value = coinNm
        const response = await get_coins_data(selectedCoin.value, unit);

        // console.log(response.data)

        // 서버에서 받은 데이터
        // const newData = response.data;

        // reactive 변수 갱신
        rawData.value = response;
    }

</script>

<template>
    <div id="common_body">
        <div class="text">
            <div class="view_title">Candle Chart</div>


            <div class="select-section">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ coinTitle }}
                    </button>
                    <ul class="dropdown-menu">

                        <!-- 고정 Search Box -->
                        <div class="dropdown-search-box p-2">
                            <li class="px-2 py-1">
                                <input 
                                    type="text" 
                                    class="form-control search-input"
                                    v-model="searchText"
                                    placeholder="Search coin..."
                                />
                            </li>

                            <li><hr class="dropdown-divider" /></li>
                        </div>

                        <!-- 스크롤 리스트 -->
                        <div class="dropdown-scroll-list">
                            <li :key="coin.id" v-for="coin in filteredCoinList">
                                <a class="dropdown-item" @click="selectCoin(coin.market, selectedUnit)"> {{ coin.market }} </a>
                            </li>
                        </div>

                    </ul>
                </div>


                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ selectedUnit  }}
                    </button>
                    <ul class="dropdown-menu">
                        <div class="dropdown-scroll-list">
                            <li :key="unit.id" v-for="unit in ['day', 'hour']">
                                <a class="dropdown-item" @click="selectUnit(unit)"> {{ unit }} </a>
                            </li>
                        </div>
                    </ul>
                </div>


                <!-- datapicker 내부적으로 model-value 라는 값으로 emit하나봄-->
                <VueDatePicker 
                    v-model="dates" 
                    @update:model-value="getDates"
                    range 
                    class="date-picker"
                />

                <!-- <button class="btn btn-success" @click="addChart"> + </button> -->
            </div>
            
            <div class="chart-view">

                <CandleChart
                    :raw-data="rawData"
                    :coin-title="coinTitle"
                    :selected-date="selectedDates"
                />
            </div>
            
        </div>
    </div>
</template>


<style scoped>
    .text {
        padding: 12px 60px;
    }

    .view_title {
        font-size: 25px;
        padding-bottom: 25px;
    }

    .dropdown {
        display: flex;
        align-items: center; 
    }

    .select-section {
        display: flex;
        gap: 20px; 
        align-items: center; 
        padding: 12px 16px;
        background-color: #f5f6fa;  /* 부드러운 배경 */
        border-radius: 12px;         /* 둥글게 */
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        margin-bottom: 20px;         /* 아래 콘텐츠와 간격 */
    }

    .btn.btn-secondary.dropdown-toggle {
        height: 38px;
        display: flex;
        align-items: center;
        border-radius: 1rem;
    }
    
    .date-picker {
        max-width: 350px; 
        font-size: 12px;
    }

    /* DatePicker input wrapper + input 둥글게 */
    .date-picker .dp__input_wrap,
    .date-picker .dp__input {
        border-radius: 1rem;
        border: 1px solid #ced4da;
        padding: 0 12px;
        height: 38px;
        box-sizing: border-box;
    }

    .btn.btn-secondary.dropdown-toggle {
        color: #fff;  
    }
    

    .dropdown-menu {
        opacity: 0;
        /* transform: translateY(10px); */
        visibility: hidden;
        max-height: 350px;   /* 원하는 높이 */
        transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;

    }

    /* 검색창 고정 영역 */
    .dropdown-search-box {
        background: white;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    /* 스크롤되는 공간 */
    .dropdown-scroll-list {
        max-height: 250px;  /* 리스트 최대 높이 */
        overflow-y: auto;   /* 스크롤 */
    }

    /* dropdown이 열릴 때 (Bootstrap에서 자동으로 .show 클래스 추가됨) */
    .dropdown-menu.show {
        opacity: 1;
        /* transform: translateY(0); */
        visibility: visible;

    }

    .chart-view {
        background-color: #f8f9fc;  /* 살짝 다른 부드러운 배경 */
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        margin-top: 20px;
    }
</style>
