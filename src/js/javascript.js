const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageContainer = document.querySelector('.image-container');

let currentImageIndex = 0;

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + imageContainer.children.length) % imageContainer.children.length;
  imageContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % imageContainer.children.length;
  imageContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    const offsetTop = targetSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior:"smooth"
    });
  }
}