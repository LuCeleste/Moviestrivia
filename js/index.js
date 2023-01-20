const quiz = [
  {
    question : "¿Cómo se llama el lugar a dónde quieren que viajar Ellie y Carl de UP?",
    a1: "Cataratas Paraiso", 
    a2: "Cataratas Maravilla", 
    a3: "Cataratas Increibles", 
    a4: "Cataratas Soñadas",
    correct: "a1",
    img: '<img src= "./media/diez.jpg" > '
  
  },
  {
  question : "De las siguientes películas ¿cuál no es de Disney?",
  a1: "Ralph", 
  a2: "Un mundo extraño", 
  a3: "Mi villano favorito", 
  a4: "Pinocchio",
  correct: "a3",
  img: '<img src= "./media/uno.jpg" > '
},
{
  question : "¿Como llama Celia a Mike?",
  a1: "Cuchurrumi", 
  a2: "Mikey", 
  a3: "Mostruito", 
  a4: "Mielcita",
  correct: "a1",
  img: '<img src= "./media/dos.jpg" > '
},
{
  question : "¿Qué animal piensa Lilo que es Stitch a la hora de adoptarlo?",
  a1: "Gato", 
  a2: "Perro", 
  a3: "Chancho", 
  a4: "Oso",
  correct: "a2",
  img: '<img src= "./media/tres.jpg" > '
},
{
  question : "¿Por qué se alistó Mulán en el Ejército Imperial?",
  a1: "Para evitar que su padre se enlistara", 
  a2: "Para cumplir expectativas", 
  a3: "Para vengar a su familia", 
  a4: "Porque estaba enamorada de Shang",
  correct: "a1",
  img: '<img src= "./media/cuatro.jpg" > '

},
{
  question : "¿Cuál es el nombre de las hermanas protagonistas de 'Frozen'?",
  a1: "Ana y Elsa", 
  a2: "Clara y Elsa", 
  a3: "Tita y Nesta", 
  a4: "Elsa y Lucy",
  correct: "a1",
  img: '<img src= "./media/cinco.jpg" > '

},
{
  question : "¿Cual es el poder de Dash?",
  a1: "Invisibilidad", 
  a2: "Super Fuerza", 
  a3: "Super Velocidad", 
  a4: "Volar",
  correct: "a3",
  img: '<img src= "./media/seis.jpg" > '

},
{
  question : "¿A qué cantante le gusta Lilo?",
  a1: "Elvis", 
  a2: "Michael Jackson", 
  a3: "John Lennon", 
  a4: "Harry Styles",
  correct: "a1",
  img: '<img src= "./media/siete.jpg" > '

},
{
  question : "¿Cómo se llama el amigo de Winnie The Pooh?",
  a1: "Peter ", 
  a2: "Christopher ", 
  a3: "Robert", 
  a4: "Theodore",
  correct: "a2",
  img: '<img src= "./media/ocho.jpg" > '

},
{
  question : "¿En que animal se convierte Yzma al final de la película?",
  a1: "Raton", 
  a2: "Perro", 
  a3: "Gato", 
  a4: "Mono",
  correct: "a3",
  img: '<img src= "./media/nueve.jpg" > '

},

]
const quizCont = document.getElementById('quiz');
const answers = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submit = document.getElementById('submit');
const imagen = document.getElementById('imagen')
let currentQuiz = 0;
let score = 0
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quiz[currentQuiz];
  questionElement.innerHTML =currentQuizData.question;
  aText.innerHTML = currentQuizData.a1;
  bText.innerHTML = currentQuizData.a2;
  cText.innerHTML = currentQuizData.a3;
  dText.innerHTML = currentQuizData.a4;
  imagen.innerHTML = currentQuizData.img;
}

function getSelected(){
  let answer = undefined;
  answers.forEach((answerEl)=>{
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer
}


function deselectAnswers(){
  answers.forEach((answerEl)=>{
    answerEl.checked = false
  });
}


submit.addEventListener("click", ()=>{

  const answer = getSelected();
  if(answer){
    if (answer === quiz[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quiz.length) {
      loadQuiz();
    }else{
      quizCont.innerHTML =  `
      <h2> Respuestas correctas: ${score} de ${quiz.length}</h2>
      <button class="volver" onclick = "location.reload()"> Volver a intentar</button>
      `
    }
  }
});
