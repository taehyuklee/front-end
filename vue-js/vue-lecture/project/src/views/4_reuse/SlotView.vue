<template>
    <div>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">Show Modal</button>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal2">Show Modal2</button>
        <SlotModal modalId="userModal">
          <template v-slot:title>모달창 타이틀</template> <!-- 자식 component내의 slot의 name속성이 title인것을 찾아서 안의 내용을 넣어준다 -->

          <template v-slot:body> <!-- 자식 component내의 slot의 name속성이 body를 찾아서 안의 내용을 넣어준다 -->
            <div class="row gy-2"> <!-- BootStrap: 여기서 그냥 "row" 아래로 나열 -> class="row gy-2" 이미 css에서 아래로 자간을 두는듯 -->
                <div class="col-3">
                  <label for="" class="form-label">이메일 주소</label>
                </div>
                <div class="col-9">
                  <input type="email" name="" id="" class="form-control">
                </div>
                <div class="col-3">
                  <label for="" class="form-label">전화번호</label>
                </div>
                <div class="col-9">
                  <input type="tel" name="" id="" class="form-control">
                </div>
                <div class="col-3">
                  <label for="" class="form-label">주소</label>
                </div>
                <div class="col-9">
                  <input type="text" name="" id="" class="form-control">
                </div>
            </div>
          </template>

          <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary">저장</button>
          </template>
        </SlotModal>

        <SlotModal modalId="userModal2">
          <template v-slot:title>모달창 타이틀</template> <!-- 자식 component내의 slot의 name속성이 title인것을 찾아서 안의 내용을 넣어준다 -->

          <template v-slot:body> <!-- 자식 component내의 slot의 name속성이 body를 찾아서 안의 내용을 넣어준다 -->
            <p>문장1</p>
            <p>문장2</p>
            <p>문장3</p>
          </template>

          <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary">저장</button>
          </template>
        </SlotModal>
    </div>
</template>

<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { SlotModal },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
