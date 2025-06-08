
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  this.reset();
});

document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', function() {
    const carName = this.parentElement.querySelector('h3').textContent;
    alert(`Запрос на покупку ${carName} отправлен!`);
  });
});
