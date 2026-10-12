// console.log(`success!`)
// const mianTitle = document.getElementById('main-title');
// console.log(mianTitle)

// const title = document.querySelector('#main-title');
// console.dir(title)

// console.log(document.body);
// console.log(document.documentElement)


// const text = document.getElementById('intro');
// console.log(text);

// const btn = document.querySelector('#change-btn');
// console.log(btn);

// const mainTitle = document.querySelector('#main-title');
// mainTitle.textContent = '高木';

// const text = document.getElementById('intro');
// text.innerHTML = `途中<br>改行`;

// const btn = document.getElementById('change-btn');
// // btn.style.fontWeight = 'bold'

// btn.innerHTML = `<strong>${btn.textContent}</strong>`


// text.style.backgroundColor = '#5bef6c';
// text.style.border = '5px solid #414141';

// btn.addEventListener('click', () => {
//     btn.style.backgroundColor = 'red';
//     btn.style.fontSize = '19px';
//     btn.style.border = '3px solid black';

// })

const light = document.getElementById('btn-light');
console.log(light)
const dark = document.querySelector('#btn-dark');
console.log(dark)
const green = document.querySelector('#btn-lightgreen');
console.log(green)


light.addEventListener('click', () => {
    document.body.style.backgroundColor = ' #fbc9c9'
})

dark.addEventListener('click', () => {
    document.body.style.backgroundColor = ' #160138';
    document.body.style.color = '#fff'
})

green.addEventListener('click', () => {
    document.body.style.backgroundColor = ' #c9fbcf';
    document.body.style.color = '#515151'
})
