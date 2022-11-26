'use strict';

const date = new Date();
document.querySelector('#footerDate').innerHTML = date.getFullYear();

const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
  },
  {
    rootMargin: "50px 0px 0px"
  }
);

document.querySelectorAll('img').forEach((image) => {
  imageObserver.observe(image);
});
