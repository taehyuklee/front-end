<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          // 결국 세부적인 사용법은 https://fullcalendar.io/docs 공식문서를 확인해야 한다.
          { title: 'event 1', date: '2025-03-16' },
          { title: 'event 2', date: '2025-05-16' },
          { title: 'event 3', start: '2025-03-10T10:30:00', end: '2025-03-18T11:30:00' }
        ],
        headerToolbar: {
          left: 'dayGridMonth, timeGridWeek, timeGridDay',
          center: 'title',
          right: 'prevYear,prev,next,nextYear'
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    handleDateClick: function(arg) {
      console.log(arg)
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
