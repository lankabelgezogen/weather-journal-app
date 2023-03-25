// Personal API Key for OpenWeatherMap API
const apiKey = 'e6d6fbc638daf47c785e60f9dd1dcad1&units=imperial';
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateAPICall)
/* Function called by event listener */
function generateAPICall(e){
    const zip = document.getElementById('zip').value;
    getDataFromAPI(baseUrl, zip, apiKey)
        .then(weatherData => {
            weatherData.userResponse = document.getElementById('feelings').value;
            postData('/addData', weatherData);
        })
        .then(data => {
            updateUI();
        })
}
/* Function to GET Web API Data*/
async function getDataFromAPI(url = '', zip = '', key = ''){
    const response = await fetch(url + zip + key);
    try {
        const weatherData = response.json();
        return weatherData;
    } catch(error) {
        console.log(error);
    }
}
/* Function to POST data */
async function postData (path = '', data = {}) {
    const res = await fetch(path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

/* Function to GET Project Data */
async function updateUI(){
    const req = await fetch('/all');
    try {
        const receivedData = await req.json();
        document.getElementById('date').innerHTML = `<h2>${receivedData.date}</h2>`
        document.getElementById('temp').innerHTML = `<h2>${receivedData.temperature}</h2>`
        document.getElementById('content').innerHTML = `<h2>${receivedData.feelings}</h2>`
    } catch(error) {
        console.log(error);
    }
}