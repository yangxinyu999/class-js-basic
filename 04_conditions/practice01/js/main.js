// // console.log('04_conditions ready!');
// // let score = 50;
// // if (score >= 80) {
// //     console.log('合格');
// // } else {
// //     console.log('不合格');
// // }
// const btn = document.querySelector('.btn');
// const message = document.getElementById('message');

// let age = 17;
// btn.addEventListener('click', () => {
//     if (age >= 20) {
//         message.textContent = '成人です。すべてのサービスを利用できます';
//         message.style.color = '#0066cc';
//     } else if (age > 17 && age < 20) {
//         message.textContent = '8〜19歳です。一部機能には保護者の同意が必要です';
//         message.style.color = '#dc862b';
//     } else {
//         message.textContent = '18歳未満です。利用制限がかかっています。';
//         message.style.color = '#e22525';
//     }
// })
// const header = document.getElementById('header');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 200) {
//         header.classList.add('is-scrolled')
//     } else {
//         header.classList.remove('is-scrolled')
//     }
// })


let score = 85;
if (score === 80) {
    console.log('合格');
} else if (score >= 60) {
    console.log('差一点');
} else {
    console.log('不合格')
}

const age = 16;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log('できる');

} else {
    console.log('できない');
}

const isMember = true;
const total = 10000;
const btn = document.querySelector('#btn');
const message = document.querySelector('#message');
const countScore = document.querySelector('#count');
let count = 0;
btn.addEventListener('click', () => {
    // if (total >= 10000 && isMember) {
    //     message.textContent = '【送料無料＋20%OFF】プレミアム会員特典が適用されました！';
    //     message.style.color = '#0066cc'
    // } else if (total >= 5000 && isMember) {
    //     message.textContent = '【送料無料】会員特別割引が適用されました！';
    //     message.style.color = '#03a410';
    // } else {
    //     message.textContent = '通常送料がかかります（会員登録＋5,000円以上で送料無料）.';
    //     message.style.color = '#970910';
    // }
    count++;
    countScore.textContent = count;

    if (count >= 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
    } else if (count % 10 === 0) {

        message.textContent = `${count}回達成！あと少し！`;
        message.style.color = '#0066cc';
    } else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333333';
    }


})
const pageTop = document.querySelector('.page-top');
window.addEventListener('scroll', () => {
    // if (window.scrollY >= 300) {
    //     pageTop.classList.add('is-active')
    // } else {
    //     pageTop.classList.remove('is-active')
    // }
    window.scrollY >= 300 ? pageTop.classList.add('is-active') : pageTop.classList.remove('is-active');
});
pageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
