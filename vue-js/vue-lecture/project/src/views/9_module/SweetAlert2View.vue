// example-vue-component.vue
<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2 https://sweetalert2.github.io/ <- 여기서 확인 가능.
      // this.$swal('Hello Vue world!!!') // Vue에서 사용하기 위해서는 Swal -> this.$swal 로 바꿔야 한다
      this.$swal.fire({
        title: '정말 삭제하시겠습니까?',
        text: '삭제된 데이터는 복구할 수 없습니다!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 삭제하겠습니다!',
        cancleButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire({
            title: '삭제되었습니다!',
            text: '선택한 데이터가 정상적으로 삭제되었습니다.',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
