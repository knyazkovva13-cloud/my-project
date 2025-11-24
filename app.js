// Возможные варианты выбора
const choices = ['камень', 'ножницы', 'бумага']; // Русские наименования

// Соответствие эмблем каждому варианту
const icons = {
    'камень': '💎',
    'ножницы': '✂️',
    'бумага': '📄'
};

// Генерация случайного выбора компьютера
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Определение исхода игры
function play(playerSelection) {
    const compSelection = computerChoice(); // Выбор компьютера
    
    let resultText = ''; // Переменная для вывода результата
    let className = ''; // Класс для изменения цвета текста

    if (playerSelection === compSelection) { // Если ничья
        resultText = 'Ничья!';
        className = 'yellow-text';
    } else if ((playerSelection === 'камень' && compSelection === 'ножницы') || 
               (playerSelection === 'ножницы' && compSelection === 'бумага') || 
               (playerSelection === 'бумага' && compSelection === 'камень')) { // Победа игрока
        resultText = 'Победа!';
        className = 'green-text'; // Зеленый цвет текста при выигрыше
    } else { // Проигрыш игрока
        resultText = 'Проигрыш!';
        className = 'red-text'; // Красный цвет текста при поражении
    }

    // Обновление класса элемента для смены цвета текста
    document.getElementById('result').className = className;

    // Выводим итоговый результат на странице
    document.getElementById('result').innerHTML = `
        <strong>${resultText}</strong><br>
        Ваш ход: ${icons[playerSelection]},<br>
        Ход компьютера: ${icons[compSelection]}`;

    // Получаем контейнеры рук
    const playerHandEl = document.getElementById("playerHand");
    const computerHandEl = document.getElementById("computerHand");
    
    // Устанавливаем пикселизированные иконки
    playerHandEl.textContent = icons[playerSelection];
    computerHandEl.textContent = icons[compSelection];
    
    // Начинаем анимацию рук
    playerHandEl.classList.add("show-hand");
    computerHandEl.classList.add("show-hand");
    
    // Включаем эффект тряски и мигания
    playerHandEl.classList.add("shake-hand");
    computerHandEl.classList.add("shake-hand");
    
    // Ожидаем завершение анимации
    setTimeout(() => {
        playerHandEl.classList.remove("show-hand");
        computerHandEl.classList.remove("show-hand");
        playerHandEl.classList.remove("shake-hand");
        computerHandEl.classList.remove("shake-hand");
    }, 1500); // Время ожидания завершения анимации
}