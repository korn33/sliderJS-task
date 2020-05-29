import {swipe} from './swipe.js';

export let indexInit = {
    initialSlideHTML: `
    <div class="slide slide_1">
        <div class="indicators">
            <div class="ind_active">&#8226;</div> 
            <div class="ind_none">&#8226;</div>
            <div class="ind_none">&#8226;</div> 
        </div>
        <h1>Всегда ли цели терапии СД2 <br> на поверхности?</h1>
        <span class="mgo-widget-call_pulse"></span><p class='HbAlc'>Цель по HbAlc</p>
        <span class="mgo-widget-call_pulse_Gipoglikemia"></span><p class='Gipoglikemia'>Гипогликимия</p>
        <span class="mgo-widget-call_pulse_SS_riski"></span><p class='SS_riski'>СС риски</p>
        <span class="mgo-widget-call_pulse_oslojneniya_SD"></span><p class='oslojneniya_SD'>Осложнения СД</p>
        <p class="go_to_bottom">Листайте вниз</p>
        <img class="arrow" src="./img/arrow.png"  alt=""/>
        <img class="Ellipse_4" src="./img/Ellipse_4.png" alt=""/>
        <img class="Rectangle_5" src="./img/Rectangle_5.png" alt=""/>
    </div>
    `,

    init: function () {
        window.addEventListener('load', function () {
            swipe.initSwipe();                                        //активируем свайпы на странице
        });
        const itemSlide = document.querySelector('.slider');
        itemSlide.innerHTML = this.initialSlideHTML;                    //рисуем верхний слайд
    }
};
if (window.innerHeight !== 768 || window.innerWidth !== 1024) {  //приверка того чтобы не рисовалась страница когда это не надо
    const itemSlide = document.querySelector('.slider');
    itemSlide.innerHTML = `Откройте приложение в режиме совместимости с iPad (1024х768) и обновите страницу`;
} else {
    indexInit.init ();
}


