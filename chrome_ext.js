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
    LESSON 35. SAVE THE LEADS TO localStorage
        a. Save myLeads to localStorage
        b. Use JSON.stringify()
        c. Verify that it works
    LESSON 36. GET THE LEADS FROM localStorage
        a. Use JSON.parse() to get the leads from localStorage
        b. Store it in var leadsFromLocalStorage
        c. log leadsFromLocalStorage
    LESSON 39. CHECKING localStorage BEFORE RENDERING
        a. Check is leadsFromLocalStorage is truthy
        b. set myLeads to its value if true
        c. call renderLeads()
    LESSON 42. MAKE THE DELETE BUTTON WORK
        a. Store the delete button in a var
        b. Listen for double clicks on the delete button
        c. When clicked, clear localStorage, myLeads, and the DOM
    LESSON 48. REFACTOR renderLeads() to use as a parameter
        a. Refactor renderLeads() to take a parameter instead of the global var myLeads
        b. Change all other renderLeads() occurences
    LESSON 49. CREATE THE tabBtn
        a. Store the Save Tab btn in var tabBtn
        b. Listen for clicks on tabBtn that logs a website to the console
    LESSON 50. SAVE THE TAB URL
        Save the tab url instead of logging it
Dominique Tepper, 30NOV2022 */

// DOM ELEMENTS
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn"); // 42a
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// GLOBAL VARS
let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads));    // 36a, 36b
const tabs = [{url: "https://www.pierce.ctc.edu/"}];

// evaluates for values in myLeads to render
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


// 21a. FOR LOOP WRAPPED IN A FXN. Tepper, 06DEC2022
const render = (leads) => {
    let printLeads = ""; // 20a

    // 12. USE FOR LOOP. Tepper, 04DEC2022
    for (let i = 0; i < leads.length; i++) {

        // 24, 28. TEMPLATE STRING. Tepper, 06DEC2022.
        printLeads += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
        console.log(printLeads);
        ulEl.innerHTML = printLeads; // 18b, 20c
    }
}

// add new lead button
inputBtn.addEventListener("click", function() {
    // 11. PUSH THE VALUE FROM THE INPUT FIELD. Tepper, 06DEC2022
    const newInput = document.getElementById('input-el').value;
    myLeads.push(newInput);

    // 35. saves myLeads to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads); // 21b
    inputEl.value = ""; // 22. CLEAR INPUT FIELD. Tepper, 06DEC2022
    inputEl.focus();
});


// 49. TAB BTN. Tepper, 07DEC2022.
tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

// 42. clear button
clearBtn.addEventListener("dblclick", function() {
    console.log("Storage cleared.");
    localStorage.clear();
    myLeads = [];
    inputEl.value = "";
    inputEl.focus();
    ulEl.innerHTML = "";
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