const allInp=document.querySelectorAll("input")
for (let cur of allInp){
    cur.value="";
}

if (localStorage.length == 0) {
    localStorage.setItem("registed", false);
}
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

Rwinter.checked= "true";

function checkSeason(season) {
    const curSeason = document.getElementById(season);
    const allSeasons = document.querySelectorAll(".favorites")
    allSeasons.forEach(element => {

        element.style.opacity = "0";

        setTimeout(() => {
            element.style.display = "none";
            curSeason.style.display = "flex";
            setTimeout(() => {
                curSeason.style.opacity = "1";
            }, 1)
        }, 1000);

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

/*profile*/
const icon = document.getElementById("profile-icon");
const profileBlock = document.getElementById("profile_block");
const profileBlockAuth = document.getElementById("profile_block_loged");
const profileToggle = () => {
    profileBlock.classList.toggle("profile_block_visible")
}

icon.addEventListener("click", () => {
    profileToggle();
    let toggle_menu_active = NAV.classList.contains("active");
    if (toggle_menu_active) {
        NAV.classList.remove("active");
        BURGER.classList.remove("active");
    }
})

const profileStatus = document.querySelector("#profile_status");
document.addEventListener("click", e => {
    let target = e.target;
    let its_menu = target == profileBlock || profileBlock.contains(target);
    let its_profile = target == profileStatus || profileStatus.contains(target);
    let its_icon = target == icon;
    let its_buy = target.classList == "favorites_btn";
    let menu_is_active = profileBlock.classList.contains('profile_block_visible');
    if (!its_menu && !its_icon && menu_is_active) {
        profileToggle();
    }
    let toggle_menu_active = NAV.classList.contains("active");
    let its_burger = target == BURGER;
    if (toggle_menu_active && !its_burger) {
        NAV.classList.remove("active");
        BURGER.classList.remove("active")
    }
    if (!its_profile) {
        profileStatus.classList.remove("modal_profile_visible");
    }
})

const profileLog = document.getElementById("profileLog");
const backlayer = document.getElementById("layer");
const login = document.getElementById("login");
const reg = document.getElementById("registration");

profileLog.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    login.classList.remove("hide");
    backlayer.classList.add("show");
    login.classList.add("show");
})

const profileReg = document.querySelector("#profileReg");
profileReg.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    reg.classList.remove("hide");
    backlayer.classList.add("show");
    reg.classList.add("show");
})

const closebtn1 = document.querySelector("#close_btn1");
closebtn1.addEventListener("click", () => {
    backlayer.classList.remove("show");
    reg.classList.remove("show");
    backlayer.classList.add("hide");
    reg.classList.add("hide");
})

const closebtn2 = document.querySelector("#close_btn2");
closebtn2.addEventListener("click", () => {
    backlayer.classList.remove("show");
    login.classList.remove("show");
    backlayer.classList.add("hide");
    login.classList.add("hide");
})

const closebtn3 = document.querySelector("#close_btn3");
closebtn3.addEventListener("click", () => {
    backlayer.classList.remove("show");
    profileStatus.classList.remove("show");
    backlayer.classList.add("hide");
    profileStatus.classList.add("hide");
})

const closebtn4 = document.querySelector("#close_btn4")
closebtn4.addEventListener("click", () => {
    backlayer.classList.remove("show");
    document.querySelector("#modal_buy").classList.remove("show");
    document.querySelector("#modal_buy").classList.add("hide");
    backlayer.classList.add("hide");
})


backlayer.addEventListener("click", e => {
    let target = e.target;
    if (target == backlayer) {
        backlayer.classList.remove("show");
        reg.classList.remove("show");
        login.classList.remove("show");
        backlayer.classList.add("hide");
        login.classList.add("hide");
        reg.classList.add("hide");
        document.querySelector("#modal_buy").classList.remove("show");
        document.querySelector("#modal_buy").classList.add("hide");
        document.querySelector("#profile_status").classList.remove("show_flex");
        document.querySelector("#profile_status").classList.add("hide");
    }
})

const regToLog = document.getElementById("regToLog");
const logToReg = document.getElementById("logToReg");
regToLog.addEventListener("click", () => {
    reg.classList.remove("show");
    reg.classList.add("hide");
    login.classList.remove("hide");
    login.classList.add("show");
})
logToReg.addEventListener("click", () => {
    login.classList.remove("show");
    login.classList.add("hide");
    reg.classList.remove("hide");
    reg.classList.add("show");
})

const digital_info_reg = document.getElementById("digital_info_reg");
const digital_info_log = document.getElementById("digital_info_log");
digital_info_log.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    login.classList.remove("hide");
    backlayer.classList.add("show");
    login.classList.add("show");
})
digital_info_reg.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    reg.classList.remove("hide");
    backlayer.classList.add("show");
    reg.classList.add("show");
})

