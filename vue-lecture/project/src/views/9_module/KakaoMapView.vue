<template>
  <div class='mt-2'>
    <div id="map" style="width:500px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      map: null
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    } else {
      this.loadScript()
    }
  },
  unmounted() {},
  methods: {
    loadScript() {
      const script = document.createElement('script')
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey={your App Key}'
      document.head.appendChild(script)
      script.onload = () => window.kakao.maps.load(this.loadMap)
    },
    loadMap() {
      var container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
      var options = { // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
        level: 3 // 지도의 레벨(확대, 축소 정도)
      }

      this.map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
      // Marker 표시
      this.loadMarker()
    },
    loadMarker() {
      // 마커가 표시될 위치입니다
      var markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map)
    }
  }
}
</script>
