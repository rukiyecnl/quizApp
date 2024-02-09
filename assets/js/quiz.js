let quizzes = [
        {
            "id":0,
            "title": "HTML",
            "icon": "./assets/images/icon-html.svg",
            "questions": [
                {
                    "question": "What does HTML stand for?",
                    "options": [
                        "Hyper Trainer Marking Language",
                        "Hyper Text Marketing Language",
                        "Hyper Text Markup Language",
                        "Hyper Text Markup Leveler"
                    ],
                    "answer": "Hyper Text Markup Language"
                },
                {
                    "question": "Which of the following is the correct structure for an HTML document?",
                    "options": [
                        "<html><head></head><body></body></html>",
                        "<head><html></html><body></body></head>",
                        "<body><head></head><html></html></body>",
                        "<html><body></body><head></head></html>"
                    ],
                    "answer": "<html><head></head><body></body></html>"
                },
                {
                    "question": "Which HTML element is used to define the title of a document?",
                    "options": [
                        "<head>",
                        "<title>",
                        "<header>",
                        "<top>"
                    ],
                    "answer": "<title>"
                },
                {
                    "question": "What is the purpose of the <body> tag in HTML?",
                    "options": [
                        "It defines the document's head section.",
                        "It contains all the content such as text, images, and links.",
                        "It is used to define the main content of an HTML document.",
                        "It specifies the body of the email content in HTML."
                    ],
                    "answer": "It contains all the content such as text, images, and links."
                },
                {
                    "question": "Which HTML tag is used to create a hyperlink?",
                    "options": [
                        "<hyperlink>",
                        "<link>",
                        "<a>",
                        "<href>"
                    ],
                    "answer": "<a>"
                },
                {
                    "question": "Which tag is used to display images in HTML?",
                    "options": [
                        "<img>",
                        "<image>",
                        "<src>",
                        "<pic>"
                    ],
                    "answer": "<img>"
                },
                {
                    "question": "What attribute is used to provide the path of an image in the <img> tag?",
                    "options": [
                        "link",
                        "src",
                        "href",
                        "url"
                    ],
                    "answer": "src"
                },
                {
                    "question": "Which HTML tag is used to create an unordered list?",
                    "options": [
                        "<ul>",
                        "<ol>",
                        "<list>",
                        "<li>"
                    ],
                    "answer": "<ul>"
                },
                {
                    "question": "What does the <br> tag do?",
                    "options": [
                        "It breaks the text into two sections.",
                        "It creates a bold text.",
                        "It inserts a line break.",
                        "It adds a new row in a table."
                    ],
                    "answer": "It inserts a line break."
                },
                {
                    "question": "In HTML, what does the `fieldset` tag do?",
                    "options": [
                        "It is used to group related data in a form.",
                        "It sets the field to a fixed size.",
                        "It automatically validates the fields within a form.",
                        "It hides the fields in a form."
                    ],
                    "answer": "It is used to group related data in a form."
                }
            ]
        },
        {
            "id":1,
            "title": "CSS",
            "icon": "./assets/images/icon-css.svg",
            "questions": [
                {
                    "question": "What does CSS stand for?",
                    "options": [
                        "Colorful Style Sheets",
                        "Computer Style Sheets",
                        "Cascading Style Sheets",
                        "Creative Style Sheets"
                    ],
                    "answer": "Cascading Style Sheets"
                },
                {
                    "question": "Which HTML attribute is used to define inline styles?",
                    "options": [
                        "styles",
                        "style",
                        "class",
                        "font-style"
                    ],
                    "answer": "style"
                },
                {
                    "question": "How do you insert a comment in a CSS file?",
                    "options": [
                        "// this is a comment //",
                        "/* this is a comment */",
                        "-- this is a comment --",
                        "<!-- this is a comment -->"
                    ],
                    "answer": "/* this is a comment */"
                },
                {
                    "question": "Which property is used to change the background color of an element?",
                    "options": [
                        "color",
                        "bgcolor",
                        "background-color",
                        "background"
                    ],
                    "answer": "background-color"
                },
                {
                    "question": "How do you apply a style to all <p> elements?",
                    "options": [
                        "p { }",
                        ".p { }",
                        "#p { }",
                        "all.p { }"
                    ],
                    "answer": "p { }"
                },
                {
                    "question": "Which property is used to change the font of an element?",
                    "options": [
                        "font-style",
                        "text-style",
                        "font-family",
                        "typeface"
                    ],
                    "answer": "font-family"
                },
                {
                    "question": "How do you make each word in a text start with a capital letter?",
                    "options": [
                        "text-transform: capitalize",
                        "text-transform: uppercase",
                        "text-style: capital",
                        "font-transform: capitalize"
                    ],
                    "answer": "text-transform: capitalize"
                },
                {
                    "question": "How do you select an element with the class name 'header'?",
                    "options": [
                        ".header",
                        "#header",
                        "header",
                        "*header"
                    ],
                    "answer": ".header"
                },
                {
                    "question": "What is the default value of the 'position' property?",
                    "options": [
                        "relative",
                        "fixed",
                        "absolute",
                        "static"
                    ],
                    "answer": "static"
                },
                {
                    "question": "What is the purpose of the z-index property in CSS?",
                    "options": [
                        "To count the number of elements",
                        "To set the magnification level of an element",
                        "To specify the stack order of an element",
                        "To create a zoom effect"
                    ],
                    "answer": "To specify the stack order of an element"
                }
            ]
        },
        {
            "id":2,
            "title": "JavaScript",
            "icon": "./assets/images/icon-js.svg",
            "questions": [
                {
                    "question": "Which syntax is correct to output 'Hello World' in an alert box?",
                    "options": [
                        "alertBox('Hello World');",
                        "msg('Hello World');",
                        "alert('Hello World');",
                        "msgBox('Hello World');"
                    ],
                    "answer": "alert('Hello World');"
                },
                {
                    "question": "How do you call a function named 'myFunction'?",
                    "options": [
                        "call function myFunction()",
                        "call myFunction()",
                        "myFunction()",
                        "execute myFunction()"
                    ],
                    "answer": "myFunction()"
                },
                {
                    "question": "How to write an IF statement in JavaScript?",
                    "options": [
                        "if i = 5 then",
                        "if (i == 5)",
                        "if i == 5",
                        "if i = 5"
                    ],
                    "answer": "if (i == 5)"
                },
                {
                    "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                    "options": [
                        "if (i <> 5)",
                        "if i =! 5 then",
                        "if (i != 5)",
                        "if i not = 5"
                    ],
                    "answer": "if (i != 5)"
                },
                  {
                    "question": "How does a FOR loop start?",
                    "options": [
                        "for (i = 0; i <= 5)",
                        "for i = 1 to 5",
                        "for (i <= 5; i++)",
                        "for (i = 0; i <= 5; i++)"
                    ],
                    "answer": "for (i = 0; i <= 5; i++)"
                },
                {
                    "question": "How can you add a single-line comment in JavaScript?",
                    "options": [
                      "'This is a single-line comment",
                      "//This is a single-line comment",
                      "<!--This is a single-line comment-->",
                      "/* This is a single-line comment */"
                    ],
                    "answer": "//This is a single-line comment"
                },
                {
                    "question": "What is the correct way to write a JavaScript array?",
                    "options": [
                        "var colors = (1:'red', 2:'green', 3:'blue')",
                        "var colors = ['red', 'green', 'blue']",
                        "var colors = 'red', 'green', 'blue'",
                        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
                    ],
                    "answer": "var colors = ['red', 'green', 'blue']"
                },
                {
                    "question": "How do you find the number with the highest value of x and y?",
                    "options": [
                        "Math.ceil(x, y)",
                        "top(x, y)",
                        "Math.max(x, y)",
                        "Math.highest(x, y)"
                    ],
                    "answer": "Math.max(x, y)"
                },
                {
                    "question": "Which operator is used to assign a value to a variable?",
                    "options": [
                        "-",
                        "*",
                        "=",
                        "x"
                    ],
                    "answer": "="
                },
                {
                    "question": "What is the correct way to write a JavaScript object?",
                    "options": [
                        "var person = {firstName: 'John', lastName: 'Doe'};",
                        "var person = {firstName = 'John', lastName = 'Doe'};",
                        "var person = (firstName: 'John', lastName: 'Doe');",
                        "var person = (firstName = 'John', lastName = 'Doe');"
                    ],
                    "answer": "var person = {firstName: 'John', lastName: 'Doe'};"
                }
            ]
        },
        {
            "id":3,
            "title": "Accessibility",
            "icon": "./assets/images/icon-accessibility.svg",
            "questions": [
                {
                    "question": "What does 'WCAG' stand for?",
                    "options": [
                        "Web Content Accessibility Guidelines",
                        "Web Compliance Accessibility Guide",
                        "Web Content Accessibility Goals",
                        "Website Compliance and Accessibility Guidelines"
                    ],
                    "answer": "Web Content Accessibility Guidelines"
                },
                {
                    "question": "Which element is used to provide alternative text for images for screen reader users?",
                    "options": [
                        "<alt>",
                        "<figcaption>",
                        "<description>",
                        "<img alt='description'>"
                    ],
                    "answer": "<img alt='description'>"
                },
                {
                    "question": "What does ARIA stand for in web development?",
                    "options": [
                        "Accessible Rich Internet Applications",
                        "Advanced Responsive Internet Assistance",
                        "Accessible Responsive Internet Applications",
                        "Automated Responsive Internet Actions"
                    ],
                    "answer": "Accessible Rich Internet Applications"
                },
                {
                    "question": "Which of the following is not a principle of the WCAG?",
                    "options": [
                        "Perceivable",
                        "Dependable",
                        "Operable",
                        "Understandable"
                    ],
                    "answer": "Dependable"
                },
                {
                    "question": "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    "options": [
                        "3:1",
                        "4.5:1",
                        "7:1",
                        "2:1"
                    ],
                    "answer": "4.5:1"
                },
                {
                    "question": "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
                    "options": [
                        "<div>",
                        "<span>",
                        "<a href='...'>",
                        "<p>"
                    ],
                    "answer": "<a href='...'>"
                },
                {
                    "question": "What is the purpose of the 'lang' attribute in an HTML page?",
                    "options": [
                        "To specify the scripting language",
                        "To define the character set",
                        "To indicate the language of the page content",
                        "To declare a language pack"
                    ],
                    "answer": "To indicate the language of the page content"
                },
                {
                    "question": "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
                    "options": [
                        "Keyboard Accessible",
                        "Mouse Independence",
                        "Device Independence",
                        "Operable Controls"
                    ],
                    "answer": "Keyboard Accessible"
                },
                {
                    "question": "What is the role of 'skip navigation' links in web accessibility?",
                    "options": [
                        "To skip over primary navigation to the main content",
                        "To provide shortcuts to different sections of the website",
                        "To help users skip unwanted sections like advertisements",
                        "To bypass broken links in the navigation"
                    ],
                    "answer": "To skip over primary navigation to the main content"
                },
                {
                    "question": "Which of these tools can help in checking the accessibility of a website?",
                    "options": [
                        "W3C Validator",
                        "Google Lighthouse",
                        "CSS Validator",
                        "JavaScript Console"
                    ],
                    "answer": "Google Lighthouse"
                }
            ]
        }
    ]

