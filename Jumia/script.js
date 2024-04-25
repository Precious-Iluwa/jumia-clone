
function hamMenu(){
    if (document.querySelector('.dropdown-content').style.display == 'block'){
        document.querySelector('.dropdown-content').style.display = 'none';
    } else {
        document.querySelector('.dropdown-content').style.display = 'block';
    }

    document.getElementsByClassName('ham-bar').addEventListener('click', hamMenu);
}

document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("product-image");
    
    fetch("https://fakestoreapi.com/products/9")
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.image;
        imageElement.src = imageUrl;

        const description = data.description;
        document.getElementById('description').innerText = description;

        const title = data.title;
        document.getElementById('product-title').innerText = title;

        // const price = data.price;
        // document.getElementById('product-prc').innerText = price;
      })
      .catch(error => console.error("Error fetching data:", error));
  });

document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');
    let countdownTime = 86400; // 1 hour
    const interval = setInterval(updateTimer, 1000);

    function updateTimer() {
      const minutes = Math.floor(countdownTime / 60);
      const seconds = countdownTime % 60;
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      // Add leading zeros if necessary
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(remainingMinutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      // Display the countdown timer
      timerDisplay.textContent = `${formattedHours}hr:${formattedMinutes}m:${formattedSeconds}s`;
      // Decrease the countdown time
      countdownTime--;

      // Stop the countdown when it reaches zero
      if (countdownTime < 0) {
        clearInterval(interval);
        timerDisplay.textContent = '00:00:00';
      }
    }
  });
