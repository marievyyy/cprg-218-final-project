const weatherAPI = "e361073631e2c1f68dcc5845794ce885";

bodyContainer =  document.querySelector('body');

// Menu toggle
toggleNav.addEventListener('click', function () {
   toggleNav.classList.toggle('open');
   mainNav.classList.toggle('active');
   navList.classList.toggle('active');
   // Only change the logo if the body has the "page" class 
   if (bodyContainer.classList.contains("page")) {
      if (mainNav.classList.contains("active")) {
         logo.src = "logo.svg";
      } else {
         logo.src = "logo-light.svg";
      }
   }
});

// Weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=e361073631e2c1f68dcc5845794ce885&units=metric`)
   .then(response => response.json())
   .then(data => {
      console.log(data);
      temp.textContent = `${data.main.temp} \u00B0C`;
      condition.textContent = `${data.weather[0].description}`;
   });