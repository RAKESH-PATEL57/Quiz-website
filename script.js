const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitQuiz = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");

startBtn.onclick = () => {
  popupInfo.classList.add("show");
  main.classList.add("blurbg");
};

exitQuiz.onclick = () => {
  popupInfo.classList.remove("show");
  main.classList.remove("blurbg");
};

continueBtn.onclick = () => {
  quizSection.classList.add("quizSection-Show-hide");
  popupInfo.classList.remove("show");
  main.classList.remove("blurbg");
  quizBox.classList.add("quizBox-Show-hide");

  showQuestions(0);
};

// changing questions on button click
let questionCount = 0;

const nextBtn = document.querySelector(".nextBtn");

nextBtn.onclick = () => {
  questionCount++;
  showQuestions(questionCount);
}

// qestion answers options *******************************
const optionList = document.querySelector(".option-list");

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                   <div class="option"><span>${questions[index].options[1]}</span></div>
                   <div class="option"><span>${questions[index].options[2]}</span></div>
                   <div class="option"><span>${questions[index].options[3]}</span></div>`;
  
                   
   optionList.innerHTML = optionTag;                
}

// Question section meaking
let questions = [
  {
    numb: 1,
    question:
      "What is the preferred way for adding a background color in HTML?",
    answer: `<body style="background-color:yellow">`,
    options: [
      `(A)<body background="yellow">`,
      `(B)<background>yellow</background>`,
      `(C)<body style="background-color:yellow">`,
      "(D)<background color="yellow">text<background>"
    ],
  },

  {
    numb: 2,
    question: "What is the correct HTML for creating a hyperlink?",
    answer: `<a href="http://www.example.com">example</a>`,
    options: [
      `(A) <a name="">A</a>`,
      `(B) <a>B</a>`,
      `(C) <a href="http://www.example.com">example</a>`,
      `(D)  <a url="http://www.example.com">example</a>`
    ],
  },

  {
    numb: 3,
    question: "How can you create an e-mail link?",
    answer: `<a href="mailto:a@b.com">`,
    options: [
      `(A) <mail href="a@b">`,
      `(B) <mail>a@b</mail>`,
      `(C) <a href="a@b">`,
      `(D) <a href="mailto:a@b.com">`
    ],
  },

  {
    numb: 4,
    question: "How can you open a link in a new browser window?",
    answer: `<a href="url" target="_blank">`,
    options: [
      `(A) <a href="url" new>`,
      `(B) <a href="url" target="new">`,
      `(C) <a href="url" target="_blank">`,
      `(D) <a href="url" target="">`
    ],
  },

  {
    numb: 5,
    question: "Which of these tags are all <table> tags?",
    answer: `<table><tr><td>`,
    options: [
      `(A) <table><head><tfoot>`,
      `(B) <table><tr><td>`,
      `(C) <table><tr><tt>`,
      `(D) <thead><body><tr>`
    ],
  },
];
