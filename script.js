// Получаем элементы пламени и искр
const flames = document.querySelectorAll('.flame');
const colorButtons = document.querySelector('.color-buttons');
const sizeButtons = document.querySelector('.size-buttons');
const toggleButton = document.querySelector('.toggle-button');
const controls = document.querySelector('.controls');
const fireContainer = document.querySelector('.fire-container');
const fireSound = document.querySelector('#fire-sound')

fireSound.play().catch(error => {
    console.log("Автовоспроизведение звука заблокировано. Пользователь должен взаимодействовать с страницей.");
});

// Функция для изменения цвета огня
function changeFireColor(color) {
    let flameColor, shadowColor;

    switch (color) {
        case 'yellow':
            flameColor = ['#ff8c00', '#ff4500']; // Оранжево-красный
            shadowColor = '#ff4500';
            break;
        case 'blue':
            flameColor = ['#00aaff', '#0055ff']; // Сине-голубой
            shadowColor = '#0055ff';
            break;
        case 'emerald':
            flameColor = ['#50c878', '#228b22']; // Изумрудный
            shadowColor = '#228b22';
            break;
        case 'white':
            flameColor = ['#ffffff', '#f0f0f0']; // Белый
            shadowColor = '#f0f0f0';
            break;
        case 'purple':
            flameColor = ['#800080', '#4b0082']; // Фиолетовый
            shadowColor = '#4b0082';
            break;
        case 'pink':
            flameColor = ['#ff69b4', '#ff1493']; // Розовый
            shadowColor = '#ff1493';
            break;
        case 'red':
            flameColor = ['#ff0000', '#cc0000']; // Красный
            shadowColor = '#cc0000';
            break;
        case 'orange':
            flameColor = ['#ffa500', '#ff8c00']; // Оранжевый
            shadowColor = '#ff8c00';
            break;
        case 'gray-blue':
            flameColor = ['#808080', '#4682b4']; // Серый с синим
            shadowColor = '#4682b4';
            break;
        case 'sky-pink':
            flameColor = ['#87ceeb', '#ff1493']; // Голубой с розовым
            shadowColor = '#ff1493';
            break;
        case 'lavender-pink':
            flameColor = ['#e6e6fa', '#ff69b4']; // Лаванда с розовым
            shadowColor = '#ff69b4';
            break;
        case 'green-yellow':
            flameColor = ['#32cd32', '#ffeb3b']; // Зелёный с жёлтым
            shadowColor = '#ffeb3b';
            break;
        default:
            flameColor = ['#ff8c00', '#ff4500']; // По умолчанию
            shadowColor = '#ff4500';
    }

    // Применяем цвета к пламени
    flames.forEach(flame => {
        flame.style.background = `linear-gradient(to top, transparent, ${flameColor[0]}, ${flameColor[1]})`;
    });
}

// Функция для изменения размера пламени
function changeFireSize(size) {
    switch (size) {
        case 'small':
            fireContainer.style.transform = 'scale(0.5)';
            controls.style.marginTop = '0';
            break;
        case 'medium':
            fireContainer.style.transform = 'scale(1)';
            controls.style.marginTop = '0';
            break;
        case 'large':
            fireContainer.style.transform = 'scale(1.5)';
            controls.style.marginTop = '100px'; // Отодвигаем кнопки вниз
            break;
        case 'extra':
            fireContainer.style.transform = 'scale(2)';
            controls.style.marginTop = '150px'; // Отодвигаем кнопки вниз
            break;
        case 'ultra':
            fireContainer.style.transform = 'scale(2.5)';
            controls.style.marginTop = '250px'; // Отодвигаем кнопки вниз
            break;
        default:
            fireContainer.style.transform = 'scale(1)';
            controls.style.marginTop = '0';
    }
}

// Обработчики событий для кнопок
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeFireColor(color);
    });
});

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', () => {
        const size = button.getAttribute('data-size');
        changeFireSize(size);
    });
});

// Скрытие/показа кнопок
toggleButton.addEventListener('click', () => {
    controls.classList.toggle('hidden');
    toggleButton.textContent = controls.classList.contains('hidden') ? '👁️' : '👁️';
});

// По умолчанию устанавливаем жёлтый цвет и средний размер
changeFireColor('yellow');
changeFireSize('medium');
