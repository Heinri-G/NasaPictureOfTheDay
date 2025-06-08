const apiKey = ENV.API_KEY; 
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
    // You'll access data.url for the image URL, data.title for the title, etc.
  })
  .catch(error => {
    console.error('Error fetching APOD:', error);
  });