var autorized = false;

const profileLetters = document.querySelector("#profile-letters");
function fourState() {

    //digital card
    document.querySelector(".digital_info_title").innerHTML = "Visit your profile";
    document.querySelector(".digital_info_text").innerHTML = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
    document.querySelector("#digital_info_reg").classList.add("hide");
    document.querySelector("#digital_info_log").classList.add("hide");
    document.querySelector("#digital_info_profile").classList.remove("hide");

    //profile icon
    str = localStorage.getItem("name")[0] + localStorage.getItem("surname")[0];
    profileLetters.innerHTML = str;
    profileLetters.classList.remove("hide");
    document.querySelector("#profile-icon").classList.add("hide");
    document.querySelector("#profile_title_num").innerHTML = localStorage.getItem("profileNumber")

    //profile state
    document.querySelector("#profile_state_visits").innerHTML = localStorage.getItem("visits");
    document.querySelector("#profile_state_bonuses").innerHTML = localStorage.getItem("bonuses");
    document.querySelector("#profile_state_books").innerHTML = localStorage.getItem("books");
    document.querySelector(".profile_status_letters").innerHTML = localStorage.getItem("name")[0] + localStorage.getItem("surname")[0]
    document.querySelector(".profile_status_name").innerHTML = localStorage.getItem("name") + " " + localStorage.getItem("surname")
    document.querySelector(".card_number").innerHTML = localStorage.getItem("profileNumber")

    /*own books*/
    if (localStorage.getItem("registed") == "true") {
        let arrayId = localStorage.getItem("haveID").split(' ');
        for (let i = 1; i < arrayId.length; i++) {
            let selector = "#" + arrayId[i] + " .favorites_btn"
            let btn = document.querySelector(selector);
            btn.classList.add("btn_own");
            btn.innerHTML = "Own";
            let selector2 = "#" + arrayId[i] + " .favorites_name";
            bookName = document.querySelector(selector2).innerHTML;
            let by = "By"
            let newbookName = bookName.replace(by, ",");
            let profile = document.querySelector("#profile_list_book");
            let newBook = document.createElement("li");
            newBook.innerHTML = newbookName;
            profile.append(newBook);
        }
    }

    /*digital card */
    document.querySelector("#card_input_name").style.color = "#BB945F";
    document.querySelector("#card_input_num").style.color = "#BB945F";
    document.querySelector("#digital_panel_visits").innerHTML = localStorage.getItem("visits");
    document.querySelector("#digital_panel_bonuses").innerHTML = localStorage.getItem("bonuses");
    document.querySelector("#digital_panel_books").innerHTML = localStorage.getItem("books");
    document.querySelector("#card_input_name").style.border = "none";
    document.querySelector("#card_input_num").style.border = "none";
    let digitalBlock = document.querySelector("#digital_panel_block");
    cardBtn.classList.add("hide");
    digitalBlock.classList.remove("hide");

    //profile status
    //добавить атрибут title возможно верно но нужно проверить
    str = localStorage.getItem("name")+ " "+ localStorage.getItem("surname");
    document.querySelector("#profile-letters").setAttribute("title", str);
}

profileLetters.addEventListener("click", () => {
    profileBlockAuth.classList.toggle("profile_block2_visible");

})

//registration
const confirmReg = document.getElementById("confirmReg");
confirmReg.addEventListener("click", () => {
    let user = {
        strfname: document.getElementById("fname").value,
        strlname: document.getElementById("lname").value,
        strmail: document.getElementById("mail").value,
        strpas: document.getElementById("regpas").value,
    }
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (user.strfname.length == 0) {
        document.getElementById("fname").style.borderColor = "red";
    } else if (user.strlname.length == 0) {
        document.getElementById("lname").style.borderColor = "red";
    } else if (user.strmail.length == 0 && !EMAIL_REGEXP.test(user.strmail)) {
        document.getElementById("mail").style.borderColor = "red";
    } else if (user.strpas.length < 8) {
        document.getElementById("regpas").style.borderColor = "red";
    } else {
        localStorage.setItem("name", user.strfname);
        localStorage.setItem("surname", user.strlname);
        localStorage.setItem("mail", user.strmail);
        localStorage.setItem("password", user.strpas);
        localStorage.setItem("profileNumber", getRandomNum());
        localStorage.setItem("visits", 1);
        localStorage.setItem("bonuses", 0);
        localStorage.setItem("books", 0);
        localStorage.setItem("buyData", false);
        localStorage.setItem("haveID", "");
        localStorage.setItem("registed", true);
        autorized = true;

        //состояние 4
        fourState();
        backlayer.classList.remove("show");
        reg.classList.remove("show");
        backlayer.classList.add("hide");
        reg.classList.add("hide");
    }
})


