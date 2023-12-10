const img = document.querySelectorAll('img');
const slider = document.querySelectorAll('.btm-sliders span');

let indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 3500)
    for(let x = 0; x < img.length; x++) {
        img[x].style.display = 'none';
    }
    for(let i = 0; i < slider.length; i++) {
        slider[i].style.background = 'rgba(255, 255, 255, 0.1)'
    }
    indexValue++;
    if(indexValue > img.length) {
        indexValue = 1
    }

    img[indexValue - 1].style.display = 'block';
    slider[indexValue - 1].style.background = 'white';

}

slideShow();
function btm_slide(e) {
    showImg(indexValue = e);
}