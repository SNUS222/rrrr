// Хранилище вопросов и ответов
let qaData = {
    "привет": "Здравствуйте! Чем могу помочь?",
    "как дела": "Спасибо, все хорошо! А у вас?",
    "который час": "Текущее время: " + new Date().toLocaleTimeString()
};

// Функция для добавления новых вопросов и ответов
function addQA(question, answer) {
    question = question.toLowerCase().trim();
    qaData[question] = answer;
    saveQAData();
}

// Функция для получения ответа на вопрос
function getAnswer(question) {
    question = question.toLowerCase().trim();
    return qaData[question] || "Извините, я не знаю ответа на этот вопрос";
}

// Сохранение данных в localStorage
function saveQAData() {
    localStorage.setItem('qaData', JSON.stringify(qaData));
}

// Загрузка данных из localStorage
function loadQAData() {
    const saved = localStorage.getItem('qaData');
    if (saved) {
        qaData = JSON.parse(saved);
    }
}

// Загружаем сохраненные данные при запуске
loadQAData(); 