profileBlockAuth.addEventListener("click", () => {
    let profileStatus = document.querySelector("#profile_block_loged");
    profileStatus.classList.toggle("profile_block2_visible");
})

function getRandomNum() {
    let res = "";
    for (let i = 0; i < 9; i++) {
        let num = Math.floor(Math.random() * 16);
        switch (num) {
            case 10:
                res = res + "A";
                break;
            case 11:
                res = res + "B";
                break;
            case 12:
                res = res + "C";
                break;
            case 13:
                res = res + "D";
                break;
            case 14:
                res = res + "E";
                break;
            case 15:
                res = res + "F";
                break;
            default:
                res = res + num;
        }
    }
    return res;
}

//login
const confirmLog = document.getElementById("confirmLog");
confirmLog.addEventListener("click", () => {
    let strlog = document.getElementById("log").value;
    let strlogpas = document.getElementById("logpas").value;
    if (strlog.length == 0) {
        document.getElementById("log").style.borderColor = "red";
    }
    else if (strlogpas.length < 8) {
        document.getElementById("logpas").style.borderColor = "red";
    }
    else {
        if (checklog(strlog, strlogpas)) {
            let num = localStorage.getItem("visits");
            num++;
            localStorage.setItem("visits", num);
            autorized = true;
            //состояние 4
            fourState()
            backlayer.classList.remove("show");
            login.classList.remove("show");
            backlayer.classList.add("hide");
            login.classList.add("hide");
        }
    }
})

function checklog(l, p) {
    if (l != localStorage.getItem("mail") && l != localStorage.getItem("profileNumber")) {
        document.getElementById("log").style.borderColor = "red";
        return false;
    } else if (p != localStorage.getItem("password")) {
        document.getElementById("logpas").style.borderColor = "red";
        return false;
    } else {
        return true;
    }
}

//login if buy click
const allBuy = document.querySelector("#favorites");
const modalBuy = document.querySelector("#modal_buy");
allBuy.addEventListener("click", e => {
    if (e.target.classList == "favorites_btn" && autorized == false) {
        backlayer.classList.remove("hide");
        login.classList.remove("hide");
        backlayer.classList.add("show");
        login.classList.add("show");
    }

    //buy click
    if (e.target.classList == "favorites_btn" && autorized == true) {
        if (localStorage.getItem("buyData") == "false") {
            backlayer.classList.remove("hide");
            backlayer.classList.add("show");
            modalBuy.classList.remove("hide");
            modalBuy.classList.add("show");

            const buy_confirm = document.getElementById("buy_confirm");
            buy_confirm.addEventListener("click", () => {
                let str1 = document.querySelector("#bank_num").value;
                let str2_1 = document.querySelector("#buy_code1").value;
                let str2_2 = document.querySelector("#buy_code2").value;
                let str3 = document.querySelector("#buy_cvc").value;
                let str4 = document.querySelector("#buy_name").value;
                let str5 = document.querySelector("#buy_send_code").value;
                let str6 = document.querySelector("#buy_adress").value;
                const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;


                if (str1.length == 0 || (!pattern.test(str1) && str1.length !=16)) {
                    document.querySelector("#bank_num").style.borderColor = "red";
                } else if ((str2_1.length == 0 && str2_1.length > 2) || (str2_2.length == 0 && str2_2.length > 2) || Number(str2_1) == NaN || Number(str2_2) == NaN) {
                    document.querySelector("#buy_code1").style.borderColor = "red";
                    document.querySelector("#buy_code2").style.borderColor = "red";
                } else if (str3.length != 3) {
                    document.querySelector("#buy_cvc").style.borderColor = "red";
                } else if (str4.length == 0) {
                    document.querySelector("#buy_name").style.borderColor = "red";
                } else if (str5.length == 0) {
                    document.querySelector("#buy_send_code").style.borderColor = "red";
                } else if (str6.length == 0) {
                    document.querySelector("#buy_adress").style.borderColor = "red";
                }
                else {
                    localStorage.setItem("bankNum", str1);
                    localStorage.setItem("buyCode", str2_1 + str2_2);
                    localStorage.setItem("CVC", str3);
                    localStorage.setItem("buyName", str4);
                    localStorage.setItem("postCode", str5);
                    localStorage.setItem("buyAdress", str6);
                    backlayer.classList.remove("show");
                    backlayer.classList.add("hide");
                    modalBuy.classList.remove("show");
                    modalBuy.classList.add("hide");
                    e.target.innerHTML = "Own";
                    e.target.classList.add("btn_own");
                    let arrFav = document.querySelectorAll(".favorites_item");
                    let newbookName, bookName;
                    let num = Number(localStorage.getItem("books"));
                    let books = document.querySelector("#profile_state_books");
                    let books2 = document.querySelector("#digital_panel_books");
                    localStorage.setItem("books", num + 1);
                    books.innerHTML = localStorage.getItem("books");
                    books2.innerHTML = localStorage.getItem("books");
                    localStorage.setItem("buyData", true);
                    for (let arrBlock of arrFav) {
                        if (arrBlock.contains(e.target)) {
                            localStorage.setItem("haveID", localStorage.getItem("haveID") + " " + arrBlock.id);
                            let str = "#" + arrBlock.id + " .favorites_name";
                            bookName = document.querySelector(str).innerHTML;
                            newbookName = bookName.replace("By", ",");
                        }
                    }
                    let profile = document.querySelector("#profile_list_book");
                    let newBook = document.createElement("li");
                    newBook.innerHTML = newbookName;
                    profile.append(newBook);
                    
                }
            })
        }
        else {
            e.target.innerHTML = "Own";
            e.target.classList.add("btn_own");
            let arrFav = document.querySelectorAll(".favorites_item");
            let newbookName, bookName;
            for (let arrBlock of arrFav) {
                if (arrBlock.contains(e.target)) {

                    localStorage.setItem("haveID", localStorage.getItem("haveID") + " " + arrBlock.id);
                    let str = "#" + arrBlock.id + " .favorites_name";
                    bookName = document.querySelector(str).innerHTML;
                    newbookName = bookName.replace("By", ",");
                }
            }
            let num = Number(localStorage.getItem("books"));
            localStorage.setItem("books", num + 1);
            let books = document.querySelector("#profile_state_books");
            books.innerHTML = localStorage.getItem("books");
            let books2 = document.querySelector("#digital_panel_books");
            books2.innerHTML = localStorage.getItem("books");
            let profile = document.querySelector("#profile_list_book");
            let newBook = document.createElement("li");
            newBook.innerHTML = newbookName;
            profile.append(newBook);
        }
    }
})

