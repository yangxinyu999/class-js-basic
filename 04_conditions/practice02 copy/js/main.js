const attackBtn = document.getElementById('attack-btn');

const message = document.getElementById('battle-message');

const hpDisplay = document.getElementById('hp-display');

const dogImg = document.querySelector('#enemy-img');

let inoti = 100;

attackBtn.addEventListener('click', () => {
    inoti = inoti - 25;
    if (inoti === 75) {
        hpDisplay.textContent = `HP:${inoti} / 100`;

        message.textContent = `効果的なダメージを与えた！`;
    } else if (inoti === 50) {
        message.textContent = `相手はふらふらだ！あと少し！`;
        hpDisplay.textContent = `HP:${inoti} / 100`;
        hpDisplay.style.color = '#de9b0b'

    } else if (inoti === 25) {
        hpDisplay.textContent = `HP:${inoti} / 100`;
    } else {
        hpDisplay.textContent = `HP:${inoti} / 100`;
        hpDisplay.style.color = '#de0b0b';
        message.textContent = `モンスターをたおした！ゲームクリア！`;
        attackBtn.setAttribute('disabled', 'true');
        dogImg.setAttribute('src', 'https://i.guim.co.uk/img/media/2e15ce82f161984268de408c1be365b4a9c0512d/0_1483_3456_2074/master/3456.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=81427d9947af288939beba6b585dd540');
    }

});

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
    inoti = 100;
    hpDisplay.textContent = `HP:${inoti} / 100`;
    message.textContent = `「こうげき」ボタンを押してダメージを与えよう！`;
    hpDisplay.style.color = '#000';
    attackBtn.removeAttribute('disabled');
    dogImg.setAttribute('src', 'https://picsum.photos/id/1025/400/250');

})
