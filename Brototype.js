// $(document).ready(function(){
//     $("#nav-btn").click(function(){
//         $("#side-bar").toggleClass("active");
//         $("#main-body").toggleClass("open");
//     });
//     $("#toggle-switch, .mode").click(function(){
//         $("body").toggleClass("light");
//         $("body").toggleClass("dark");
//         $(".side-items").toggleClass("on-light on-dark");
//         $(".nav-content .logos img").toggleClass("logo-toggle");
//     })
//     $("li, .side-head").click(function(){
//         $("li, .side-head").removeClass("tap");
//         $(this).addClass("tap");
//         $(this).removeClass("hoverCssClass");

//     })
// });

let navButton = document.querySelector("#nav-btn");
let sideBar = document.querySelector("#side-bar");
let mainBody = document.querySelector("#main-body");
let toggleSwitch = document.querySelector("#toggle-switch");
let mode = document.querySelectorAll(".mode");
let body = document.querySelector("body");
let sideItems = document.querySelectorAll(".side-items");
let logoImg = document.querySelectorAll("img");
let sideList = document.querySelectorAll("li");
let sideHead = document.querySelectorAll(".side-head");
let whatisbrototype = document.querySelectorAll(".whatisbrototype");
let whatisbrototypevideo = document.querySelector("#whatisbrototype");
let whatisbrototypeimage = document.querySelectorAll(".whatisbrototypeimage");



navButton.addEventListener("click", openSideBar);
toggleSwitch.addEventListener("click", themeChange);

classAddEventListener(sideList, clicked);
classAddEventListener(sideHead, clicked);
classAddEventListener(whatisbrototype, playVideo);

function classAddEventListener(inClass, inFunction) {
    inClass.forEach(value => value.addEventListener("click", inFunction))
}

function openSideBar() {
    sideBar.classList.toggle("active");
    mainBody.classList.toggle("open");
}

function themeChange() {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    classListToggle(sideItems, "on-light");
    classListToggle(sideItems, "on-dark");
    classListToggle(logoImg, "logo-toggle");
}

function classListToggle(inValue, inClass) {
    inValue.forEach(value => value.classList.toggle(inClass))
}

function clicked() {
    sideList.forEach(value => value.classList.remove("tap"));
    sideHead.forEach(value => value.classList.remove("tap"));
    sideList.forEach(() => this.classList.add("tap"));
    sideHead.forEach(() => this.classList.add("tap"));
    sideList.forEach(value => value.classList.remove("noEvents"));
    sideHead.forEach(value => value.classList.remove("noEvents"));
    // sideList.forEach(()=>this.style.pointer-events = "none");
    sideList.forEach(() => this.classList.add("noEvents"));
    sideHead.forEach(() => this.classList.add("noEvents"));
}

function playVideo() {
    whatisbrototypevideo.style.display = "inline";
    whatisbrototypeimage.forEach(value => value.style.display = "none");
}