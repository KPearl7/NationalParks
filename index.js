'use strict';

const BASE_URL = "http://api.nps.gov/api/v1/parks"

const API ="cWi11y9RDx0AsAVxM5WfivxwaJiAwhJ3801wyEpU"

function createQueryString(params) {
 const paramKeys = Object.keys(params)
 const encodedParams = paramKeys.map(key => {
 const encodedKey = encodeURIComponent(key)
 const encodedValue = encodeURIComponent(params[key])
 return `${encodedKey}=${encodedValue}`
 })
 return encodedParams.join('&');
}


function showResults(ressults, state)  {
    console.log(results);
    $('#parks').empty();

    let parks = results.data
    if (parks === undefined || parks.length == 0) {
        $('#parks').append(`<p>No info for this state ${state}</p>`)
    }  else {
 
    for(let i = 0; i < responseJson.length; i++) {
        let parksReturned = responseJson[i];
        ('#parks').append (`<li><h3>"${parksReturned.fullName}"></h3></li>
        <p>"${parksReturned.description}"</p>
        <a href="${parksReturned.url}">Click here for Website</a>`)
        }
        $('.hidden').show();
};


function getParks(state, maxResults=25) {
    const params = {
        api_key: API,
        limit: maxResults,
        stateCode: [state]
    };
    const queryString = createQueryString(params)
    const url = BASE_URL + '?' + queryString;
    console.log(url);
    
fetch(url) 
.then(response => (response.json())
.then(responseJson => showResults(responseJson, state))
.catch(err => { 
    $('#js-error').text(`Parks not found`)
})
)};

function clickSearch() {
    $('#button').click(event => {
        event.preventDefault();
    const state = $('#js-state-name').val();

    getParks(state);
    console.log("getting park names now");

    });
}

(clickSearch);