//digital card 
const cardBtn = document.querySelector("#card_btn");
cardBtn.addEventListener("click", () => {
    let isCorrect = false;
    let inName = document.querySelector("#card_input_name").value;
    let inNum = document.querySelector("#card_input_num").value;
    let strname = localStorage.getItem("name") + " " + localStorage.getItem("surname");
    if (inName == strname && inNum == localStorage.getItem("profileNumber"))
        isCorrect = true;
    if (isCorrect) {
        document.querySelector("#card_input_name").style.color = "#BB945F";
        document.querySelector("#card_input_num").style.color = "#BB945F";
        document.querySelector("#digital_panel_visits").innerHTML = localStorage.getItem("visits");
        document.querySelector("#digital_panel_bonuses").innerHTML = localStorage.getItem("bonuses");
        document.querySelector("#digital_panel_books").innerHTML = localStorage.getItem("books");
        document.querySelector("#card_input_name").style.border = "none";
        document.querySelector("#card_input_num").style.border = "none";
        let digitalBlock = document.querySelector("#digital_panel_block");
        cardBtn.classList.add("hide");
        digitalBlock.classList.remove("hide");
        setTimeout(() => {
            cardBtn.classList.remove("hide");
            digitalBlock.classList.add("hide");
            document.querySelector("#card_input_name").style.color = "#000";
            document.querySelector("#card_input_num").style.color = "#000";
        }, 10000)
    }
    else {
        document.querySelector("#card_input_name").style.border = "1px solid red";
        document.querySelector("#card_input_num").style.border = "1px solid red";
    }
})

//modal profile
const profileCheck = document.querySelector("#profileCheck");
profileCheck.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    profileStatus.classList.remove("hide");
    backlayer.classList.add("show");
    profileStatus.classList.add("show_flex");
})
const digitalProfile = document.querySelector("#digital_info_profile");
digitalProfile.addEventListener("click", () => {
    backlayer.classList.remove("hide");
    profileStatus.classList.remove("hide");
    backlayer.classList.add("show");
    profileStatus.classList.add("show_flex");

})

//copy profile
const btnCopy = document.querySelector("#profile_copy");
btnCopy.addEventListener("click", () => {
    let num = document.querySelector(".card_number").innerHTML;
    navigator.clipboard.writeText(num);
    let cop = document.querySelector(".copied");
    cop.style.opacity = "1";
    setTimeout(() => {
        cop.style.opacity = "0";
    }, 500)
})


//log out
const logOut = document.querySelector("#profileOut");
logOut.addEventListener("click", () => {
    location.reload();
}); 