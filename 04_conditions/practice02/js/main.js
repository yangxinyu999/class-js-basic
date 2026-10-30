

const switchSiteBtn = document.getElementById('switch-site-btn');
const externalLink = document.querySelector('#external-link');

const googleLink = 'https://google.com';

switchSiteBtn.addEventListener('click', () => {
    const linkHref = externalLink.getAttribute('href');
    if (linkHref === googleLink) {

        externalLink.textContent = 'トライデント公式サイトを開く（同じタブ）';
        externalLink.setAttribute('href', 'https://computer.trident.ac.jp/');
        externalLink.setAttribute('target', '_self');
    } else {
        externalLink.textContent = 'Googleを開く（新しいタブ）';
        externalLink.setAttribute('href', 'https://google.com');
        externalLink.setAttribute('target', "_blank");
    }
});



// const passwordBtn = document.querySelector('#toggle-password-btn');
// const passwordInput = document.getElementById('password-input');
// passwordBtn.addEventListener('click', () => {
//     if (passwordInput.getAttribute('type') === 'password') {
//         passwordInput.setAttribute('type', 'text');
//         passwordBtn.textContent = '非表示';
//     } else {
//         passwordInput.setAttribute('type', 'password');

//         passwordBtn.textContent = '表示';
//     }
// })

const passwordBtn = document.querySelector('#toggle-password-btn');
const passwordInput = document.querySelector('#password-input');

passwordBtn.addEventListener('click', () => {
    const linkType = passwordInput.getAttribute('type');
    if (linkType === 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordBtn.textContent = '非表示';
    } else {
        passwordInput.setAttribute('type', 'password');
        passwordBtn.textContent = '表示';
    }
})







const postBtn = document.getElementById('post-btn');
postBtn.removeAttribute('disabled');
















// const viewImg = document.getElementById('view-img');
// const toggleImgBtn = document.getElementById('toggle-img-btn');
// const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
// const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';

// toggleImgBtn.addEventListener('click', () => {
//     const currenSrc = viewImg.getAttribute('src');
//     if (currenSrc === DAY_IMG) {
//         viewImg.setAttribute('src', NIGHT_IMG);
//         viewImg.setAttribute('alt', '夜の画像');
//         toggleImgBtn.textContent = '切换白天';
//     } else {
//         viewImg.setAttribute('src', DAY_IMG);
//         viewImg.setAttribute('alt', '昼の画像');
//         toggleImgBtn.textContent = '切换黑天';
//     }
// });

const toggleImgBtn = document.querySelector('#toggle-img-btn');
toggleImgBtn.textContent = '切替';
const viewImg = document.querySelector('#view-img');
const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';
toggleImgBtn.addEventListener('click', () => {
    const viewImgSrc = viewImg.getAttribute('src');
    if (viewImgSrc === DAY_IMG) {
        viewImg.setAttribute('src', NIGHT_IMG);
        viewImg.setAttribute('alt', '夜画像');
        toggleImgBtn.textContent = '切替昼画像'

    } else {
        viewImg.setAttribute('src', DAY_IMG);
        viewImg.setAttribute('alt', '昼画像');
        toggleImgBtn.textContent = '切替夜画像';
    }
})
