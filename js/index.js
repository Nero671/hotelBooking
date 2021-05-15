const slider = () => {
  const slide = document.querySelectorAll('.hotel-images-item'),
        slider = document.querySelector('.hotel-images');

  let currentSlider = 0,
      interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlider, 'hotel-images-item-active');
    currentSlider++;

    if(currentSlider >= slide.length) {
      currentSlider = 0;
    }

    nextSlide(slide, currentSlider, 'hotel-images-item-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;

    if(!target.closest('.hotel-images__btn')) {
      return
    }

    prevSlide(slide, currentSlider, 'hotel-images-item-active');

    if(target.closest('#arrow-right')) {
      currentSlider++;
    } else if(target.closest('#arrow-left')) {
      currentSlider--;
    }

    if(currentSlider >= slide.length) {
      currentSlider = 0;
    }

    if(currentSlider < 0) {
      currentSlider = slide.length - 1;
    }

    nextSlide(slide, currentSlider, 'hotel-images-item-active');
  });

  slider.addEventListener('mouseover', e => {
    if(e.target.closest('.hotel-images__btn')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', e => {
    if(e.target.closest('.hotel-images__btn')) {
      startSlide();
    }
  });

  startSlide(1500);
}

slider();

const menu = () => {
  const navbar = document.querySelector('.navbar'),
        menu = document.querySelector('.menu'),
        burgerLine = document.querySelectorAll('.burger-line');
  
  

  navbar.addEventListener('click', e => {
    if(e.target.closest('.burger')) {
      menu.classList.toggle('show');
      burgerLine.forEach(item => item.classList.toggle('burger-line-cross'));
    }
  })
}

menu();

const tabs = () => {
  const serviceHeader = document.querySelector('.service-header'),
        tab = document.querySelectorAll('.service-header-tab'),
        serviceTab = document.querySelectorAll('.service-tab');

  const toggleTabContent = index => {
    for(let i = 0; i < serviceTab.length; i++) {
      if(index === i) {
        tab[i].classList.add('active');
        serviceTab[i].classList.remove('d-none');
      } else {
        tab[i].classList.remove('active');
        serviceTab[i].classList.add('d-none');
      }
    }
  }

  serviceHeader.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('service-header-tab')) {
      tab.forEach((item, i) => {
        if(item === target) {
          toggleTabContent(i);
        }
      })
    }
  })
};

tabs();

const showHotel = () => {
  const hotelImage = document.querySelectorAll('.hotel-image__radius'),
        hotelСard = document.querySelectorAll('.hotel-card'),
        hotelShowName = document.querySelectorAll('.hotel-show-name');

  const clearImg = () => {
    hotelImage.forEach(item => item.classList.add('hotel-show'));
  }

  const clearCard = () => {
    hotelСard.forEach(item => item.classList.remove('open-card'));
  }

  const clearHotelName = () => {
    hotelShowName.forEach(item => item.classList.remove('hotel-show-name__opacity'));
  }


  hotelImage.forEach((item, i) => {
    item.addEventListener('click', () => {
      if(item.classList.contains('hotel-show')) {
        clearImg();
        item.classList.remove('hotel-show');
        clearCard();
        hotelСard[i].classList.add('open-card');
        clearHotelName();
        hotelShowName[i].classList.add('hotel-show-name__opacity');
      }
    })
  });

  if(document.body.clientWidth <= 810) {
    clearImg();
    clearCard();
    clearHotelName();
  }
}

showHotel();

const reviewsSlider = () =>{
  const slider = document.querySelector('.reviews-slider-wrap'),
        slide = document.querySelectorAll('.reviews-slider__slide');

  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  

  slider.addEventListener('click', e => {
    let target = e.target;

    if(!target.closest('.slider-arrow_right') && !target.closest('.slider-arrow_left')) {
      return
    }

    prevSlide(slide, currentSlide, 'reviews-slider__slide-active');
    
    if(target.closest('.slider-arrow_right')) {
      currentSlide++;
    } else if(target.closest('.slider-arrow_left')) {
      currentSlide--;
    }

    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if(currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'reviews-slider__slide-active');
  })
}

reviewsSlider();