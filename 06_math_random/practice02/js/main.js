// const drawUntilBtn = document.querySelector('#draw-until-btn');
// const drawLog = document.querySelector('#draw-log');
// const omikujiItems = ['大吉', '中吉', '小吉', '吉', '凶'];


// drawUntilBtn.addEventListener('click', () => {
//     let suji = 0;
//     let dice = Math.floor(Math.random() * omikujiItems.length);

//     drawLog.innerHTML = ``;

//     while (dice !== 0) {
//         suji++;
//         console.log(dice);
//         drawLog.innerHTML = drawLog.innerHTML + `${suji}回目：${omikujiItems[dice]}<br>`;
//         dice = Math.floor(Math.random() * omikujiItems.length);
//     }
//     suji++;
//     // drawLog.textContent = `${message}見事、${suji}回目で${omikujiItems[0]}が出ました。`
//     drawLog.innerHTML += `見事、${suji}回目で${omikujiItems[0]}が出ました。`;

// })

let num = 0;
let randomNum = Math.floor(Math.random() * 6 + 1);
while (randomNum !== 6) {
    num++;
    randomNum = Math.floor(Math.random() * 6 + 1);
    console.log(`出た目: ${num} 数字${randomNum}`);
}

const drawUntilBtn = document.querySelector('#draw-until-btn');

const drawMessage = document.querySelector('#draw-log');



const omikujiItems = ['大吉', '中吉', '小吉', '吉', '凶'];

drawUntilBtn.addEventListener('click', () => {

    drawMessage.innerHTML = '';

    let dice = 0;
    let randomNum = Math.floor(Math.random() * omikujiItems.length);

    while (randomNum !== 0) {
        dice++;
        randomNum = Math.floor(Math.random() * omikujiItems.length);
        drawMessage.innerHTML = drawMessage.innerHTML + `${dice}回目：${omikujiItems[randomNum]}<br>`
    }
    dice++;

    drawMessage.innerHTML += `見事、${dice}回目で${omikujiItems[0]}が出ました。`

})

const quotes = [
    'シンプルであることは、複雑であることよりもむずかしい。',
    '失敗したことがない人間というのは、新しいことに挑戦したことがない人間だ。',
    '今日できることを明日に延ばすな。',
    '情熱を持て。さもなければ、どんな簡単な仕事もやり遂げられない。'
];
const authors = [
    'スティーブ・ジョブズ',
    'アルベルト・アインシュタイン',
    'ベンジャミン・フランクリン',
    'ラルフ・ウォルド・エマーソン'
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('quote-btn');
// let lastnum = -1;

// quoteBtn.addEventListener('click', () => {
//     let newIndex = Math.floor(Math.random() * quotes.length);

//     while (newIndex === lastnum) {
//         newIndex = Math.floor(Math.random() * quotes.length);
//     }

//     quoteText.textContent = `${quotes[newIndex]}`;
//     quoteAuthor.textContent = `${authors[newIndex]}`;
//     lastnum = newIndex;

// })
let lastNum = -1
quoteBtn.addEventListener('click', () => {
    let quoteNum = Math.floor(Math.random() * quotes.length)
    while (lastNum === quoteNum) {
        quoteNum = Math.floor(Math.random() * quotes.length);
    }
    quoteText.textContent = quotes[quoteNum];
    quoteAuthor.textContent = authors[quoteNum];
    lastNum = quoteNum;
})

const fruits = ['りんご', 'ばなな', 'みかん'];

const removed = fruits.splice(1, 2);
console.log(fruits);
console.log(removed);


const presenterBtn = document.querySelector('#presenter-btn');
const presenterResult = document.querySelector('#presenter-result');
const remainingCount = document.querySelector('#remaining-count');
const members = ['佐藤さん', '鈴木さん', '高橋さん', '田中さん'];
// 全員の発表順が決まりました。お疲れ様でした。
// remainingCount.textContent = `残りの候補：${members.length}人`
// presenterBtn.addEventListener('click', () => {
//     let presenteNum = Math.floor(Math.random() * members.length);
//     presenterResult.textContent = members[presenteNum];
//     const picked = members.splice(presenteNum, 1)[0];
//     remainingCount.textContent = `残りの候補：${members.length}人`
//     if (members.length === 0) {
//         remainingCount.textContent = `全員の発表順が決まりました。お疲れ様でした。`;
//         presenterBtn.setAttribute('disabled', true)
//     }



// })

presenterBtn.addEventListener('click', () => {
    let presenteNum = Math.floor(Math.random() * members.length);
    presenterResult.textContent = members[presenteNum];
    const removed = members.splice(presenteNum, 1)[0];
    remainingCount.textContent = `残りの候補：${members.length}人`;

    if (members.length === 0) {
        remainingCount.textContent = `全員の発表順が決まりました。お疲れ様でした。`
        presenterBtn.setAttribute('disabled', true)
    }
})
