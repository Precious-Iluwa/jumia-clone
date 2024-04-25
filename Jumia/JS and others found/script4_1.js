url = "http://fakestoreapi.com/products";

fetch(url)
  .then(respons => respons.json())
  .then(data => {
    console.log('Fetched data:', data);

    const img = document.createElement('img');
    img.src = data["message"];
    document.body.appendChild(img);
  })
  .catch(e => {
    console.error('Error fetching data:', e);
  });