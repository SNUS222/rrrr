// Хранилище вопросов и ответов
let qaData = {
  "Что такое алгоритм в информатике?": "Алгоритм в информатике это конечная совокупность точно заданных правил решения некоторого класса задач или набор инструкций, описывающих порядок действий исполнителя для достижения результата решения задачи за конечное число действий.",
  "Кто считается родоначальником термина «алгоритм»?": "Родоначальником термина «алгоритм» считается средневековый персидский учёный Мухаммад ибн Муса аль-Хорезми.",
  // ... (все остальные вопросы и ответы)
  "\"Что выведет следующий код: for(int i=10; i>=1;i--) cout << i << \"\" \"\" \"\" ?\"": "Код for(int i=10; i>=1; i--) cout <<i<<\"\" выведет: 10 9 8 7 6 5 4 3 2 1 (числа от 10 до 1 включительно, разделенные пробелами, и пробел в конце)."
};

// Функция для добавления новых вопросов и ответов
function addQA(question, answer) {
    question = question.toLowerCase().trim();
    qaData[question] = answer;
}

// Функция для получения ответа на вопрос
function getAnswer(question) {
    const normalizedInput = question.toLowerCase().trim();

    if (normalizedInput === "") {
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
