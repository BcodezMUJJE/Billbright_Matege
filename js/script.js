const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');
  });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
  const imgSlides = document.querySelectorAll('.portfolio-carousel .img-slide');

  imgSlides.forEach(imgSlide => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  });
}

arrowRight.addEventListener('click', () => {
  if (index < 4) {
    index++;
  } else {
    index = 5;
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = 0;
  }

  activePortfolio();
});