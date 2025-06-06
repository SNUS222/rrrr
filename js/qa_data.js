// Хранилище вопросов и ответов
let qaData = {
  "Что такое философия?": "система учений и способ научно-теоретического и духовно-практического освоения действительности, выраженного в мировоззренческой форме;",
  "Перечислите основные функции философии.": "познавательная, методологическая, мировоззренческая.",
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

// Теперь добавляем данные из "Текстовый документ (3).txt" используя addQA
// Примечание: комментарии из текстового файла не переносятся.
// Некоторые вопросы были объединены или исправлены для уникальности или корректности при первоначальном просмотре текстового файла.

addQA("Что такое философия?", "система учений и способ научно-теоретического и духовно-практического освоения действительности, выраженного в мировоззренческой форме;");
addQA("Перечислите основные функции философии.", "познавательная, методологическая, мировоззренческая.");
addQA("Что понимается под мировоззрением?", "система взглядов, представлений и идей о мире и человеке;");
addQA("Укажите только исторические типы мировоззрения.", "мифологическое, религиозное, философское;");
addQA("В чем основное отличие философии от других наук?", "все перечисленное.");
addQA("Каково место философии в системе культуры?", "место философии определяется всем перечисленным.");
addQA("Когда возникает философия?", "в условиях становления рабовладельческого общества;");
addQA("У какого философа древности впервые встречается термин «философия»?", "у Пифагора.");
addQA("В какой стране Древнего мира философские учения сложились наиболее четко и последовательно?", "в Древней Греции;");
addQA("Укажите наиболее известные философские учения Древнего Китая.", "даосизм и конфуцианство;");
addQA("Назовите наиболее древний религиозно-философский памятник Древней Индии.", "веды;");
addQA("В каком веке происходит становление собственно древнегреческой философии?", "в VII-VI веке до н.э.;");
addQA("Кто является основателем Милетской философской школы?", "Фалес;");
addQA("Кому принадлежит стихийно-диалектическое выражение «В одни и те же реки мы входим и не входим, существуем и не существуем»?", "Гераклиту.");
addQA("В чем сущность атомистического учения Левкиппа и Демокрита?", "все ответы правильны.");
addQA("Назовите наиболее выдающихся древнегреческих философов т.н. классического периода?", "Сократ, Платон, Аристотель;");
addQA("Аристотель является:", "автором всего перечисленного.");
addQA("Что составляет основу учения Платона?", "учение о мире идей;");
addQA("Что понимается под этическим рационализмом Сократа?", "все перечисленное.");
addQA("Выделите правильное утверждение. Религия - это ...", "форма общественного сознания, духовная ценность человечества;");
addQA("К какому историческому периоду относится становление религиозно-философской мысли в Центральной Азии?", "к 1 тысячелетию до н.э.");
addQA("Определите древнейший религиозно-философский памятник в Центральной Азии?", "Авеста;");
addQA("В чем сущность религиозной философии Зороастризма?", "в вере победы добра над злом.");
addQA("Если в истории философии Аристотель «первый учитель», то кого называли «вторым»?", "Фараби;");
addQA("Основателем какой науки является аль-Хорезми?", "алгебры и системы исчисления;");
addQA("Чьи естественно-научные и философские труды, по словам историка И.Ю. Крачковского, «охватывают весь круг современных ему наук» в ХІ веке?", "Беруни;");
addQA("Какое религиозно-философское учение в средние века являлось основой философствования в Центральной Азии?", "рационализм;");
addQA("Что есть мир по представлениям суфиев?", "мир есть отражение сущности Бога;");
addQA("Как понималась истина (хакикат) в средневековой философии Центральной Азии? Истина - это...", "отказ от себя, соединение с Богом;");
addQA("Кому принадлежат слова: правитель должен быть «справедливым, ненавидеть несправедливость и тиранию».", "Фараби;");
addQA("Какое произведение Юсуф Хас Ходжиба, известное русском переводе, как «Знание, дарующее счастье», представляет собой одно из крупнейших тюркоязычных нравственно-философских памятников ХІ века?", "Кутатгу билиг;");
addQA("Как Ибн-Сина понимал материю?", "рассматривал материю как основу бытия;");
addQA("Кто является автором «Книги исцеления»?", "Ибн-Сина;");
addQA("Комментатором и последователем какого философа был Фараби?", "Аристотеля");
addQA("В каком веке и где жил и творил великий узбекский мыслитель, поэт и просветитель Алишер Навои ?", "в XV веке в Герате;");
addQA("Кто из ученых-астрономов впервые составил полную для своего времени карту звездного мира ?", "Улугбек;");
addQA("Что лежит в основе философии средневековья в Европе?", "теоцентризм.");
addQA("В учении какого мыслителя эпохи Возрождения впервые сформулировано новое понимание строения Солнечной системы?", "Н. Коперника;");
addQA("Кто из философов Нового Времени обосновали «теорию общественного договора»?", "Гоббс и Локк;");
addQA("Назовите наиболее выдающихся мыслителей эпохи Просвещения?", "В.Вольтер и Ж.Ж.Руссо.");
addQA("Какая философия явилась вершиной развития философской мысли в XVIII - начале ХІХ вв. в Европе?", "немецкая классическая философия;");
addQA("Какое философское учение является официальной доктриной Ватикана?", "неотомизм;");
addQA("В чем особенность философии ХХ века?", "в создании новой философской картины мира и стиля мышления;");
addQA("Что такое методология?", "учение о методах познания.");
addQA("Детерминизм - это...", "учение о всеобщей причинной обусловленности;");
addQA("Метод-это ...", "все ответы правильны;");
addQA("Герменевтика - это", "теория и искусство истолкования истины,");
addQA("Что понимается под структурой в философском значении ?", "единство устойчивых взаимосвязей элементов;");
addQA("Что определяет отношение человека к самому себе?", "самосознание;");
addQA("Что такое развитие?", "качественное изменение, обеспечивающее поступательное движение объектов;");
addQA("Что означает философское понятие качества?", "совокупность свойств, существенная определенность предмета;");
addQA("Что такое количество?", "это определенность предмета, выражаемая в величинах и числах;");
addQA("С чего начинается путь познания объективной реальности?", "с чувственного познания;");
addQA("Определите основные категории истины.", "абсолютная и относительная.");
addQA("Человек - это...", "продукт антропосоциогенеза;");
addQA("Какое утверждение правильно? человек единство биосоциального;", "человек единство биосоциального;");
addQA("Какие методы познания относятся к методам эмпирического исследования?", "наблюдение, описание;");
addQA("Что изучает социальная философия?", "все перечисленное.");
addQA("Что означает понятие «культура»?", "совокупность материальных и духовных ценностей, созданных человеком в процессе его исторического развития.");
addQA("Волюнтаризм - это...", "все ответы правильны;");
addQA("Фатализм означает учение...", "о предопределении всего хода жизни общества или человека;");
addQA("Какое государство формируется в Узбекистане?", "все перечисленное;");
addQA("Что такое демократия?", "форма власти, признающая свободу и равноправие всех граждан;");
addQA("Право-это...", "закрепленные в законах основные правила и нормы поведения граждан к.-л. государства;");
addQA("Что означает духовность?", "основа высокой нравственности, приобщение к культурным ценностям и истории народа.");
addQA("Когда принята Конституция Республики Узбекистан?", "8 декабря 1992 года;");
addQA("Какие объективные обстоятельства вносят существенный вклад в возникновении коррупции?", "нестабильная политическая ситуация в стране, двусмысленные законы");
addQA("Какие факторы способствуют коррупции?", "все ответы верны.");
addQA("В каком году была принята Конвенция Организации Объединенных Наций против коррупции?", "Нью-Йорк, 31 октября 2003 г");
addQA("В каком году Узбекистан присоединился к Стамбульскому плану действий по борьбе с коррупцией?", "в 2010 г");
addQA("В каком году в Узбекистане был принят закон «О противодействии легализации доходов, полученных от преступной деятельности, и финансированию терроризма»", "2004");
addQA("В каком году Приказом министра юстиции была утверждена Методика проведения антикоррупционной экспертизы проектов нормативно-правовых актов?", "20 октября 2015 г");
addQA("Укажите которые из перечисленных преступлений относятся к коррупционным?", "все ответы верны");
addQA("Какой государственный орган, непосредственно осуществляет деятельность по борьбе с коррупцией?", "Генеральная прокуратура Республики Узбекистан");
addQA("В каком году был принят закон Республики Узбекистан « О противодействии коррупции»", "2017, январь");
addQA("Как называется категория морально-правового и социально-политического сознания, понятие о должном, связанное с исторически меняющимися представлениями о неотъемлемых правах человека?", "справедливость");
addQA("Категория этики, характеризующая способность личности осуществлять моральный самоконтроль, самостоятельно формировать для себя нравственные обязанности, требовать от себя их выполнение, называется:", "совестью");
addQA("Нравственная обязанность, ставшая внутриличностным источником добровольного подчинения своей воли задачам достижения и сохранения тех или иных моральных ценностей называется:", "долгом");
addQA("Назовите психологические механизмы передачи нравственных форм поведения из поколения в поколении", "подражание, заражение, идентификация");
addQA("Известный деятель центральноазиатского искусства Бекзод прославился как", "художник-миниатюрист");
addQA("Вид искусства, в котором главным средством создания художественного образа является звукоинтонация, это:", "музыка");
addQA("Что раскрывает ограничение понятия?", "объем");
addQA("Какая форма общественного сознания раскрывает отношение к прекрасному?", "эстетика");
addQA("Что является главным признаком философского понятия материи?", "быть объективной реальностью");
addQA("Что является способом существования материи?", "движение");
addQA("Какое определение является верным? пространство форма существования материи, имеющая три измерения", "пространство форма существования материи, имеющая три измерения");
addQA("Что такое время?", "это форма существования материи, имеющая одно измерение");
addQA("Какая форма движения материи является наиболее сложной?", "социальная");
addQA("Что выступает высшей формой отражения мира?", "сознание");
addQA("Что такое отражение?", "всеобщее свойство материи");
addQA("Сознание - это....", "все перечисленное");
addQA("Сколько приоритетных направлений указаны в Стратегии действий дальнейшего развития Республики Узбекистан, принятой в соответствии с указом Президента Республики Узбекистан от 7.02.2017 г., за номером ПФ-4947", "5 приоритетных направлений");
addQA("Назовите функции искусства", "все ответы верны");
addQA("Назовите наиболее характерные черты морали", "императивность и оценочность");
addQA("Какое происхождение имеет термин «мораль»?", "латинское происхождение");
addQA("Найдите правильный ответ: Умозаключение это", "форма мышления");
addQA("Как иначе называются дедуктивные умозаключения ?", "силлогизмами");
addQA("Найдите правильный ответ: Индукция это", "вид умозаключения");
addQA("Что является определяющим в жизни общества с точки зрения материалистической философии?", "производство материальных благ");
addQA("Что изучает этика?", "мораль");
addQA("Кто впервые ввел в науку термин «этика»?", "Аристотель");
addQA("Как называется древнекитайское этическое учение?", "Конфуцианство");
addQA("Укажите древнегреческих философов моралистов", "Сократ, Эпикур");
addQA("Кто является автором произведения «Жители добродетельного города»?", "Фараби");
addQA("Назовите центральные понятия морали", "добро и зло");
addQA("Кто является представителем «этики ненасилия»?", "Ганди, Толстой");
addQA("Как называется этическая система, которая рассматривает пользу как высшую ценность?", "утилитаристской");
addQA("Как называется этическая система, которая рассматривает удовольствие как высшее благо?", "гедонистической");
addQA("Укажите основные категории эстетики", "все варианты верны");
addQA("Эстетика это наука о:", "об эстетическом освоении действительности");
addQA("Кем впервые был введен термин «Эстетика»?", "Баумгартен");
addQA("Дайте определение понятию эстетический идеал", "это представление о высшей гармонии и совершенстве в действительности и в искусстве, которое становится целью и критерием деятельности человека по преобразованию мира и созиданию культуры");
addQA("Первым автором истории искусств является:", "И. Винкельман");
addQA("Найдите правильный ответ: эстетический вкус это:", "способность человека по чувству удовольствия или неудовольствия дифференцированно воспринимать и оценивать различные эстетические объекты;");
addQA("Логика это", "наука о формах и законах мышления");
addQA("Когда появилась формальная логика появилась?", "в античности");
addQA("Какой является традиционная логика?", "аристотелевской");
addQA("Что такое понятие?", "форма мышления");
addQA("Что свойственно понятию?", "объем");
addQA("Найдите правильный ответ: «Солнце» это понятие", "единичное");
addQA("Найдите правильный ответ: «Недисциплинированность» это понятие", "отрицательное");
addQA("Понятие, большее по объему называется", "родовым");
addQA("Как называется этическая система, которая ориентирует на достижение счастья?", "эвдемонизмом");
addQA("Кто является видными деятелями этики суфизма?", "Газали, Накшбанди");
addQA("Укажите нравственные качества личности", "сострадание, милосердие");
addQA("Как называются положительные качества личности?", "добродетелями");
addQA("Понятие морального сознания, выражающее представление о ценности личности, категория этики, отражающая моральное отношение человека к самому себе и общества к индивиду называется:", "достоинством");
addQA("Как называется нравственное требование, выраженное в виде позитивного предписания или запрета?", "моральная норма");
addQA("Какая этическая система была наиболее влиятельной в Центральной Азии в доисламский период?", "Зороастризма");
addQA("Искусство и средства массовой информации относятся к", "средствам нравственного воспитания");
addQA("Как определяется мораль с точки зрения философии?", "форма общественного сознания");
addQA("Изучением чего занимается раздел «историческая этика»?", "все ответы верны");
addQA("Что Ибн Сина считал главными нравственными качествами?", "выдержку, мудрость, храбрость");
addQA("Категория эстетики, характеризующая эстетическую ценность предметов и явлений, которые обладают большой положительной общественной значимостью, таят огромные потенциальные силы", "возвышенное;");
addQA("Крупнейшими теоретиками музыки в центральноазиатской эстетике эпохи средневековья являлись:", "Аль-Кинди, Фараби, Ибн Сина, Сафи-ад-Дин");
addQA("К какому виду изобразительного искусства относятся гравюра, литография, офорт", "к графике");
addQA("Что может раскрывать категория трагического?", "все ответы верны");
addQA("Может ли эстетическая деятельность быть 1) Художественно-рецептивной, 2) художественно-творческой, 3) теоретической", "Да");
addQA("Логика как наука состоит из:", "формальной, диалектической и математической логик");

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
