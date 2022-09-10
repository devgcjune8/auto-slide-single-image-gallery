const IMG_WRAPPER = document.querySelector('.img-wrapper')
const LEFT_BTN = document.querySelector('.left')
const RIGHT_BTN = document.querySelector('.right')
const IMG_ARR = document.querySelectorAll('.img-wrapper img')

console.log(IMG_ARR)

let index = 0;

let interval = setInterval(autoSlideImage, 4300)

// function autoSlide() {
//     index++
//     slideImage()
// }

function autoSlideImage(){
    index++

    if (index > IMG_ARR.length - 1) {
        index = 0
    } else if (index < 0) {
        index = IMG_ARR.length - 1
    }

    IMG_WRAPPER.style.transform = `translateX(${-index * 500}px)`
};

LEFT_BTN.addEventListener('click', () => {
    index--

    if (index > IMG_ARR.length - 1) {
        index = 0
    } else if (index < 0) {
        index = IMG_ARR.length - 1
    }

    IMG_WRAPPER.style.transform = `translateX(${-index * 500}px)`
})

RIGHT_BTN.addEventListener('click', () => {
    autoSlideImage()
})

window.addEventListener("keyup", function(event) {
    if (event.code === "ArrowLeft") {
        event.preventDefault();
        LEFT_BTN.click();
        LEFT_BTN.classList.remove('pressed');
    } else if (event.code === "ArrowRight") {
        event.preventDefault();
        RIGHT_BTN.click();
        RIGHT_BTN.classList.remove('pressed');
    }
}
        
);

window.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
        event.preventDefault();
        LEFT_BTN.classList.add('pressed');
    } else if (event.code === "ArrowRight") {
        event.preventDefault();
        RIGHT_BTN.classList.add('pressed');
    }
}
        
);