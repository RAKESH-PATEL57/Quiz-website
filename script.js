const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitQuiz = document.querySelector('.exit-btn');
const main = document.querySelector('.main');

startBtn.onclick = () => {
    popupInfo.classList.add('show');
    main.classList.add('blurbg');
}

exitQuiz.onclick = () => {
    popupInfo.classList.remove('show');
    main.classList.remove('blurbg');
}

