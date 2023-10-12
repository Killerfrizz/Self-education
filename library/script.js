/*Burger*/
const BURGER = document.querySelector("#nav-toggle");
const NAV = document.querySelector("#nav");
BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
})

/*scroll*/
const smoothLinks = document.querySelectorAll('a[data-scroll]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('data-scroll').substring(1);
        const scrollTarget = document.getElementById(id);
        const topOffset = 15;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}

/*slider*/

function sliderForDots(dot, dotnum) {
    dotnum--;
    const ALLDOTS = document.querySelectorAll(".dot")
    const SLIDER = document.getElementById("slider_inner");
    const imgWidth = document.querySelector("#about_img").offsetWidth;
    SLIDER.style.left = -(imgWidth - 30) * dotnum + "px";
    ALLDOTS.forEach(element => {
        element.classList.remove("active");
    });
    dot.classList.add("active");
}

var currentDot = 1;
const BTN_LEFT = document.querySelector("#arrow_left");
const BTN_RIGHT = document.querySelector("#arrow_rigth");

const DOT1 = document.querySelector("#dot1");
DOT1.addEventListener("click", () => {
    currentDot = 1;
    sliderForDots(DOT1, currentDot);
    BTN_RIGHT.style.visibility = "visible";
    BTN_LEFT.style.visibility = "hidden";
})
const DOT2 = document.querySelector("#dot2");
DOT2.addEventListener("click", () => {
    currentDot = 2;
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "visible";
    sliderForDots(DOT2, currentDot);
})
const DOT3 = document.querySelector("#dot3");
DOT3.addEventListener("click", () => {
    currentDot = 3;
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "visible";
    sliderForDots(DOT3, currentDot);
})
const DOT4 = document.querySelector("#dot4");
DOT4.addEventListener("click", () => {
    currentDot = 4;
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "visible";
    sliderForDots(DOT4, currentDot);
})
const DOT5 = document.querySelector("#dot5");
DOT5.addEventListener("click", () => {
    currentDot = 5;
    sliderForDots(DOT5, currentDot);
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "hidden";
})

BTN_LEFT.addEventListener("click", () => {
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "visible";
    currentDot--;
    const dot = document.querySelector("#dot" + currentDot)
    sliderForDots(dot, currentDot)
    if (currentDot === 1) {
        BTN_LEFT.style.visibility = "hidden";
    }
})
BTN_RIGHT.addEventListener("click", () => {
    BTN_LEFT.style.visibility = "visible";
    BTN_RIGHT.style.visibility = "visible";
    currentDot++;
    const dot = document.querySelector("#dot" + currentDot)
    sliderForDots(dot, currentDot)
    if (currentDot === 5) {
        BTN_RIGHT.style.visibility = "hidden";
    }
})

/*favorites*/
const Rwinter = document.getElementById("radwinter");
const Rspring = document.getElementById("radspring");
const Rsummer = document.getElementById("radsummer");
const Rautumn = document.getElementById("radautumn");

function checkSeason(season) {
    const curSeason = document.getElementById(season);
    const allSeasons = document.querySelectorAll(".favorites")
    allSeasons.forEach(element => {
        
        element.style.opacity="0";
        
        //curSeason.style.display = "flex";
        setTimeout(()=>{
            element.style.display = "none";
            curSeason.style.display = "flex";
            setTimeout(()=>{
                curSeason.style.opacity="1";
            },1)
        },1000);
        
    });

    

    const allRadio = document.querySelectorAll(".favorites_label");
    allRadio.forEach(radelement => {
        radelement.classList.remove("active");
    })

    season = "lab" + season;
    const curRadio = document.getElementById(season);
    curRadio.classList.add("active");
    
    
}


Rwinter.onchange = function () {
    checkSeason("winter");
}
Rspring.onchange = function () {
    checkSeason("spring");
}
Rsummer.onchange = function () {
    checkSeason("summer");
}
Rautumn.onchange = function () {
    checkSeason("autumn");
}