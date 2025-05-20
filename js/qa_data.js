// Хранилище вопросов и ответов
let qaData = {
    "привет": "Здравствуйте! Чем могу помочь?",
    "как дела": "Спасибо, все хорошо! А у вас?",
    "который час": "Текущее время: " + new Date().toLocaleTimeString(),
    "какая сегодня дата?": "Сегодня " + new Date().toLocaleDateString(),
    "столица франции?": "Париж",
    "сколько будет 2+2?": "4"
};

// Функция для добавления новых вопросов и ответов
function addQA(question, answer) {
    question = question.toLowerCase().trim();
    qaData[question] = answer;
}

// Функция для получения ответа на вопрос
function getAnswer(question) {
    const normalizedInput = question.toLowerCase().trim();

    if (normalizedInput === "") { // Handle empty input if necessary
        return "Пожалуйста, введите вопрос."; 
    }

    for (const storedQuestion in qaData) {
        const normalizedStoredQuestion = storedQuestion.toLowerCase().trim();

        if (normalizedInput.includes(normalizedStoredQuestion) || normalizedStoredQuestion.includes(normalizedInput)) {
            return qaData[storedQuestion];
        }
    }

    return "Извините, я не знаю ответа на этот вопрос";
}
