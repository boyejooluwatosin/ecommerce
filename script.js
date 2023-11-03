const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

let currentBannerHeader = document.querySelector('#banner-header-1')
nextButton.addEventListener('click' ,next)

prevButton.addEventListener('click',previous)

function next(){
    currentBannerHeader.classList.toggle('hidden')
    if (currentBannerHeader.nextElementSibling){
        currentBannerHeader = currentBannerHeader.nextElementSibling;
    }
    else{
        currentBannerHeader = currentBannerHeader.parentElement.firstElementChild;
    }
    currentBannerHeader.classList.toggle('hidden')
}
function previous(){
    currentBannerHeader.classList.toggle('hidden')
    if (currentBannerHeader.previousElementSibling){
        currentBannerHeader = currentBannerHeader.previousElementSibling;
    }
    else{
        currentBannerHeader = currentBannerHeader.parentElement.lastElementChild;
    }
    currentBannerHeader.classList.toggle('hidden')
}

function Next1(){
    next();
    setInterval('next 45deg',4000);
}
Next1();