// console.log(quizzes[0]);
// const rightSide = document.querySelector(".rightSide");
// const titles = document.querySelectorAll(".title");
// const konular = document.querySelector(".konular");
// const cevaplar = document.querySelector(".cevaplar");
// const btn = document.querySelector("button");
// cevaplar.style.display = "none";

// const cevapA = document.querySelector(".cevapA");
// const cevapB = document.querySelector(".cevapB");
// const cevapC = document.querySelector(".cevapC");
// const cevapD = document.querySelector(".cevapD");

// const options = document.querySelectorAll(".options");

// function bindEvents(){
//     for (const option of options) {
//         option.addEventListener("click", showOption)
//     }
    
// }

// function getInfo(){
    
//     for (const title of titles) {
//         title.addEventListener("click", e => {
//             const deger = Number(e.target.dataset.contentid);
//             if (deger == quizzes[deger].id) {
//                 konular.style.display = "none";
//                 cevaplar.style.display = "block";
//                 showOptions(deger);
//             }
//         })
//     }    
// } 

// function showOption(){
//     btn.addEventListener("click", () => {
//         console.log(this);
//        this.classList.add("correct"); 
//     })
    
// }

// let counter = 0;
// function showOptions(value){
//     bindEvents();

//     cevapA.innerText = quizzes[value].questions[0].options[0];
//     cevapB.innerText = quizzes[value].questions[0].options[1];
//     cevapC.innerText = quizzes[value].questions[0].options[2];
//     cevapD.innerText = quizzes[value].questions[0].options[3];


    


