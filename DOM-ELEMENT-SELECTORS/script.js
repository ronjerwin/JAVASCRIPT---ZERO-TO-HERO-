// ELEMENT SELECTORS = METHODS USED TO TARGET AND MANIPULATE HTML ELEMENTS
// THEY ALLOW YOU TO SELECT ONE OR MULTIPLE HTML ELEMENTS
// FROM THE DOM (DOCUMENT OBJECT MODEL)

// 1. DOCUMENT.GETELEMENTBYID()         // ELEMENT OR NULL
// 2. DOCUMENT.GETELEMENTSCLASSNAME()   // HTML COLLECTION
// 3. DOCUMENT.GETELEMENTSBYTAGNAME()   // HTML COLLECTION
// 4. DOCUMENT.QUERYSELECTOR()          // FIRST ELEMENT OR NULL
// 5. DOCUMENT.QUERYSELECTORALL()       // NODELIST

// // 1. DOCUMENT.GETELEMENTBYID()
// // TARGETS A SINGLE ELEMENT BY ITS UNIQUE ID
// const title = document.getElementById("my-title");
// title.style.color = "blue";

// // 2. DOCUMENT.GETELEMENTSBYCLASSNAME()
// // RETURNS AN HTMLCOLLECTION (LIKE AN ARRAY) OF ELEMENTS WITH A SPECIFIC CLASS
// // NOTE: YOU MUST ITERATE OR ACCESS BY INDEX TO CHANGE STYLES
// const paragraphs = document.getElementsByClassName("text-content");
// for (let paragraph of paragraphs) {
//     paragraph.style.fontSize = "20px";
// }

// // 3. DOCUMENT.GETELEMENTSBYTAGNAME()
// // RETURNS AN HTMLCOLLECTION OF ALL ELEMENTS OF A SPECIFIC TAG TYPE
// const buttons = document.getElementsByTagName("button");
// buttons[0].textContent = "Updated Button";

// // 4. DOCUMENT.QUERYSELECTOR()
// // RETURNS THE FIRST ELEMENT THAT MATCHES THE CSS SELECTOR
// const firstParagraph = document.querySelector(".text-content");
// firstParagraph.style.backgroundColor = "yellow";

// // 5. DOCUMENT.QUERYSELECTORALL()
// // RETURNS A NODELIST OF ALL ELEMENTS MATCHING THE CSS SELECTOR
// // YOU CAN USE FOREACH() DIRECTLY ON A NODELIST
// const allParagraphs = document.querySelectorAll(".text-content");
// allParagraphs.forEach(paragraph => {
//     paragraph.style.border = "1px solid black";
// });


const h1Elements = document.getElementsByTagName('h1');
const liElements = document.getElementsByTagName('li');

    // for(let h1Element of h1Elements) {
    //     h1Element.style.backgroundColor = 'yellow';
    // }

    // Array.from(h1Elements).forEach((h1Element) => h1Element.style.backgroundColor = 'green')


    // for(let liElement of liElements) {
    //     liElement.style.backgroundColor = 'yellow';
    // }

    // Array.from(liElements).forEach((liElement) => liElement.style.backgroundColor = 'green')


