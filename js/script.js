document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('#toggle-theme');
  const body = document.querySelector('body');
  
  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }
  
  toggleButton.addEventListener('click', () => {
    if (hasClass(body, 'dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  });
})