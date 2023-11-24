


/*Quiz*/
const questions = [
  {
    question: "What does IDE stand for in the context of programming?",
    options: [" Integrated Design Environment", "Integrated Development Environment", "Interactive Development Environment", "Internet Development Entity"],
    answer: "Integrated Development Environment"
  },
  {
    question: "Which programming language is commonly used for developing mobile applications?",
    options: ["Java", "Swift", "C#", "Python"],
    answer: "Swift"
  },
  {
    question: " What is the purpose of a hackathon in the IT student community?",
    options: ["To practice cybersecurity skills", " To develop software in a short timeframe", "To break into systems for learning purposes", "To study ethical hacking techniques"],
    answer: "To develop software in a short timeframe"
  },
  {
    question: "Which networking protocol is used to retrieve emails from a remote server to a local client?",
    options: ["POP3", "SMTP", "HTTP", "FTP"],
    answer: "POP3"
  },
  {
    question: " What does OOP stand for in programming?",
    options: ["Object-Oriented Programming", " Original Output Process", "Operator Overloading Process", " Ordered Object Protocol"],
    answer: "Object-Oriented Programming"
  },
  {
    question: "In computer science, what does the acronym HTML stand for?",
    options: ["Hyperlink Text Markup Language", "Hyper Text Markup Language", "High-Level Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: " Which of the following is not a version control system used in software development?",
    options: ["Git", "Subversion (SVN)", "Mercurial", "Apache"],
    answer: "Apache"
  },
  {
    question: "What is the term for a testing technique that involves validating individual units or components of a software application?",
    options: ["Integration Testing", "System Testing", "Unit Testing", "Acceptance Testing"],
    answer: "Unit Testing"
  }
];

let currentQuestion = 0;
let score = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';
  
  questions[currentQuestion].options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
  
  nextButton.style.display = 'none';
}

function checkAnswer(option) {
  const correctAnswer = questions[currentQuestion].answer;
  if (option === correctAnswer) {
    score++;
    correctAnswers++;
  } else {
    wrongAnswers++;
  }
  attemptedQuestions++;

  const nextButton = document.getElementById('next-btn');
  nextButton.style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  const resultElement = document.getElementById('result');
  const quizContainer = document.querySelector('.quiz-container');
  const totalQuestionsSpan = document.getElementById('total-questions');
  const attemptedSpan = document.getElementById('attempted');
  const correctSpan = document.getElementById('correct');
  const wrongSpan = document.getElementById('wrong');
  const percentageSpan = document.getElementById('percentage');
  const totalScoreSpan = document.getElementById('total-score');
  const tryAgainBtn = document.getElementById('try-again-btn');

  quizContainer.style.display = 'none';
  resultElement.style.display = 'block';

  totalQuestionsSpan.textContent = questions.length;
  attemptedSpan.textContent = attemptedQuestions;
  correctSpan.textContent = correctAnswers;
  wrongSpan.textContent = wrongAnswers;

  const percentage = ((correctAnswers / questions.length) * 100).toFixed(2);
  percentageSpan.textContent = percentage;

  totalScoreSpan.textContent = score + "/" + questions.length;

  tryAgainBtn.style.display = 'block';
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  attemptedQuestions = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  
  const resultElement = document.getElementById('result');
  const quizContainer = document.querySelector('.quiz-container');
  const tryAgainBtn = document.getElementById('try-again-btn');

  resultElement.style.display = 'none';
  quizContainer.style.display = 'block';
  tryAgainBtn.style.display = 'none';

  displayQuestion();
}


displayQuestion();





