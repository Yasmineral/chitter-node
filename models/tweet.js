
function createTweet() 

const tweet = {
  name,
  content
}

fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify(tweet),
  headers: {
    'content-type': 'application/json'
  }
})