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
  questionCounter(1);
};




// changing questions on button click
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;

const nextBtn = document.querySelector(".nextBtn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumber++;
    questionCounter(questionNumber);
  } else {
    showResultBox();
  }
};

// qestion answers options *******************************
const optionList = document.querySelector(".option-list");


// getting questions and options from array   
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                   <div class="option"><span>${questions[index].options[1]}</span></div>
                   <div class="option"><span>${questions[index].options[2]}</span></div>
                   <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  // console.log(userAnswer);

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    // console.log(correctAnswer);
  } else {
    answer.classList.add("incorrect");
  }


  // if user has selected disable all options

  for(let i = 0; i < allOptions; i++)
  {
    optionList.children[i].classList.add("disabled");
  }

}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}






// Question section making
let questions = [
  {
    numb: 1,
    question: "Which of the following JavaScript cannot do?",
    answer: "(D)All of the Above",
    options: [
      "(A)JavaScript can react to events",
      "(B)JavaScript can manipulate HTML elements",
      "(C)JavaScript can be use to validate data",
      "(D)All of the Above",
    ],
  },

  {
    numb: 2,
    question: "Whats so great about XML?",
    answer: "(D)Both A & B",
    options: [
      "(A)Easy data exchange",
      "(B)High speed on network",
      "(C)Only B.is correct",
      "(D)Both A & B",
    ],
  },

  {
    numb: 3,
    question:
      "Which is not a property of attribute Behaviour of <Marquee> tag?",
    answer: "(B) blur",
    options: ["(A) alternate", "(B) blur", "(C) scroll", "(D) slide"],
  },

  {
    numb: 4,
    question: "_________ keyword is used to declare variables in javascript.",
    answer: "(A) Var",
    options: ["(A) Var", "(B) Dim", "(C) String", "(D) None of the above"],
  },

  {
    numb: 5,
    question: "The attribute used to define a new namespace is ?",
    answer: "(C) Xmlns",
    options: ["(A) XMLNS", "(B) XmlNameSpace", "(C) Xmlns", "(D) XmlNs"],
  },
];








// *******************   result section  ******************************
const resultBox = document.querySelector(".result-box");
const goHomeBtn = document.querySelector(".goHome-btn");
const tryAgainBtn = document.querySelector(".tryAgain-btn");

const scoreText = document.querySelector(".score-text");
scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");
let progressStartValue = -1; // to overcome infinite loop
let progressEndValue = (userScore / questions.length) * 100;
let speed = 20;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(var(--alpha-color) ${
    progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg);`;
  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

function showResultBox() {
  quizBox.classList.remove("quizBox-Show-hide");
  resultBox.classList.add("resultBox-Show-hide");
}

tryAgainBtn.onclick = () => {
  quizBox.classList.add("quizBox-Show-hide");
  resultBox.classList.remove("resultBox-Show-hide");

  questionCount = 0;
  questionNumber = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumber);
};
