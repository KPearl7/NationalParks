'use strict'

const baseUrl = "http://api.gov/api/v1/parks"

const api ="cWi11y9RDx0AsAVxM5WfivxwaJiAwhJ3801wyEpU"

function defineParams(params) {
 const queryItems = Object.keys(params)
 const encodedKey = encodeURIComponent(key)
 const encodedValue = encodeURIComponent(params[key])
 .map(key => `${encodedKey}=${encodedValue}`)
 return queryItems.join('&');
}


function showResults(responseJson)  {
    console.log(responseJson);
    $('#results-list').empty();
 
    for(let i = 0; i < responseJson.length; i++) {
        let parksReturned = responseJson[i];
        ('#results-list').append (`<li><h3>"${parksReturned.fullName}"></h3></li>
        <p>"${parksReturned.description}"</p>
        <a href="${parksReturned.url}">Click here for Website</a>`)
        }
        $('.hidden').show();
};


function getParks(query, maxResults=25) {
    const params = {
        parkCode: acad,
        api_key: api,
        limit: 25,
        stateCode: 'array'
    };
    const queryString = defineParams(params)
    const url = baseURL + '?' + queryString;
    console.log(url);
    
fetch(url) 
.then(response => (response.json())
.then(responseJson => showResults(responseJson))
.catch(err => { 
    $('#js-error').text(`Parks not found`)
})
)};

function clickSearch() {
    $('#button').submit(event => {
        event.preventDefault();
    const state = $('#state-name').val();

    getParks(state);
    console.log("getting park names now");

    });
}