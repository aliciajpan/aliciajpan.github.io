class Carousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.slides = this.container.getElementsByClassName("carousel-slide");
    this.slideIndex = 0;
    this.init();
  }

  init() {
    this.showSlides();
    this.container.querySelector("#prevBtn").addEventListener("click", () => {
      this.slideIndex -= 2;
      this.showSlides();
    });

    this.container.querySelector("#nextBtn").addEventListener("click", () => {
      this.showSlides();
    });
  }
    
  showSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove('active');
    }
    
    const indicatorsContainer = this.container.querySelector('.indicators');
    let indicatorButtons = '';

    this.slideIndex++;
    
    if (this.slideIndex <= 0) {
        this.slideIndex = this.slides.length;
    }
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }    
    
    this.slides[this.slideIndex - 1].classList.add('active');

    // setTimeout(() => this.showSlides(), 2000); // Change image every 2 seconds (no animation)
  }
}

// Initialize carousels
const carousel1 = new Carousel("myCarousel");
