var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: false,
});
wow.init();
$(document).ready(
    (function() {
        var numStartOne = $("#numOne").text();
        $({ numValue: numStartOne }).animate(
            { numValue: 25 },
            {
                duration: 2900,
                step: function(val) {
                    $("#numOne").html(Math.ceil(val));
                },
            },
        );
    })(),
    (function() {
        var numStartTwo = $("#numTwo").text();
        $({ numValue: numStartTwo }).animate(
            { numValue: 1000 },
            {
                duration: 2700,
                step: function(val) {
                    $("#numTwo").html(Math.ceil(val));
                },
            },
        );
    })(),
    (function() {
        var numStartThree = $("#numThree").text();
        $({ numValue: numStartThree }).animate(
            { numValue: 350 },
            {
                duration: 2800,
                step: function(val) {
                    $("#numThree").html(Math.ceil(val));
                },
            },
        );
    })(),
    (function() {
        var numStartFour = $("#numFour").text();
        $({ numValue: numStartFour }).animate(
            { numValue: 300 },
            {
                duration: 2800,
                step: function(val) {
                    $("#numFour").html(Math.ceil(val));
                },
            },
        );
    })(),
    (function() {
        var numStartFive = $("#numFive").text();
        $({ numValue: numStartFive }).animate(
            { numValue: 50 },
            {
                duration: 2700,
                step: function(val) {
                    $("#numFive").html(Math.ceil(val));
                },
            },
        );
    })(),
);

let left__panel = document.querySelector(".left__panel");
let menuIcon = document.querySelector(".icon__hide");
let textTitle = document.querySelectorAll(".item__tite__hiden");
let openMenu = document.querySelector(".show__menu");

openMenu.addEventListener("click", e => {
    left__panel.classList.toggle("left__panel__show");
    menuIcon.classList.toggle("icon__show");
    if (left__panel.classList.contains("left__panel__show")) {
        setTimeout(() => {
            textTitle.forEach(x => {
                x.classList.add("item__tite__show");
            });
        }, 150);
    } else {
        textTitle.forEach(x => {
            x.classList.remove("item__tite__show");
        });
    }
});

let accountDropdown = document.querySelector(".account__dropdown__btn");
let accountSettings = document.querySelector(".accoutn__settings__hidden");
let hiddenAccountSettings = document.querySelector(".setting__hidden");

accountDropdown.addEventListener("click", e => {
    accountSettings.classList.toggle("accoutn__settings__show");
    if (accountSettings.classList.contains("accoutn__settings__show")) {
        setTimeout(() => {
            hiddenAccountSettings.classList.add("setting__show");
        }, 150);
    } else {
        hiddenAccountSettings.classList.remove("setting__show");
    }
});
