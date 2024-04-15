let key = '4ec67467a9b9f37556f4543c9a731e20'
let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${key}`

// let f = fetch(url)
// console.log(f)
//    fetch(url).then((res=>console.log(res)))
const getdata = async () => {
    let promise = await fetch(url)
    // console.log(promise)
    try {
        let data = await promise.json()
        console.log(data)
        document.getElementById('tempre').innerHTML = (Math.floor(data.main.temp - 273.15)) + ' °C'

        document.getElementById('city').innerText = data.name
        document.getElementById('weather').innerText = "weather = " + data.weather[0].description + ' Okta'
        document.getElementById('clouds').innerText = "Clouds =" + data.clouds.all + ' %'
        document.getElementById('humidity').innerText = "Humidity = " + data.main.humidity + ' %'
        document.getElementById('wind-speed').innerText = "Wind-Speed = " + data.wind.speed + ' KM/hrs'
        console.log(data.wind.speed)
    } catch (error) {
        document.getElementById('err').innerText = 'City Not Found'
    }


}
// getdata()
let btn = document.getElementById('btn')
let input = document.getElementById('inp')
let loc = document.getElementById('location')
btn.addEventListener('click', () => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`
    getdata();
})