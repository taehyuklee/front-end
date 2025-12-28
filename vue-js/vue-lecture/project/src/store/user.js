// 일반적으로 상태관리 저장소에는 User에 관련된 정보를 많이 저장한다
/**
 * 여기에 모듈 2개가 필요하다. 일반적으로 Web API를 콜해서 local에 저장하거나 Cookie에 저장하지 않으면, 사용자 정보 저장한게 새로고침한게 사라져 버린다.
 * 1. import persistedsatae from 'vuex-persistedstate' // 내가 삭제하지 않는한 영구적으로 저장
 * 2. import vueCookies from 'vue-cookies' // 일정 시간동안만 정보를 저장하게 하는 저장소
 */
import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      // 사용자가 로그인한 이후 여기에 저장하게 될 것이다.
      userInfo: {
        name: '',
        email: '',
        phone: '',
        lang: ''
      }
    }
  },
  getters: {
    isLogin(state) { // 로그인 상태를 보기 위한 함수
      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    // 로그인 할때
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      // 쿠키에 userInfo라는 key로 객체를 10초동안 저장하게 된다.
      VueCookies.set('userInfo', userInfo, '10s')
    },
    // 로그아웃 할때
    clearUserInfo(state) {
      state.userInfo = {}
      // 로그아웃할때 Cookie안에 저장된 정보도 없애야함
      VueCookies.remove('userInfo')
    },
    // User에 대한 정보를 가져와야 할때 이렇게 하면 된다.
    getUserInfo(state) {
      if (VueCookies.get('userInfo')) {
        return state.userInfo
      } else {
        return {}
      }
    }
  },
  actions: {
  }
}