//     for (let i = 0; i < quizzes[value].questions.length; i++) {
       
//         for (let k = 0; k < quizzes[value].questions[counter].options.length; k++) {


//             btn.addEventListener("click", function(){
                
//             });


//             // for (const option of options) {
//             //     // console.log(option);
//             //     option.addEventListener("click", function(e){
//             //         e.preventDefault();
//             //         console.log(counter);
//             //         if (this.innerText === quizzes[value].questions[counter].answer) {
//             //             console.log("hello");
//             //         }
//             //         else{
//             //             console.log("yanlış");
//             //         }
                    
//             //         cevapA.innerText = quizzes[value].questions[counter+1].options[0];
//             //         cevapB.innerText = quizzes[value].questions[counter+1].options[1];
//             //         cevapC.innerText = quizzes[value].questions[counter+1].options[2];
//             //         cevapD.innerText = quizzes[value].questions[counter+1].options[3];
//             //         console.log(counter);
//             //     })
//             // }
//             console.log(quizzes[value].questions[k].options.length);
//         }
//         counter++;
//     }

//     //cevapA.innerHTML = value.questions[0];

// }
// // function kontrolBtn(value){
// //     cevapA.innerText = quizzes[value].questions[counter].options[0];
// //     cevapB.innerText = quizzes[value].questions[counter].options[1];
// //     cevapC.innerText = quizzes[value].questions[counter].options[2];
// //     cevapD.innerText = quizzes[value].questions[counter].options[3];
// // }

