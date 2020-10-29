
let questions = [
  {
    id: 1,
    question: "O que é 'Pseudocódigo'?",
    answer: "Uma forma genérica de escrever um algoritmo, utilizando uma linguagem simples (nativa a quem o descreve)",
    options: [
      "Uma forma genérica de escrever um algoritmo, utilizando uma linguagem simples (nativa a quem o descreve)",
      "Maneira rigorosa de raciocinar",
      "Uma linguagem de programação",
      "Uma sequência de passos para atingir determinado objetivo"
    ]
  },
  {
    id: 2,
    question: "O que são arrays?",
    answer: "Estruturas de dados homogêneas",
    options: [
      "Estruturas de dados homogêneas",
      "Variáveis específicas para armazenamento de números inteiros",
      "Forma de planejamento do algoritmo",
      "Formas de estruturar ou organizar dados na memória RAM do computador"
    ]
  },
  {
    id: 3,
    question: "O que é um algoritmo?",
    answer: "Uma sequência de passos, conhecida como um conjunto de instruções para chegar a um determinado objetivo",
    options: [
      "Ações ditas ao computador para ele executar",
      "A solução de um problema",
      "Uma sequência de passos, conhecida como um conjunto de instruções para chegar a um determinado objetivo",
      "Permite realizar operações lógicas e artméticas utilizando apenas dois digitos ou estados"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
