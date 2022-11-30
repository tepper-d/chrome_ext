/* CIS 124: Introduction to JavaScript
    Module 6: Scrimba Exercises Part 2
    Build a Chrome Extension, https://scrimba.com/playlist/pPD7Kt4
    Practice Part 3, https://scrimba.com/playlist/pQgXphg
Dominique Tepper, 30NOV2022 */

"use strict";

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