// function getValues(){
//     console.log(this.innerText);
//     if (this.innerText === quizzes[value].questions[i].answer) {
//         console.log("hell");
//     }
// }

// // function deneme(value) {
// //     const options = document.querySelector(".options");
// //     for (const option of options) {
        
// //     }

// //     showOptions(value);
// // }


const titles = document.querySelectorAll(".title");
const konular = document.querySelector(".konular");
const cevaplar = document.querySelector(".cevaplar");
const options = document.querySelectorAll(".options");
const cevapA = document.querySelector(".cevapA");
const cevapB = document.querySelector(".cevapB");
const cevapC = document.querySelector(".cevapC");
const cevapD = document.querySelector(".cevapD");
const btn = document.querySelector(".submitBtn");
const nextbtn = document.querySelector(".nextBtn");
const leftSide = document.querySelector(".leftSide");
const secondLeftSide = document.querySelector(".secondLeftSide");
secondLeftSide.style.display = "none";
nextbtn.style.display= "none";

cevaplar.style.display = "none";
let counter = 0;
function bindEvents(){

    for (const title of titles) {
        title.addEventListener("click", chooseContent);
    }
    // for (const option of options) {
    //     option.addEventListener("click", chooseOption);
    // }
}
function chooseContent(){

    const value = Number(this.dataset.contentid);
    konular.style.display = "none";
    cevaplar.style.display = "flex";
    if (value === quizzes[value].id) {
        // showQuestion(value);
        // console.log(counter);

        leftSide.style.display = "none";
        secondLeftSide.style.display = "block";
        secondLeftSide.innerHTML = `
                                        <p>Question ${counter + 1} of 10</p>
                                        <p class="questionTitle">${quizzes[value].questions[counter].question}</p>
                                        `

        cevapA.innerText = quizzes[value].questions[counter].options[0];
        cevapB.innerText = quizzes[value].questions[counter].options[1];
        cevapC.innerText = quizzes[value].questions[counter].options[2];
        cevapD.innerText = quizzes[value].questions[counter].options[3];
        // for (const z of quizzes[value].questions) {
        //     chooseOption();
        // }
        chooseOption(value);
        // btn.addEventListener("click", function(){
        //     for (const option of options) {
        //         if (option.classList.contains("true")) {
        //             option.classList.add("correct");
        //         }
        //         else{
        //             option.classList.add("false");
        //         }
        //     } 
        //     // kontrol = 2;
        //     counter++;
        //     console.log(counter);
        //     showQuestion(value) ;   
        // })
        checkState(value);
        nextQuestion(value);
    }
    

}

