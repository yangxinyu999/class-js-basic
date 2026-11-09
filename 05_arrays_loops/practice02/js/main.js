// const btns = document.querySelectorAll('.color-btn');
// console.log(btns);
// const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];

// const colorPreview = document.querySelector('#color-preview');

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         colorPreview.style.background = colorCodes[i];

//         colorPreview.textContent = `${btns[i].textContent} (${colorCodes[i]})}`
//     })
// }






// const httpLinks = document.querySelectorAll('a[href^="http"]');




// for (let i = 0; i < links.length; i++) {

//     if (links[i].getAttribute('href').startsWith('http')) {
//         links[i].setAttribute('target', '_blank')
//     } else {
//         links[i].setAttribute('target', '_self')
//     }

// }

// for (let i = 0; i < httpLinks.length; i++) {
//     httpLinks[i].setAttribute('target', '_blank');
//     httpLinks[i].setAttribute('rel', 'nopener noreferrer');
// }

// const tabBtns = document.querySelectorAll('.tab-btn')
// const tabPanel = document.querySelectorAll('.tab-panel')

// for (let i = 0; i < tabBtns.length; i++) {
//     tabBtns[i].addEventListener('click', () => {

//         for (let j = 0; j < tabBtns.length; j++) {
//             tabBtns[j].classList.remove('is-active');
//             tabPanel[j].classList.remove('is-active');
//         }
//         tabBtns[i].classList.add('is-active');
//         tabPanel[i].classList.add('is-active');
//     })
// }
const btn = document.querySelectorAll('.color-btn');
console.log(btn);

const links = document.querySelectorAll('a');

console.log(links);

for (let i = 0; i < links.length; i++) {

    if (links[i].getAttribute('href').startsWith('http')) {
        links[i].setAttribute('target', '_blank')
    } else {
        links[i].setAttribute('target', '_self')
    }
}

const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];
const colorPreview = document.querySelector('#color-preview')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {

        for (let j = 0; j < btn.length; j++) {
            btn[j].style.background = ``
        }

        links[i].setAttribute('rel', 'nopener noreferrer')
        colorPreview.style.background = `${colorCodes[i]}`
        colorPreview.textContent = `${btn[i].textContent} (${colorCodes[i]})`
        btn[i].style.background = `${colorCodes[i]}`
    })

}

const buttons = document.querySelectorAll('.tab-btn')

const tabPanel = document.querySelectorAll('.tab-panel')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (let j = 0; j < buttons.length; j++) {
            tabPanel[j].classList.remove('is-active');
            buttons[j].classList.remove('is-active');

        }

        tabPanel[i].classList.add('is-active')
        buttons[i].classList.add('is-active');

    })
}
