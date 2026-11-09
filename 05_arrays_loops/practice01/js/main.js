// const nextBtn = document.getElementById('next-btn');
// const message = document.querySelector('#step-message');
// const indicator = document.querySelector('#step-indicator');
// let suji = 0;
// const steps = [
//     'ようこそ！まずはアカウント登録を始めましょう。',
//     'お名前とメールアドレスを入力してください。',
//     '入力内容を確認し、利用規約に同意してください。',
//     '登録が完了しました！サービスをお楽しみください🎉'
// ];
// nextBtn.addEventListener('click', () => {

//     suji++;
//     if (suji < 4) {
//         message.textContent = steps[suji];
//         indicator.textContent = `STEP ${suji + 1} / 4`;
//     } else {
//         nextBtn.setAttribute('disabled', 'true');
//     }
// })
// let suji2 = 0;
// for (let i = 1; i <= 10; i++) {
//     suji2 = suji2 + i;
// }
// console.log(suji2)
let currentIndex = 0;
const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];

const nextBtn = document.getElementById('next-btn');

const indicator = document.getElementById('step-indicator');

const message = document.getElementById('step-message');




const stepInput = document.querySelector('#new-step-input');
const addBtn = document.getElementById('add-btn');

// addBtn.addEventListener('click', () => {
//     const newInput = stepInput.value;

//     if (newInput === '') { return };
//     steps.push(newInput);

//     indicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
//     console.log(steps)
// })



// nextBtn.addEventListener('click', () => {
//     if (currentIndex < steps.length - 1) {
//         currentIndex++;


//     } else {
//         currentIndex = 0;
//     }
//     indicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
//     message.textContent = steps[currentIndex];

// });


addBtn.addEventListener('click', () => {
    const newmessage = stepInput.value;
    steps.push(newmessage);
    indicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`
})


nextBtn.addEventListener('click', () => {
    if (currentIndex < steps.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    indicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    message.textContent = steps[currentIndex];
})



const removeBtn = document.getElementById('remove-btn');
removeBtn.addEventListener('click', () => {
    steps.pop();
    indicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    console.log(steps);
})
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     total = total + i;

// }
// console.log(total)


// for (let i = 0; i < steps.length; i++) {
//     console.log(steps[i])
// }
// const menuList = document.querySelector('#menu-list');
// const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
// let liHtml = '';
// for (let i = 0; i < menus.length; i++) {
//     liHtml = liHtml + `<li>${menus[i]}</li>`;
// }
// console.log(liHtml);
// menuList.innerHTML = liHtml;
for (let i = 0; i < 5; i++) {
    console.log(`${i}`)
}

let total = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
    total = total + i;
}
console.log(total)



const menuList = document.querySelector('#menu-list')

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];

let liHtml = ``;

for (let i = 0; i < menus.length; i++) {
    liHtml = liHtml + `<li>${menus[i]}</li>`;

    console.log(liHtml)
}
menuList.innerHTML = liHtml