function chooseOption(value){
    for (const option of options) {
        option.addEventListener("click", function(){
            if(this.innerText === quizzes[value].questions[counter].answer){
                console.log("geldii");
                this.classList.add("true");

            }
            else{
                console.log("yanlış");
                this.classList.add("false");
            }
            this.classList.add("chosed");
        });
    }
    // checkState(value);
    
}
let kontrol = 1;
let nb;
function showQuestion(value){
    leftSide.style.display = "none";
    // do {
    //     // counter++;
    //     console.log(counter);
    //     cevapA.innerText = quizzes[value].questions[counter].options[0];
    //     cevapB.innerText = quizzes[value].questions[counter].options[1];
    //     cevapC.innerText = quizzes[value].questions[counter].options[2];
    //     cevapD.innerText = quizzes[value].questions[counter].options[3];

    //     chooseOption(value);
    //     checkState(); 

        
    // } while (counter<10);

        // console.log(quizzes[value].questions[counter].options[0]);
        secondLeftSide.style.display = "block";
        secondLeftSide.innerHTML = `
                                    <p>Question ${counter + 1} of 10</p>
                                    <p class="questionTitle">${quizzes[value].questions[counter].question}</p>
                                    `

        cevapA.innerText = quizzes[value].questions[counter].options[0];
        cevapB.innerText = quizzes[value].questions[counter].options[1];
        cevapC.innerText = quizzes[value].questions[counter].options[2];
        cevapD.innerText = quizzes[value].questions[counter].options[3];  
        

        // chooseOption(value);
        // checkState(); 
        console.log(counter);             
    


}
function checkState(){

    btn.addEventListener("click", function(){
        for (const option of options) {
            if (option.classList.contains("true")) {
                option.classList.remove("chosed");
                option.classList.add("correct");
            }
            else if(option.classList.contains("false")){
                option.classList.remove("chosed");
                option.classList.add("uncorrect");
            }
        } 
        // kontrol = 2;
        counter++;
        console.log(counter);
        // showQuestion(value)  
        btn.style.display = "none";
        nextbtn.style.display = "block";
    })
    
    
    // kontrol = 1;
}
function nextQuestion(value){
    nextbtn.addEventListener("click", function(){
        btn.style.display = "block";
        nextbtn.style.display = "none";    

        for (const option of options) {
            if (option.classList.contains("true")) {
                option.classList.remove("true");
                option.classList.remove("correct");
            }
            else if(option.classList.contains("false")){
                option.classList.remove("false");
                option.classList.remove("uncorrect");
            }
            option.classList.remove("chosed");
        }
        showQuestion(value); 
        
        

    })
    
}

function init(){
    bindEvents();
   
}

init();