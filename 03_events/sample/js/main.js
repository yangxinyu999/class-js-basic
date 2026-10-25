const btn = document.querySelector('.btn');
const mainTitle = document.querySelector('#main-title');

const windowWidth = document.querySelector('#window-width');
const windowHeigh = document.querySelector('#window-heigh');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'クリックしました';
    mainTitle.style.color = '#ec6565';
});

window.addEventListener('scroll', () => {
    console.log(`${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollX}deg, #ff9a9e, #fad0c4)`
});
// 启动
window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollX}deg, #ff9a9e, #fad0c4)`;
    windowWidth.textContent = window.innerWidth;
    windowHeigh.textContent = window.innerHeight;
});


// 拉宽、缩窄
window.addEventListener('resize', () => {
    console.log(`幅が${window.innerWidth}px`);
    windowWidth.textContent = window.innerWidth;
    windowHeigh.textContent = window.innerHeight;
});
btn.classList.add('is-active');
btn.classList.remove('is-active');


btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ';
    } else {
        btn.textContent = '通常';
    }
});
