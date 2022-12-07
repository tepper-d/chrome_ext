"use strict";

/* 
CIS 124: Introduction to JavaScript
Module 6: Scrimba Exercises Part 2
Build a Chrome Extension, https://scrimba.com/playlist/pPD7Kt4
Practice Part 3, https://scrimba.com/playlist/pQgXphg

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
    LESSON 21. CREATE A RENDER FUNCTION
        a. Wrap the for loop in a function
        b. Call the new function when the input button is clicked
    LESSON 22. CLEAR THE INPUT FIELD
        Clear the input field
    LESSON 23. ADD THE <a> TAG
        a. Wrap the lead in <a> tag inside the <li>
        b. Make the link open in a new tab
    LESSON 24. TEMPLATE STRING
    LESSON 28. REFACTOR THE APP TO USE A TEMPLATE STRING
    LESSON 29. STYLE THE LIST

Dominique Tepper, 30NOV2022 */

// DOM ELEMENTS
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// GLOBAL VARS
let myLeads = [];

inputBtn.addEventListener("click", function() {
    console.log("button clicked!");
    ulEl.textContent = "";
    
    // 11. PUSH THE VALUE FROM THE INPUT FIELD. Tepper, 06DEC2022
    const newInput = document.getElementById('input-el').value;
    myLeads.push(newInput);
    console.log(myLeads);

    renderLeads(); // 21b
    inputEl.value = ""; // 22. CLEAR INPUT FIELD. Tepper, 06DEC2022
    inputEl.focus();

});

// 21a. FOR LOOP WRAPPED IN A FXN. Tepper, 06DEC2022
const renderLeads = () => {
    let printLeads = ""; // 20a

    // 12. USE FOR LOOP. Tepper, 04DEC2022
    for (let i = 0; i < myLeads.length; i++) {

        // 18a, 20b, 23a, 23b
        // printLeads += "<li>" + "<a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>"; 

        // 24, 28. TEMPLATE STRING. Tepper, 06DEC2022.
        printLeads += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`;
        console.log(printLeads);
        ulEl.innerHTML = printLeads; // 18b, 20c

        // const li = document.createElement("li"); // 19b
        // li.textContent = myLeads[i]; // 19c
        // ulEl.append(li); // 19d
    }
    
    // Lesson 10
    // myLeads.push("www.awesomelead.com");
    // console.log(myLeads);
}


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