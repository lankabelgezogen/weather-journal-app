// Personal API Key for OpenWeatherMap API
const api_key = 'e6d6fbc638daf47c785e60f9dd1dcad1';
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateAPICall)
/* Function called by event listener */
function generateAPICall(e){
    const zip = document.getElementById('zip').value;

    getDataFromAPI(baseUrl, zip, api_key);
}
/* Function to GET Web API Data*/
async function getDataFromAPI(url = '', zip = '', key = ''){
    const response = await fetch(url + zip + key);
    try {
        const weatherData = response.json();
    } catch(error) {
        console.log(error);
    }
}
/* Function to POST data */
async function postData (path = '', data = {}) {

}

/* Function to GET Project Data */
async function updateUI(){
    
}