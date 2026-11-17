const heroHeader = document.querySelector('#hero-header');
const heroTitle = document.querySelector('#hero-title');

const heroLocation = document.querySelector('#hero-location');

const heroBtn = document.querySelector('#change-bg-btn');

// データの準備（4つの絶景スポット）
const imageUrls = [
    'https://picsum.photos/id/1015/1200/600',
    'https://picsum.photos/id/1018/1200/600',
    'https://picsum.photos/id/1036/1200/600',
    'https://picsum.photos/id/1043/1200/600'
];

const titles = [
    '静寂に包まれる北欧のフィヨルド',
    '霧が流れるスコットランドの大自然',
    'どこまでも広がる白銀の雪原',
    '夕陽に染まる険しいアルプスの稜線'
];

const locations = [
    'ノルウェー / ガイランゲルフィヨルド',
    'イギリス / ハイランド地方',
    'アイスランド / ヴァトナヨークトル氷河',
    'スイス / ベルナー・オーバーラント'
];

window.addEventListener('load', () => {
    let randomNum = Math.floor(Math.random() * imageUrls.length);
    heroHeader.style.backgroundImage = `url(${imageUrls[randomNum]})`;
    heroTitle.textContent = titles[randomNum];
    heroLocation.textContent = locations[randomNum];
});

let lastNum = -1;
heroBtn.addEventListener('click', () => {
    let newNum = Math.floor(Math.random() * imageUrls.length);

    while (lastNum === newNum) {
        newNum = Math.floor(Math.random() * imageUrls.length);
    }

    heroHeader.style.backgroundImage = `url(${imageUrls[newNum]})`;
    heroTitle.textContent = titles[newNum];
    heroLocation.textContent = locations[newNum];
    lastNum = newNum

})
