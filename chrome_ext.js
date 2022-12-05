"use strict";

/* CIS 124: Introduction to JavaScript
    Module 6: Scrimba Exercises Part 2
    Build a Chrome Extension, https://scrimba.com/playlist/pPD7Kt4
    Practice Part 3, https://scrimba.com/playlist/pQgXphg
Dominique Tepper, 30NOV2022 */



/* 
LESSON 4: MAKE THE INPUT BUTTON WORK WITH ONCLICK
    Log "button clicked!" when the user clicks the Save Input button
LESSON 5 & 7: REFACTOR TO ADDEVENTLISTENER
    Use addEventListener instead of "onclick" for SaveInput()
LESSON 8: CREATE THE myLeads array and inputEl
    a. myLeads: assigned to an empty array
    b. inputEl: assigned tot he text input field
LESSON 10. PUSH TO THE myLeads array
    Push "www.awesomelead.com" to myArray when the input button is clicked
LESSON 11. PUSH THE VALUE FROM THE INPUT FIELD
    Push the value of inputEl into the myLeads array instead of hardcoding it
LESSON 12. USE A LOOP TO LOG OUT LEADS
    Log out the items in the myLeads array using a for loop
LESSON 13. CREATE THE UNORDERED LIST
    a. Create an unordered list element (<ul>) with id="ul-el"
    b. Grab the unordered list and store it in a const variable called ulEl
LESSON 18. RENDER THE LEADS IN THE UNORDERED LIST
    a. Replace .textContent with .innerHTML
    b. use <li> tags
LESSON 19. USE createElement() AND append() INSTEAD OF innerHTML
    a. Comment out ulEl.innerHTML
    b. Create element
    c. set text content
    d. append to ul
LESSON 20. IMPROVING THE PERFORMANCE OF OUR APP
    a. Create var printLeads = ""; to hold all the HTML for the li items
    b. Add the item to the printLeads variable instead of the ulEl.innerHTML
    c. Render the listItems inside the unordered list using ulEl.innerHTML
Tepper, 04DEC2022 */

// DOM ELEMENTS
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// GLOBAL VARS
let myLeads = [];

inputBtn.addEventListener("click", function() {
    console.log("button clicked!");
    let printLeads = ""; // 20a
    ulEl.textContent = "";
    
    // Lesson 11
    const newInput = document.getElementById('input-el').value;
    myLeads.push(newInput);
    console.log(myLeads);

    // Lesson 12
    for (let i = 0; i < myLeads.length; i++) {

        printLeads += "<li>" + myLeads[i] + "</li>"; // 18a, 20b
        console.log(printLeads);
        ulEl.innerHTML = printLeads; // 18b, 20c

        // const li = document.createElement("li"); // 19b
        // li.textContent = myLeads[i]; // 19c
        // ulEl.append(li); // 19d
    }
    
    // Lesson 10
    // myLeads.push("www.awesomelead.com");
    // console.log(myLeads);
});





// C H A L L E N G E   E X E R C I S E S
/* 
LESSON 6: WRITE YOUR FIRST addEventListener()
    1. Grab the box from the DOM and store it in a variable
    2. Add  click event listener to the box
    3. Log "I want to open the box"
LESSON 16.WRITE YOUR FIRST innerHTML
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