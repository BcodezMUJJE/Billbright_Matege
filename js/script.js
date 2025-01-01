const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1000);

  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1000);

  sections.forEach((section) => {
    section.classList.remove('active');
  });
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();

      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1000);
    }
  });
});

logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();

    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1000);
  }
});

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
  const imgSlides = document.querySelectorAll('.portfolio-carousel .img-slide .img-item');
  const portfolioDetail = document.querySelectorAll('.portfolio-box .portfolio-details');
  
  imgSlides.forEach(imgSlide => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  });

  portfolioDetail.forEach(detail => {
    detail.classList.remove('active');
  });
}

arrowRight.addEventListener('click', () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove('disabled');
  } else {
    index = 5;
    arrowRight.classList.add('disabled');
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove('disabled');
  } else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }

  activePortfolio();
});