// Danh sách câu hỏi và đáp án
const questions = [
    {
        question: "Ai là người đầu tiên đặt chân lên Mặt Trăng?",
        answers: [
            { text: "Neil Armstrong", score: 10 },
            { text: "Buzz Aldrin", score: 5 },
            { text: "Yuri Gagarin", score: 3 },
            { text: "Michael Collins", score: 1 }
        ]
    },
    {
        question: "Thủ đô của Việt Nam là gì?",
        answers: [
            { text: "Hà Nội", score: 10 },
            { text: "TP. Hồ Chí Minh", score: 5 },
            { text: "Đà Nẵng", score: 3 },
            { text: "Hải Phòng", score: 1 }
        ]
    },
    {
        question: "Loài động vật nào lớn nhất thế giới?",
        answers: [
            { text: "Cá voi xanh", score: 10 },
            { text: "Voi", score: 5 },
            { text: "Khủng long", score: 3 },
            { text: "Hổ", score: 1 }
        ]
    }
];

let currentScore = 0;
let currentQuestionIndex = 0;

// Lấy các phần tử DOM
const wheel = document.getElementById('wheel');
const questionModal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
const answersList = document.getElementById('answersList');
const scoreDisplay = document.getElementById('score');
const endModal = document.getElementById('endModal');
const finalScore = document.getElementById('finalScore');
const playAgainButton = document.getElementById('playAgain');

// Xử lý sự kiện quay vòng
wheel.addEventListener('click', () => {
    wheel.style.animation = 'spin 2s linear';
    setTimeout(() => {
        wheel.style.animation = 'none';
        showQuestion();
    }, 2000);
});

// Hiển thị câu hỏi
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answersList.innerHTML = '';
    question.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer.text;
        li.addEventListener('click', () => selectAnswer(answer.score));
        answersList.appendChild(li);
    });
    questionModal.style.display = 'flex';
}

// Xử lý chọn đáp án
function selectAnswer(score) {
    currentScore += score;
    scoreDisplay.textContent = `Điểm: ${currentScore}`;
    questionModal.style.display = 'none';
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        endGame();
    } else {
        showQuestion();
    }
}

// Kết thúc trò chơi
function endGame() {
    finalScore.textContent = `Tổng điểm của bạn là: ${currentScore}`;
    endModal.style.display = 'flex';
}

// Chơi lại
playAgainButton.addEventListener('click', () => {
    currentScore = 0;
    currentQuestionIndex = 0;
    scoreDisplay.textContent = `Điểm: ${currentScore}`;
    endModal.style.display = 'none';
});

// Đóng modal
document.getElementById('closeModal').addEventListener('click', () => {
    questionModal.style.display = 'none';
});