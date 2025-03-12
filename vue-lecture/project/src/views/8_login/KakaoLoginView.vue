<template>
  <div>
    <a id="kakao-login-btn" @click="loginWithKakao">
      <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
    </a>
    <button class="api-btn" onclick="requestUserInfo()">사용자 정보 가져오기</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      KAKAO_APP_KEY: 'c089c8172def97eb00c07217cae17495',
      REDIRECT_URI: 'https://developers.kakao.com/tool/demo/oauth'
    }
  },
  setup() {},
  created() {
  },
  mounted() {
    // 해당 부분은 main.js에 window.Kakao.init()으로 넣어놨다.
    // if (!window.Kakao) {
    //   console.error('Kakao SDK 로드 실패')
    //   return
    // }
    // if (!window.Kakao.isInitialized()) {
    //   window.Kakao.init(this.KAKAO_APP_KEY)
    //   console.log('' Kakao SDK 초기화 완료')
    // }
  },
  unmounted() {},
  methods: {
    loginWithKakao() {
      window.Kakao.Auth.authorize({
        redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
        state: 'userme'
      })
    },
    requestUserInfo() {
      window.Kakao.API.request({
        url: '/v2/user/me'
      })
        .then(function(res) {
          alert(JSON.stringify(res))
        })
        .catch(function(err) {
          alert(
            'failed to request user information: ' + JSON.stringify(err)
          )
        })
    }
  }
}
</script>
