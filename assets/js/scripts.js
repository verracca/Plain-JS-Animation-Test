const slides = [{
        backgroundPosition: 0,
        textPosition: 'top-left',
        textMessage: "WE ARE BREAKING OUR VOW OF SILENCE"
    }, {
        backgroundPosition: 10,
        textPosition: 'center-left',
        textMessage: "TALENT IS GIVEN TRUE SKILL IS EARNED"
    }, {
        backgroundPosition: 18,
        textPosition: 'center-left',
        textMessage: "BE FLEXIBLE TO CHANGE STURDY IN CONVICTION"

    }, {
        backgroundPosition: 34,
        textPosition: 'center-right',
        textMessage: "USE MANY SKILLS YET WORK AS ONE"
    },
    {
        backgroundPosition: 44,
        textPosition: 'center-right',
        textMessage: "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING"
    }, {
        backgroundPosition: 50,
        textPosition: 'center-right',
        textMessage: "INDIVIDUAL FLOURISH IF CULTURE AND WISDOM ARE SHARED"
    },
    {
        backgroundPosition: 70,
        textPosition: 'center-left',
        textMessage: "TRAIN FOR PERFECT AND AIM FOR MORE"
    }, {
        backgroundPosition: 80,
        textPosition: 'center-left',
        textMessage: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE"

    }, {
        backgroundPosition: 90,
        textPosition: 'center-left',
        textMessage: "TEMPORARY SACRIFICE BRING LASTING RESULTS"
    }, {
        backgroundPosition: 100,
        textPosition: 'center-right',
        textMessage: "BECOME A MONK"
    }
];

var currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function moveBackground(position) {
    document.getElementById('background').style.backgroundPosition = (position + '% 0%');
}

function clearTextBoxes() {
    Array.from(document.getElementsByClassName("text")).map(element => element.innerText = "");
}

function printMessage(mensaje, textPosition) {
    clearTextBoxes();
    document.getElementById(textPosition).innerText = mensaje;
}

function changeSelector(selectorNumber) {
    Array.from(document.getElementsByClassName("selector")).map(element => element.classList.remove('selected'));
    document.getElementById('selector-' + selectorNumber).classList.add('selected');
}

function showSlide(slideNumber) {
    currentSlide = slideNumber;
    var slide = slides[slideNumber];
    moveBackground(slide.backgroundPosition);
    printMessage(slide.textMessage, slide.textPosition);
    changeSelector(slideNumber);
}

showSlide(0);