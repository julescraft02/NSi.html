// script.js
const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

const isDarkMode = () => body.classList.contains('dark-mode');

const toggleTheme = () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode());
};

toggleThemeButton.addEventListener('click', toggleTheme);

const loadTheme = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
  }
};

window.addEventListener('load', loadTheme);

window.onscroll = function() {
  var button = document.getElementById('toggleTheme');
  var footer = document.getElementById('footer');

  var footerStart = window.innerHeight - footer.getBoundingClientRect().top;

  if (footerStart > 0) {
    button.style.bottom = (footerStart + 10) + 'px';
  } else {
    button.style.bottom = '10px';
  }
};
