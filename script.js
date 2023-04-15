const cards = document.querySelectorAll('.card');

function removeActiveClass() {
  cards.forEach(card => card.classList.remove('active'));
}

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    removeActiveClass();
    card.classList.add('active');
  });
});
