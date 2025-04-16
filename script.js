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