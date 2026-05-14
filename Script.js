// Smooth Scroll
function scrollToStory(){

  document.getElementById("story").scrollIntoView({
    behavior:"smooth"
  });
}

// Fade Animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';
    }

  });
});

// Initial State
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 1s ease';
});

