document.addEventListener("DOMContentLoaded",()=>{

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choice-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
          text: "What is the capital of France?",
          choices: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris"
        },
        {
          text: "Which planet is known as the Red Planet?",
          choices: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Mars"
        },
        {
          text: "What is the largest mammal in the world?",
          choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
          answer: "Blue Whale"
        },
        {
          text: "Which element has the chemical symbol 'O'?",
          choices: ["Gold", "Oxygen", "Hydrogen", "Carbon"],
          answer: "Oxygen"
        },
        {
          text: "What is 5 + 7?",
          choices: ["10", "12", "14", "15"],
          answer: "12"
        }
      ];
      
      let currentQuestionIndex = 0;
      let score = 0;

      startBtn.addEventListener("click" ,startQuiz)
      nextBtn.addEventListener("click", ()=>{
        currentQuestionIndex++
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else{
            showResult()
        }
      });

      restartBtn.addEventListener("click", ()=>{
        currentQuestionIndex=0;
        score = 0;
        resultContainer.classList.add("hidden")
        startQuiz()
      })

       function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion()
       }

       function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].text;
        choicesList.innerHTML = "" // clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click',()=> selectAnswer(choice))
            choicesList.appendChild(li)
        });
       }


       function selectAnswer(choice){
        // check if the selected choice is correct
        const correctAnswer = questions[currentQuestionIndex].answer
        if(choice === correctAnswer){
            score++
        }
        nextBtn.classList.remove("hidden");
        
       }

       function showResult(){
        questionContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden")
        scoreDisplay.textContent = ` ${score} out of ${questions.length}`
       }

})
