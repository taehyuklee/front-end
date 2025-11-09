<script setup>
  import CandleChart from '@/components/charts/CandleChart.vue';
  import TimeSeries from '@/components/charts/TimeSeries.vue';
  import { reactive } from 'vue'

  const props = defineProps({
    isSidebarClosed: Boolean,
    isDark: Boolean
  });
    
  const rawData = reactive([
        ["2015-01-02", 17823.07, 17832.99, 17731.92, 17923.23, 347300000],
        ["2015-01-05", 17832.99, 17731.92, 17600.01, 17923.23, 347300000],
        ["2015-01-06", 17729.21, 17371.64, 17262.75, 17729.21, 476600000],
        ["2015-01-07", 17378.08, 17584.52, 17378.08, 17630.11, 363800000],
        ["2015-01-08", 17589.73, 17907.87, 17589.73, 17908.17, 377700000],
        ["2015-01-09", 17909.07, 17737.37, 17697.62, 17917.66, 389500000],
        ["2015-01-12", 17735.05, 17640.84, 17573.51, 17812.09, 342400000],
        ["2015-01-13", 17641.72, 17613.68, 17573.51, 17782.13, 396300000],
        ["2015-01-14", 17610.22, 17427.09, 17375.48, 17610.22, 410700000],
        ["2015-01-15", 17431.85, 17320.71, 17290.15, 17500.51, 391000000],
        ["2015-01-16", 17323.82, 17511.57, 17323.82, 17524.95, 377200000],
        ["2015-01-20", 17510.92, 17515.23, 17472.48, 17612.18, 362000000],
        ["2015-01-21", 17515.23, 17554.28, 17472.48, 17612.18, 342000000],
        ["2015-01-22", 17550.23, 17813.98, 17550.23, 17820.15, 356000000],
        ["2015-01-23", 17813.98, 17672.60, 17650.20, 17835.00, 348000000],
        ["2015-01-26", 17673.12, 17678.70, 17550.00, 17780.22, 314000000],
        ["2015-01-27", 17678.70, 17387.21, 17350.00, 17700.00, 382000000],
        ["2015-01-28", 17387.21, 17191.37, 17100.00, 17450.00, 421000000],
        ["2015-01-29", 17191.37, 17416.85, 17191.37, 17450.00, 403000000],
        ["2015-01-30", 17416.85, 17164.95, 17100.00, 17420.00, 423000000],
        ["2015-02-02", 17164.95, 17361.04, 17100.00, 17400.00, 382000000],
        ["2015-02-03", 17361.04, 17666.40, 17361.04, 17700.00, 369000000],
        ["2015-02-04", 17666.40, 17673.02, 17600.00, 17750.00, 343000000],
        ["2015-02-05", 17673.02, 17884.88, 17650.00, 17900.00, 356000000],
        ["2015-02-06", 17884.88, 17824.29, 17780.00, 17950.00, 317000000],
        ["2015-02-09", 17824.29, 17729.21, 17700.00, 17880.00, 293000000],
        ["2015-02-10", 17729.21, 17868.76, 17729.21, 17900.00, 276000000],
        ["2015-02-11", 17868.76, 17862.14, 17800.00, 17900.00, 273000000],
        ["2015-02-12", 17862.14, 17972.38, 17850.00, 18000.00, 280000000],
        ["2015-02-13", 17972.38, 18019.35, 17950.00, 18050.00, 274000000],
        ["2015-02-17", 18019.35, 18047.58, 18000.00, 18070.00, 270000000],
        ["2015-02-18", 18047.58, 18029.85, 18000.00, 18080.00, 260000000],
        ["2015-02-19", 18029.85, 17985.77, 17950.00, 18070.00, 280000000],
        ["2015-02-20", 17985.77, 18140.44, 17985.77, 18150.00, 292000000],
        ["2015-02-23", 18140.44, 18116.84, 18100.00, 18180.00, 280000000],
        ["2015-02-24", 18116.84, 18209.19, 18100.00, 18220.00, 290000000],
        ["2015-02-25", 18209.19, 18224.57, 18180.00, 18250.00, 310000000],
        ["2015-02-26", 18224.57, 18214.42, 18200.00, 18250.00, 280000000],
        ["2015-02-27", 18214.42, 18132.70, 18100.00, 18250.00, 290000000],
        ["2015-03-02", 18132.70, 18288.63, 18132.70, 18300.00, 315000000],
        ["2015-03-03", 18288.63, 18203.37, 18200.00, 18300.00, 296000000],
        ["2015-03-04", 18203.37, 18096.90, 18000.00, 18250.00, 310000000],
        ["2015-03-05", 18096.90, 18135.72, 18000.00, 18200.00, 290000000],
        ["2015-03-06", 18135.72, 17856.78, 17800.00, 18150.00, 340000000],
        ["2015-03-09", 17856.78, 17995.72, 17850.00, 18000.00, 305000000],
        ["2015-03-10", 17995.72, 17662.94, 17650.00, 18000.00, 342000000],
        ["2015-03-11", 17662.94, 17635.39, 17600.00, 17750.00, 302000000],
        ["2015-03-12", 17635.39, 17895.22, 17635.39, 17900.00, 292000000],
        ["2015-03-13", 17895.22, 17749.31, 17700.00, 17900.00, 325000000],
        ["2015-03-16", 17749.31, 17977.42, 17749.31, 18000.00, 288000000],
        ["2015-03-17", 17977.42, 17949.31, 17900.00, 18000.00, 276000000],
        ["2015-03-18", 17949.31, 18076.19, 17900.00, 18100.00, 325000000],
        ["2015-03-19", 18076.19, 17959.03, 17900.00, 18100.00, 295000000],
        ["2015-03-20", 17959.03, 18127.65, 17959.03, 18150.00, 410000000]
    ]);

</script>

<template>
  <div id="common_body">
    <div class="text">
      <div class="view_title">Coin Dashboard</div>

        <div class="cards">
          <div class="card">
              <div class="thumbnail">
              <p>Thumbnail</p>
              </div>
              <div class="card-text">
              This is a wider card with supporting
              text below as a natural
              lead-in to additional content.
              This content is a little bit longer.
              </div>
              <div class="card-buttons">
              <div class="card-button-1 hover-effect add-cursor">
                  View
              </div>
              <div class="card-button-2 hover-effect add-cursor">
                  Edit
              </div>
              <p class="card-bottom-text">
                  9 mins
              </p>
              </div>
          </div>
        </div>
      <!-- <div ref="chartRef" style="width: 100%; height: 400px;"></div> -->
      <!-- <CandleChart
        :is-sidebar-closed="isSidebarClosed"
        :is-dark="isDark"
        :raw-data="rawData"
      />

      <TimeSeries/> -->

      <!-- <img-table :headers="headers" :items="items"></img-table> -->
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: 12px 60px;
}

/*    - Cards -    */
.cards {
    background-color: #e4e9f7;
    padding: 48px 0 48px 0;
    margin: 80px 0 0 0;
    display: -ms-grid;
    display: grid;
    /* -ms-grid-columns: (208px)[3]; */
    grid-template-columns: repeat(3, 208px);
    justify-content: center;
    grid-gap: 25px; 
}

.card {
  background-color: white;
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px; 
}

.thumbnail {
  height: 225px;
  display: -ms-grid;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #54595c;
  color: white;
  border-radius: 4px 4px 0 0;     /* 커서 손가락 모양 */
}

.card-text {
  padding: 20px;
  font-size: 18px; 
}

.card-buttons {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 50px 50px 1fr;
  grid-template-columns: 50px 50px 1fr;
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
