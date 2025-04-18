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

// animation
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('animate');
      entry.target.classList.add('animated');
      obs.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '-100px',   
  threshold: 0           
});

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});


// parallax
// pick a speed factor (0.2 = very slow, 1 = scroll‑match)
const speed = 0.5;

// grab every .parallax element
const parallaxEls = document.querySelectorAll('.parallax');

let raf = false;
window.addEventListener('scroll', () => {
  if (!raf) {
    window.requestAnimationFrame(() => {
      const offset = window.pageYOffset * speed;
      parallaxEls.forEach(el => {
        el.style.backgroundPositionY = `${offset}px`;
      });
      raf = false;
    });
    raf = true;
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