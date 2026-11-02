// const attackBtn = document.getElementById('attack-btn');

// const message = document.getElementById('battle-message');

// const hpDisplay = document.getElementById('hp-display');

// const dogImg = document.querySelector('#enemy-img');

// let inoti = 100;

// attackBtn.addEventListener('click', () => {
//     inoti = inoti - 25;
//     if (inoti === 75) {
//         hpDisplay.textContent = `HP:${inoti} / 100`;

//         message.textContent = `効果的なダメージを与えた！`;
//     } else if (inoti === 50) {
//         message.textContent = `相手はふらふらだ！あと少し！`;
//         hpDisplay.textContent = `HP:${inoti} / 100`;
//         hpDisplay.style.color = '#de9b0b'

//     } else if (inoti === 25) {
//         hpDisplay.textContent = `HP:${inoti} / 100`;
//     } else {
//         hpDisplay.textContent = `HP:${inoti} / 100`;
//         hpDisplay.style.color = '#de0b0b';
//         message.textContent = `モンスターをたおした！ゲームクリア！`;
//         attackBtn.setAttribute('disabled', 'true');
//         dogImg.setAttribute('src', 'https://i.guim.co.uk/img/media/2e15ce82f161984268de408c1be365b4a9c0512d/0_1483_3456_2074/master/3456.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=81427d9947af288939beba6b585dd540');
//     }

// });

// const resetBtn = document.querySelector('#reset-btn');
// resetBtn.addEventListener('click', () => {
//     inoti = 100;
//     hpDisplay.textContent = `HP:${inoti} / 100`;
//     message.textContent = `「こうげき」ボタンを押してダメージを与えよう！`;
//     hpDisplay.style.color = '#000';
//     attackBtn.removeAttribute('disabled')
//     dogImg.setAttribute('src', 'https://picsum.photos/id/1025/400/250');

// })



const attackBtn = document.querySelector('#attack-btn');

const resetBtn = document.getElementById('reset-btn');

let maxHp = 100;

const hpDisplay = document.querySelector('#hp-display');

const message = document.getElementById('battle-message');

const mainImg = document.getElementById('enemy-img');
const enemyImg = 'https://picsum.photos/id/1025/400/250';
const lastImg = 'https://picsum.photos/id/1062/400/250';

attackBtn.addEventListener('click', () => {
    maxHp = maxHp - 25;
    hpDisplay.textContent = `HP:${maxHp}/ 100`
    if (maxHp >= 75) {
        message.textContent = '効果的なダメージを与えた！';
    } else if (maxHp >= 25) {
        message.textContent = '相手はふらふらだ！あと少し！';
        hpDisplay.style.color = '#dc7d11'
    } else {
        hpDisplay.style.color = '#de2a0e';
        message.textContent = 'モンスターをたおした！ゲームクリア！';
        attackBtn.setAttribute('disabled', true);
        mainImg.setAttribute('src', lastImg);
        mainImg.setAttribute('src')

    }
})
resetBtn.addEventListener('click', () => {
    maxHp = 100;
    hpDisplay.textContent = `HP:${maxHp}/ 100`;
    message.textContent = 'こうげき」ボタンを押してダメージを与えよう！';

    hpDisplay.style.color = '#000';

    attackBtn.removeAttribute('disabled');
    mainImg.setAttribute('src', enemyImg);
})
