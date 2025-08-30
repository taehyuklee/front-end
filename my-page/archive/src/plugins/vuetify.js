// vuetify를 사용하기 위해서는 해당 plugin을 작성해서 main.js에 등록해줘야 함.
// 어떤 원리로 인해 이렇게 되는건지 알아보자
import '@mdi/font/css/materialdesignicons.css';
import "vuetify/styles";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
    components,
    directives,
})