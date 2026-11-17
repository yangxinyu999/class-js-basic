// 06_ループの応用とMathオブジェクト
// console.log('ready!');

// const diceResult = document.querySelector('#dice-result');
// const rollDiceBtn = document.querySelector('#roll-dice-btn');

// rollDiceBtn.addEventListener('click', () => {
//     let result = Math.floor(Math.random() * 6 + 1);
//     diceResult.textContent = result
// })

// const messages = [
//     '最高の1日になります。新しいことに挑戦してみましょう。',
//     '思いがけない嬉しい出来事があるかもしれません。',
//     '焦らずマイペースに進むと良い結果につながります。',
//     '普段通りの日常に小さな幸せが見つかりそうです。',
//     '無理は禁物です。今日はゆっくり休んで体調を整えましょう。'
// ];
// const omikujiList = ['大吉', '中吉', '小吉', '凶', '吉'];

// const omikujiResule = document.querySelector('#omikuji-result');
// const omikujiMessage = document.querySelector('#omikuji-message');
// const omikujiBtn = document.querySelector('#omikuji-btn');

// omikujiBtn.addEventListener('click', () => {
//     let omikujibango = Math.floor(Math.random() * omikujiList.length);
//     omikujiResule.textContent = omikujiList[omikujibango];
//     omikujiMessage.textContent = messages[omikujibango];
// })

// const cards = document.querySelectorAll('.card');
// const drawCardBtn = document.querySelector('#draw-card-btn');

// drawCardBtn.addEventListener('click', () => {
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.remove('is-active')

//     }
//     let cardbango = Math.floor(Math.random() * cards.length);
//     cards[cardbango].classList.add('is-active');
// })
const num = 4.66;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// ceil ceil ceil ceil ceilceil ceil ceil ceil
// round round round round round round round

console.log(Math.floor(Math.random() * 10));
// const randomNum = Math.floor(Math.random() * 5 + 1);
// console.log(randomNum);


const diceResult = document.querySelector('#dice-result');
const rollDiceBtn = document.querySelector('#roll-dice-btn');

rollDiceBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    diceResult.textContent = randomNum
});

const messages = [
    '最高の1日になります。新しいことに挑戦してみましょう。',
    '思いがけない嬉しい出来事があるかもしれません。',
    '焦らずマイペースに進むと良い結果につながります。',
    '普段通りの日常に小さな幸せが見つかりそうです。',
    '無理は禁物です。今日はゆっくり休んで体調を整えましょう。'
];
const omikujiList = ['大吉', '中吉', '小吉', '吉', '凶'];

const omikujiBtn = document.querySelector('#omikuji-btn');
const omikujiMessage = document.querySelector('#omikuji-message');
const omikujiResule = document.querySelector('#omikuji-result');

omikujiBtn.addEventListener('click', () => {
    const omikujibango = Math.floor(Math.random() * omikujiList.length);
    omikujiMessage.textContent = messages[omikujibango];
    omikujiResule.textContent = omikujiList[omikujibango];
})

const cards = document.querySelectorAll('.card');
const drawCardBtn = document.querySelector('#draw-card-btn');
let lastnum = -1;
drawCardBtn.addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('is-active');
    };

    let cardbango = Math.floor(Math.random() * cards.length);

    while (lastnum === cardbango) {
        cardbango = Math.floor(Math.random() * cards.length);
    }
    cards[cardbango].classList.add('is-active');
    lastnum = cardbango;
})
