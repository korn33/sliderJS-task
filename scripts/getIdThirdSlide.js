import {thirdSlide} from "./renderThirdSlide.js";

export const getIdThirdSlide = {
    slider: null,
    i: undefined,

    getIdSlide: function () {
        let that = this;
        that.slider = document.getElementById('myRange');
        that.slider.addEventListener('touchend', function () {
            that.i = Number(that.slider.value);
            if (that.i <= 25) {
                thirdSlide.currentIdThirdSlide = 1;
                document.querySelector('.slide_3').style.cssText = 'position: absolute; left: 1030px;';
                thirdSlide.getThirdSlide(1);
                let intervalID = setInterval(function () {
                    that.slider.value = that.i;
                    that.i--;
                    if (that.i <= 1) {
                        clearInterval(intervalID);
                    }
                }, 5);
            } else if (that.slider.value >= 26 && that.slider.value <= 50) {
                thirdSlide.currentIdThirdSlide = 2;
                document.querySelector('.slide_3').style.cssText = 'position: absolute; left: 1030px;';
                thirdSlide.getThirdSlide(2);
                let intervalID = setInterval(function () {
                    that.slider.value = that.i;
                    that.i++;
                    if (that.i >= 50) {
                        clearInterval(intervalID);
                    }
                }, 5);
            } else if (that.slider.value >= 51 && that.slider.value <= 75) {
                thirdSlide.currentIdThirdSlide = 2;
                thirdSlide.getThirdSlide(2);
                let intervalID = setInterval(function () {
                    that.slider.value = that.i;
                    that.i--;
                    if (that.i <= 50) {
                        clearInterval(intervalID);
                    }
                }, 5);
            } else {
                thirdSlide.currentIdThirdSlide = 3;
                thirdSlide.getThirdSlide(3);
                let intervalID = setInterval(function () {
                    that.slider.value = that.i;
                    that.i++;
                    if (that.i >= 100) {
                        clearInterval(intervalID);
                    }
                }, 5);
            }
        });
    }
};