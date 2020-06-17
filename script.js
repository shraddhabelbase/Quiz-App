const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const QuestionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, urrentQuestion
startButton.addEventListener('click', startGame)

function startGame(){

    startButton.classList.add('hide')
   
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()



}
function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(){
    QuestionElement.innerText = question.question
}
function SelectAnswer(){

}

const questions = [
    {
        question: "what is 2+2",
        answers: [
            {
                text: '4', correct: true },
               { text: '2', correct: false }
        ]
    }
]