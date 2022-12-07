"use strict";

/* 
CIS 124: Introduction to JavaScript
Module 6: Scrimba Exercises Part 2
Build a Chrome Extension, https://scrimba.com/playlist/pPD7Kt4
Practice Part 3, https://scrimba.com/playlist/pQgXphg
- - - C H A L L E N G E   E X E R C I S E S - - -
Dominique Tepper, 06DEC2022 */

/*
LESSON 25. WRITE YOUR FIRST TEMPLATE STRING
        Convert a concatenated string into a template literal
    LESSON 26. MAKE THE TEMPLATE STRING EVEN MORE DYNAMIC
        Create a new variable and use it
    LESSON 27. TEMPLATE STRING ON MULTIPLE LINES
        Break the template string into multiple lines.
Tepper, 06DEC2022 */

// DOM
const reindeerTagH= document.getElementById("reindeerTag-h");
const reindeerTagP = document.getElementById("reindeerTag-p");
const reindeerTagBtn = document.getElementById("reindeerTag-btn");

// ARRAYS
let tagNum = [];
const reindeerNames = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Dunder", "Blixem", "Flossie", "Glossie", "Racer", "Pacer", "Reckless", "Speckless", "Fearless", "Peerless", "Ready", "Steady"];
const serverRegions = ["NAE", "NAW", "EU", "OCE", "BR", "ASIA", "ME"]; // 26

reindeerTagH.innerHTML = `<h2>Generate Your Reindeer Tag</h2>`;
reindeerTagP.textContent = `Which reindeer will you be?`;
reindeerTagBtn.innerHTML = "<p></p><button id='button2'>GENERATE</button>";

// generates random nums for numeric tag
const reindeerGenerator = () => {
    tagNum = [];

    for (let i = 0; i < 4; i++) {
        let generateTagNumber = Math.floor(Math.random() * 10);
        tagNum.push(generateTagNumber);
        console.log(tagNum);
    }
}

reindeerTagBtn.addEventListener("click", function(){
    // Picks a random reindeer name from array
    let reindeerRandomizer = Math.floor(Math.random() * reindeerNames.length);
    let j = reindeerRandomizer;
    console.log(reindeerNames[j]);

    // Picks random server region from array
    let serverRandomizer = Math.floor(Math.random() * serverRegions.length);
    let k = serverRandomizer;
    console.log(serverRegions[k]);

    // generates random nums
    reindeerGenerator();

    // Reindeer tag concat
    let reindeerTag = `${reindeerNames[j]}#${tagNum[1]}${tagNum[2]}${tagNum[2]}${tagNum[3]}`;


    reindeerTagH.innerHTML = `<h2>${reindeerTag}</h2>`;
    reindeerTagP.innerHTML = `<br><p>Your reindeer is ${reindeerNames[j]}.</p><p></p>
                                <p>This option is optimized for the ${serverRegions[k]} region.</p>`;
});


/* 
LESSON 6. WRITE YOUR FIRST addEventListener()
    1. Grab the box from the DOM and store it in a variable
    2. Add  click event listener to the box
    3. Log "I want to open the box"
LESSON 16. WRITE YOUR FIRST innerHTML
    Use .innerHTML to render a Buy! button inside a div
LESSON 17. MORE innerHTML PRACTICE
    When clicked, render a paragraph under the button (in the container)
Tepper, 04DEC2022 */

const boxEl = document.getElementById("box");
const boxBtn = document.getElementById("box-btn"); // L16
const boxP = document.getElementById("box-p"); // L17

boxBtn.innerHTML = "<p></p><button>BUY THIS BOX!</button>"; // L16
boxP.innerHTML = "<p>Limited time offer!</p>"; // L17

// L6
boxEl.addEventListener("mouseover", function() {
    console.log("I want to open the box");
});

// 
boxBtn.addEventListener("click", function() {
    console.log("I added this box to my cart.");

    boxP.innerHTML = "Added to cart!";
});





/* FOOTER. Tepper, 06NOV2022 *******************************************/
const today = new Date();
let footerEl = document.getElementById("footer-el");

function footer() {
    // local variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();