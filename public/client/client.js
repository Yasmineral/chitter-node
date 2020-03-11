const form = document.querySelector('form')
const API_URL = 'http://localhost:3003/'

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

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
})