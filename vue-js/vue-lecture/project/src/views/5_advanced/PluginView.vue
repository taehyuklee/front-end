<template>
    <div>
        <!-- <h1>{{ $translate('en.hi') }}</h1> -->
        <!-- <h1>{{ $translate('ko.hi') }}</h1> -->
        <!-- <button>{{ $translate('ko.search') }}</button> -->
        <!-- <button>{{ $translate('en.search') }}</button> -->

        <!-- 실제로는 아래와 같이 사용한다. 데이터베이스에는 lang 이런게 들어가 있어야 한다. "템플릿 리터럴 (Template Literal)" -->
        <h1>{{ $translate(`${userInfo.lang}.hi`) }}</h1>
        <!-- 어떤 문구 사이에 동적으로  (이름과 같은) 데이터를 받아오기 위해서는 아래와 같은 형태로 한다 -->
        <h1>{{ $translate(`${userInfo.lang}.welcome`, userInfo) }}</h1>
        <button>{{ $translate(`${userInfo.lang}.search`) }}</button>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userInfo: {
        name: 'TaeHyuk Lee',
        email: 'thlee991@gmail.com',
        lang: 'en'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
