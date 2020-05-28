import {changeSlide} from './changeSlide.js';

export const swipe = {
    initialPoint: null,
    finalPoint: null,
    counter: 1,

    startSwipe: function () { //запоминаем начальную позицию откуда начался тап
        let that = this;
        document.addEventListener('touchstart', function (event) {
            event.stopPropagation();
            that.initialPoint = event.changedTouches[0];
        }, false);
    },

    endSwipe: function () {
        let that = this;
        document.addEventListener('touchend', function (event) {
            event.preventDefault();
            event.stopPropagation();
            that.finalPoint = event.changedTouches[0]; //смотрим где тап закончился
            let xAbs = Math.abs(that.initialPoint.pageX - that.finalPoint.pageX);
            let yAbs = Math.abs(that.initialPoint.pageY - that.finalPoint.pageY);
            if (xAbs > 20 || yAbs > 20) {
                if (xAbs > yAbs) {
                    if (that.finalPoint.pageX < that.initialPoint.pageX) {
                        return;
                    } else {
                        return; //если свайпы горизонтальные, то return
                    }
                } else {
                    if (that.finalPoint.pageY < that.initialPoint.pageY) { //если свайп вверх
                        if (that.counter === 1) {
                            that.counter = 2;
                            changeSlide(that.counter);
                        } else if (that.counter === 2) {
                            that.counter = 3;
                            changeSlide(that.counter);
                        } else {
                            return;
                        }
                    } else {                                                //если свайп вниз
                        if (that.counter === 1) {
                            return;
                        } else if (that.counter === 2) {
                            that.counter = 1;
                            changeSlide(that.counter);
                        } else {
                            that.counter = 2;
                            changeSlide(that.counter);
                        }
                    }
                }
            }
        }, false);
    },

    initSwipe: function () {
        this.startSwipe();
        this.endSwipe();
    },
};