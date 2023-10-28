import { onMounted , onUnmounted, ref } from 'vue'
import axios from 'axios'

export function hooksLayout() {

    const times = ref('')
    const hours = ref('')
    const minutes = ref('')
    const seconds = ref('')
    const windSpeed = ref(0)
    const windGust = ref(0)
    const formattedTime = ref('')
    const visibility = ref(0)

    const getTimes = () => {
        setInterval(() => {
            times.value = new Date()
            hours.value = times.value.getHours()
            minutes.value = times.value.getMinutes()
            seconds.value = times.value.getSeconds()
            formattedTime.value = hours.value + ':' + (minutes.value <10 ? '0' + minutes.value : minutes.value) + ':' + (seconds.value <10 ? '0' + seconds.value : seconds.value) 
        }, 1000);

        axios
        .get('https://api.openweathermap.org/data/2.5/weather?' , {
            params: {
                appid: '37ee55811ec03c61317b2dc76e458f87',
                lang: 'ru',
                lat: 52.6031,
                lon: 39.5708,
                units: 'metric',
            }
        })
        .then(response => (
            windSpeed.value = response.data.wind.speed,
            windGust.value = response.data.wind.gust,
            visibility.value = response.data.visibility
        ))
    }

    onMounted(getTimes)

    return {
        formattedTime , windSpeed , windGust , visibility
    }
}