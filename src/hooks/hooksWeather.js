import { onMounted, ref } from 'vue'
import axios from 'axios'

export function hooksWeather() {
    const temp = ref(0)
    const tempHuman = ref(0)
    const weather = ref(0)
    const humidity = ref(0)
    const sunrise = ref(0)
    const formattedTime = ref('')
    const clouds = ref(0)
    const sea = ref(0)

    const getWeather = () => {
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
                console.log(response.data),
                temp.value = Math.round(response.data.main.temp),
                tempHuman.value = Math.round(response.data.main.feels_like),
                weather.value = response.data.weather[0].id,
                humidity.value = response.data.main.humidity,
                sunrise.value = response.data.sys.sunrise,
                clouds.value = response.data.clouds.all,
                sea.value = response.data.main.sea_level
            ))
                const date = ref('')
                const hours = ref('')
                const minutes = ref('')
                date.value = new Date((sunrise.value + 14400) * 1000)
                hours.value = date.value.getHours()
                minutes.value = "0" + date.value.getSeconds()
                formattedTime.value = hours.value + ':' + minutes.value.substr(-2)

    }

    onMounted(getWeather)

    return {
        temp , tempHuman , weather , humidity , formattedTime , clouds , sea
        
    }
}