// Quiz questions and answers
const questions = [
    {
        question: "What is the most popular ice cream flavor?",
        options: ["Vanilla","Chocolate","Strawberry"],
        answer: "Vanilla"
    },
    {
        question: "Which flavor has nuts?",
        options: ["Pistachio", "Vanilla", "Chocolate"],
        answer: "Pistachio"
    },
    {
        question: "What is a traditional topping on an ice cream sundae?",
        options: ["M&Ms", "Whipped cream", "Gummy bears"],
        answer: "Whipped cream"
    },
    {
        question: "What is the main ingredient in sorbet?",
        options: ["Milk", "Fruit", "Ice cream"],
        answer: "Fruit"
    },
    {
        question: "What flavor of ice cream is made with green tea?",
        options: ["Matcha", "Mint", "Lime"],
        answer: "Matcha"
    },
    {
        question: "Which flavor is known for its pink color?",
        options: ["Strawberry", "Mint", "Chocolate"],
        answer: "Strawberry"
    },
    {
        question: "What country is famous for gelato, a type of ice cream?",
        options: ["France", "Italy", "Japan"],
        answer: "Italy"
    },
    {
        question: "Which fruit flavor is often paired with coconut in tropical ice creams?",
        options: ["Mango", "Pineapple", "Papaya"],
        answer: "Pineapple"
    },
    {
        question: "What frozen dessert is similar to ice cream but with less dairy fat?",
        options: ["Gelato", "Sorbet", "Frozen yogurt"],
        answer: "Frozen yogurt"
    }
];
let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion();
}
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${questionData.question}</p> 
        ${questionData.options.map(option => `<button style="margin: 10px;" onclick="checkAnswer('${option}')">${option}</button>`).join('')}
    `;
}
function checkAnswer(selectedOption) {
    const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
    alert(isCorrect ? "Correct! Great job." : "You got it wrong!");
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
}
// Fetch a joke from the Official Joke API
function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            // Format the joke to display the setup and punchline
            const joke = `${data.setup} - ${data.punchline}`;
            document.getElementById('joke-text').textContent = joke;
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById('joke-text').textContent = "Oops! Couldn't load a joke. Please try again later.";
        });
}
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
let index = 0;
function slideImages() {
    index = (index + 1) % images.length;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}
if (images.length > 0) {
    setInterval(slideImages, 3000); // Slide every 3 seconds
}