// Kết nối tới server Socket.io (Thay URL bằng link server của bạn)
const socket = io("https://your-math-server.herokuapp.com");

let currentQuestion = null;
let myScore = 0;
let opponentScore = 0;

// 1. Tìm trận
function findMatch(userId, grade) {
    socket.emit('join-queue', { userId, grade });
    console.log("Đang tìm đối thủ...");
}

// 2. Nhận tín hiệu khi tìm thấy đối thủ
socket.on('match-found', (data) => {
    const { roomId, opponentName } = data;
    alert(`Đã tìm thấy đối thủ: ${opponentName}`);
    startGame(roomId);
});

// 3. Nhận câu hỏi mới từ server
socket.on('next-question', (questionData) => {
    currentQuestion = questionData;
    renderQuestion(questionData); // Hàm này hiển thị câu hỏi lên HTML
    resetTimer();
});

// 4. Gửi đáp án lên server
function sendAnswer(choice) {
    const isCorrect = (choice === currentQuestion.answer);
    
    // Hiệu ứng âm thanh và hình ảnh đã làm ở bước trước
    if (isCorrect) {
        soundCorrect.play();
        document.body.classList.add('flash-correct');
    } else {
        soundWrong.play();
        document.body.classList.add('shake-wrong');
    }

    socket.emit('submit-answer', {
        roomId: currentRoomId,
        isCorrect: isCorrect,
        responseTime: getRemainingTime()
    });
}

// 5. Cập nhật điểm đối thủ real-time
socket.on('update-scores', (scores) => {
    document.getElementById('my-score').innerText = scores.myScore;
    document.getElementById('opponent-score').innerText = scores.oppScore;
});
