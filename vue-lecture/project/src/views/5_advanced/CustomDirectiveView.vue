<template>
  <div>
    <!-- Custom Directive 목표 : 어차피 해당 사이트 들어오게 되면, 이메일 주소부터 칠거니까, 이메일 주소 Input창에 focusing되어 있으면 좋겠지? 그걸 Custom Directive로 구현해볼거야  -->
    <div>
      <label for="email" class="form-label">이메일주소</label>
      <input type="email" name="" id="email" class="form-control" v-focus> <!-- v-foucs라는 custom directive를 하나 만들어볼거야 -->
    </div>
    <div>
      <label for="pw" class="form-label">비밀번호</label>
      <input type="password" name="" id="pw" class="form-control">
    </div>
    <div>
      <button class="btn btn-primary">로그인</button>
    </div>
    <div v-color="color"></div>
    <div v-demo="{color:'red', text:'hello!'}"></div>

    <!-- 실제로 사용하는 케이스에 대해서 알아보도록 하자 -->
    <!-- 소문자만 타이핑 가능하게 -->
    <div>
      <input type="text" name="" id="" v-lowercase class="form-control">
    </div>
    <!-- 대문자만 타이핑 가능하게 -->
    <div>
      <input type="text" name="" id="" v-uppercase class="form-control">
    </div>
    <!-- 숫자만 사용 가능하게 -->
    <div>
      <input type="text" name="" id="" v-number class="form-control">
    </div>
    <!-- 한글만 사용 가능하게 -->
    <div>
      <input type="text" name="" id="" v-korean class="form-control">
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    // 여기에 Custom Directive를 선언해서 사용할 수 있다.
    // v-foucus에서 v를 뺀걸 key로 잡는다.
    // focus: {
    //   // 이 안에서 Vue의 LifeCycle Hook과정을 다 사용할 수 있다.
    //   // Dom이 Rendering이 끝난 상태 - mounted
    //   mounted(el, binding) {
    //     // el : element의 약자 - 현재 Custom directive가 적용된 element가 들어오게 된다.
    //     // binding : v-focus="" 에서 ""해서 binding되어 있는 data를 의미한다.
    //     console.log(el)
    //     // 위의 경우 input tag를 el로 가져오게 된다.
    //     el.focus()
    //   }
    // },
    // lowercase: {
    //   mounted(el) {
    //     el.addEventListener('input', ($event) => {
    //       // $event : event객체 의미, .target: 이벤트가 발생한 요소 <input>을 의미한다. .target.value: 그 요소의 현재 value (내부 내용)을 의미한다.
    //       $event.target.value = $event.target.value.toLowerCase()
    //     })
    //   }
    // },
    // uppercase: {
    //   mounted(el) {
    //     el.addEventListener('input', ($event) => {
    //       $event.target.value = $event.target.value.toUpperCase()
    //     })
    //   }
    // },
    // number: {
    //   mounted(el) {
    //     el.addEventListener('input', ($event) => {
    //       // 정규식 이용해서 숫자는 지워주자 ^ : not, g : 지워라
    //       $event.target.value = $event.target.value.replace(/[^0-9]/g, '')
    //     })
    //   }
    // },
    // korean: {
    //   mounted(el) {
    //     el.addEventListener('input', ($event) => {
    //       // 정규식 이용해서 숫자는 지워주자 ^ : not, g : 지워라 - 즉 "not (ㄱ-ㅎ or ㅏ-ㅣ or 가-힣)이면 다 지운다" 가 된다
    //       $event.target.value = $event.target.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
    //     })
    //   }
    // },
    // 아래는 그냥 연습용
    color: {
      // rendering되기 전에 데이터만 넣어놓은 시점
      created(el, binding) {
        console.log(binding.value)
        // el.style.backgroundColor = binding.value (created 시점이라 element가 없다 - 이걸 쓰기 위해서는 mounted로 바꿔야 한다)
      }
    },
    demo: {
      // rendering되기 전에 데이터만 넣어놓은 시점
      mounted(el, binding) {
        // Object형태이므로 binding.value.text까지 접근해줘야 한다.
        el.innerText = binding.value.text
        el.style.color = binding.value.color
      }
    }
  },
  data() {
    return {
      sampleData: '',
      color: 'white'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
