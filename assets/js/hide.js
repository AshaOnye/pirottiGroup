// Get the toggle button and gallery
const toggleBtn = document.getElementById('toggleBtnz');
const gallery = document.querySelector('.drop-imgz');
var iconElement = document.getElementById('pluz');

// Add click event listener to toggle button
toggleBtn.addEventListener('click', function() {
  // Toggle the visibility of the gallery
  if (gallery.style.display === 'none' || gallery.style.display === '') {
    gallery.style.display = 'flex';
    toggleBtn.textContent = 'iconElement';
  } else {
    gallery.style.display = 'none';
    toggleBtn.textContent = '+';
  }
});
