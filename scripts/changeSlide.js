import {indexInit} from "./index.js";
import {thirdSlide} from "./renderThirdSlide.js";

export const changeSlide = (numberSlide) => {
    const itemSlide = document.querySelector('.slider');
    itemSlide.innerHTML = '';
    let currentSlide = null;
    switch (numberSlide) {
        case 1:
            itemSlide.style.cssText = 'background-position: center top;'; //если swipe вызвал changeSlide(1) то
            setTimeout((() => {                                             //ждем конца анимации погружения
                        currentSlide = indexInit.initialSlideHTML;          //рисуем верхний слайд
                        itemSlide.innerHTML = currentSlide;
            }), 300);
            break;
        case 2:
            itemSlide.style.cssText = 'background-position: center center;';    //если swipe вызвал changeSlide(2) то погружаемся
            currentSlide = `<div class="slide slide_2">                          
                                <div class="indicators">
                                    <div class="ind_none">&#8226;</div> 
                                    <div class="ind_active">&#8226;</div>
                                    <div class="ind_none">&#8226;</div> 
                                </div>
                                <h2>Основа терапии — <br> патогенез СД2</h2>
                                <img class="ice_2" src="./img/ice_2.png" alt="">
                                <p class="go_to_bottom">Листайте вниз</p>       
                                <img class="arrow" src="./img/arrow.png" alt="">
                                <img class="Ellipse_4" src="./img/Ellipse_4.png" alt="">
                                <img class="Rectangle_5" src="./img/Rectangle_5.png" alt="">
                            </div>
            `;
            itemSlide.innerHTML = currentSlide; //рисуем средний слайд
            break;
        case 3:
            itemSlide.style.cssText = 'background-position: center bottom;';
            thirdSlide.getThirdSlide(thirdSlide.currentIdThirdSlide); //рисуем нижний слайд
            break;
    }
};