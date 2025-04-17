const weatherAPI = "e361073631e2c1f68dcc5845794ce885";

bodyContainer =  document.querySelector('body');

// Menu toggle
toggleNav.addEventListener('click', function () {
   toggleNav.classList.toggle('open');
   mainNav.classList.toggle('active');
   navList.classList.toggle('active');
   bodyContainer.classList.toggle('nav-active');
   // Only change the logo if the body has the "page" class 
   if (bodyContainer.classList.contains("page")) {
      if (mainNav.classList.contains("active")) {
         logoImg.src = "logo.svg";
      } else {
         logoImg.src = "logo-light.svg";
      }
   }
});

// Nav active
const links = document.querySelectorAll('nav a');
   links.forEach(link => {
      if (link.href === window.location.href) {
      link.classList.add('active');
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