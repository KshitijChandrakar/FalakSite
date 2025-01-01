document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      console.log('Link clicked:', event.target.href);
    }
  });
});

window.onload = function() {
  var randomElement = "rainbow_color" + (Math.floor(Math.random() * 5) + 1);
  console.log('Page loaded!');
  document.querySelector('body').classList.remove("custom_color2");
  document.querySelector('body').classList.add(randomElement);
};
