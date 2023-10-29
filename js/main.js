const doc = document;
const slides = doc.querySelectorAll('.slide');
const sliderBtns = doc.querySelectorAll('.slider-btn');
const sliderDots = doc.querySelectorAll('.dot');
const sliderEl = doc.querySelector('.slider__slides');

console.log(sliderEl);

const sliderSlides = [
    {
        img: 'img1.jfif',
        title: 'Slide 1',
        text: 'Winter!',
    },
    {
        img: 'img2.jfif',
        title: 'Slide 2',
        text: 'Spring!',
    },
    {
        img: 'img3.jfif',
        title: 'Slide 3',
        text: 'Summer!',
    },
    {
        img: 'img4.jfif',
        title: 'Slide 4',
        text: 'Autumn!',
    },
]
const btnFunc = [prevSlide, nexSlide];
const slidesCount = slides.length;
let currentSlide = 1;

const postItems = sliderSlides.map(function (item) {
return `
    <div class="slide__img">
        <img src="img/${item.img}" alt="">
    </div>
    <div class="slide-content">
        <h3 class="slide-content__title">${item.title}</h3>
        <p class="slide__text">${item.text}</p>
    </div> 
    `
}).join('');

sliderEl.innerHTML = postItems;
console.log(postItems);

setActiveSlide(currentSlide);

sliderDots.forEach(function (dot) {
    dot.onclick = function () {
        currentSlide = this.dataset.number;
        setActiveSlide(currentSlide);
    }
});

initSliderBtns();

//function
function setActiveDot(slideNumber) {
    sliderDots.forEach(function (dot) {
        dot.classList.remove('dot_active');
    });
    sliderDots[slideNumber - 1].classList.add('dot_active');
}

function initSliderBtns() {
    sliderBtns.forEach(function (btn, index) {
        btn.onclick = function () {
            btnFunc[index]();
        }
    });
}

function nexSlide() {
    currentSlide++;
    if (currentSlide > slidesCount) {
        currentSlide = 1;
    }
    setActiveSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = slidesCount;
    }
    setActiveSlide(currentSlide);
}

function setActiveSlide(slideNumber) {
    slides.forEach(function (slide) {
        slide.classList.remove('slide_active');
    });
    slides[slideNumber - 1].classList.add('slide_active');
    setActiveDot(currentSlide);
}