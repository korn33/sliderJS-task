import {getIdThirdSlide} from "./getIdThirdSlide.js";

export const thirdSlide = {
    thirdSlideArray: [              // массив с разметкой трех нижних слайдов
            null,                   // нулевой элемент массива null чтобы было проще
            `<div class="slide_3">
                <div class="indicators">
                    <div class="ind_none">&#8226;</div> 
                    <div class="ind_none">&#8226;</div>
                    <div class="ind_active">&#8226;</div> 
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="1" class="slider-polz" id="myRange">
                </div>
                <h1 class="h1_third_slide">Звенья патогенеза СД2</h1>
                <div class="time">
                    <div class="time_date">
                        <div class="time_date item">1988</div>
                        <div class="time_date item">2009</div>
                        <div class="time_date item">2016</div>
                    </div>
                </div>
                <img class="ice_3_1" src="./img/ice_3_1.png" alt="">
                <img class="shem_3_1" src="./img/shem_3_1.png" alt="">
            </div>
            `,
            `
            <div class="slide_3">
                <div class="indicators">
                    <div class="ind_none">&#8226;</div> 
                    <div class="ind_none">&#8226;</div>
                    <div class="ind_active">&#8226;</div> 
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider-polz" id="myRange">
                </div>
                <h1 class="h1_third_slide">Смертельный октет</h1>
                <div class="time">
                    <div class="time_date">
                        <div class="time_date item">1988</div>
                        <div class="time_date item">2009</div>
                        <div class="time_date item">2016</div>
                    </div>
                </div>
                <img class="ice_3_2" src="./img/ice_3_2.png" alt="">
                <img class="shem_3_2" src="./img/shem_3_2.png" alt="">
            </div>
            `,
            `
            <div class="slide_3">
                <div class="indicators">
                    <div class="ind_none">&#8226;</div> 
                    <div class="ind_none">&#8226;</div>
                    <div class="ind_active">&#8226;</div> 
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="100" class="slider-polz" id="myRange">
                </div>
                <h1 class="h1_third_slide">Звенья патогенеза СД2</h1>
                <div class="time">
                    <div class="time_date">
                        <div class="time_date item">1988</div>
                        <div class="time_date item">2009</div>
                        <div class="time_date item">2016</div>
                    </div>
                </div>
                <img class="shem_3_3" src="./img/shem_3_3.png" alt="">
                <img class="ice_3_3" src="./img/ice_3_3.png" alt="">
            </div>
            `,
    ],

    currentIdThirdSlide: 1,  //запоминалка чтобы при всплытии-погружении был отображен последний активированный нижний слайд

    itemSlide: document.querySelector('.slider'),

    getThirdSlide: function (idThirdSlide) { //swipe вызвал changeSlide(3), а он getThirdSlide(с тем id, который на ползунке)
        this.itemSlide.innerHTML = '';
        this.itemSlide.innerHTML = this.thirdSlideArray[idThirdSlide]; //рисуем разметку
        getIdThirdSlide.getIdSlide(); //оживляем ползунок
    },
};