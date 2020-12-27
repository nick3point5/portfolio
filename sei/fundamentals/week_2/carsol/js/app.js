const pic1 = document.querySelector('.first')
const pic2 = document.querySelector('.second')
const pic3 = document.querySelector('.third')

const picArr = [pic1,pic2,pic3]

const nextBtn = document.querySelector('.carousel-control-next')
const prevBtn = document.querySelector('.carousel-control-prev')

const carousel = document.querySelector('carousel-inner')

//carousel.style.backgroundImage = picArr[0]

function cycleArrNext(){
    picArr[0].classList.toggle("active")
    picArr.unshift(picArr.pop())
    picArr[0].classList.toggle("active")
}

function nextPic() {
    cycleArrNext();
}

picArr[0].addEventListener('click', nextPic)
picArr[1].addEventListener('click', nextPic)
picArr[2].addEventListener('click', nextPic)