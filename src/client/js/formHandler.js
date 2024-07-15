function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    //call external API to get weather information
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Campinas,br&units=imperial&APPID=' + formText;
    fetch(url)
    .then(res => res.json())
    .then(weatherData => {
        const msg = `Temperature in Campinas now: ${Math.round(weatherData.main.temp)}F`;
        document.getElementById('weather').innerHTML = msg;

    })
}

export { handleSubmit }
