// const prevBtn = document.querySelector('#prev-btn')
// const nextBtn = document.querySelector('#next-btn')

// const photos = ['https://picsum.photos/id/1015/700/420',
//     'https://picsum.photos/id/1018/700/420',
//     'https://picsum.photos/id/1039/700/420',
//     'https://picsum.photos/id/1043/700/420']

// const messages = ['北欧のフィヨルドと渓谷', '霧に包まれたハイランドの山々', 'エメラルドグリーンの森と滝', '夕暮れに染まるアルプスの渓谷']

// const mainImg = document.querySelector('#main-img')

// const messageImg = document.querySelector('#caption-text')

// const thumbImgs = document.querySelectorAll('.thumb-img')

// let suji = 0;
// nextBtn.addEventListener('click', () => {

//     for (let i = 0; i < thumbImgs.length; i++) {
//         thumbImgs[i].classList.remove('is-active')
//     }

//     if (suji < photos.length - 1) {
//         suji++;
//         mainImg.setAttribute('src', photos[suji])
//         messageImg.textContent = `${suji + 1}/ ${photos.length} : ${messages[suji]}`
//         thumbImgs[suji].classList.add('is-active')
//     } else {
//         suji = 0;
//         mainImg.setAttribute('src', photos[suji]);
//         messageImg.textContent = `${suji + 1}/ ${photos.length} : ${messages[suji]}`;
//         thumbImgs[suji].classList.add('is-active')
//     }
// })
// prevBtn.addEventListener('click', () => {

//     for (let i = 0; i < thumbImgs.length; i++) {
//         thumbImgs[i].classList.remove('is-active')
//     }
//     if (suji >= 1) {
//         suji--;
//         mainImg.setAttribute('src', photos[suji]);
//         messageImg.textContent = `${suji + 1}/${photos.length} : ${messages[suji]}`
//         thumbImgs[suji].classList.add('is-active')
//     } else {
//         suji = photos.length - 1;
//         mainImg.setAttribute('src', photos[suji]);
//         messageImg.textContent = `${suji + 1}/ ${photos.length} : ${messages[suji]}`
//         thumbImgs[suji].classList.add('is-active')
//     }
// })


// for (let i = 0; i < thumbImgs.length; i++) {


//     thumbImgs[i].addEventListener('click', () => {

//         for (let j = 0; j < thumbImgs.length; j++) {
//             thumbImgs[j].classList.remove('is-active')

//         }

//         suji = i;


//         thumbImgs[i].classList.add('is-active')

//         mainImg.setAttribute('src', photos[i]);
//         messageImg.textContent = `${suji + 1}/ ${photos.length} : ${messages[i]}`

//         messageImg.textContent = `${i + 1}/ ${photos.length} : ${messages[i]}`


//     })

// }











const prevBtn = document.querySelector('#prev-btn');

const nextBtn = document.querySelector('#next-btn');

const mainImg = document.querySelector('#main-img');

const imgmessage = document.querySelector('#caption-text');

const thumbImgs = document.querySelectorAll('.thumb-img');

let suji = 0;

const photos = ['https://picsum.photos/id/1015/700/420', 'https://picsum.photos/id/1018/700/420', 'https://picsum.photos/id/1039/700/420', 'https://picsum.photos/id/1043/700/420'];

const photosAlt = ['北欧のフィヨルドと渓谷', '霧に包まれたハイランドの山々', 'エメラルドグリーンの森と滝', '夕暮れに染まるアルプスの渓谷'];


nextBtn.addEventListener('click', () => {

    for (let i = 0; i < thumbImgs.length; i++) {
        thumbImgs[i].classList.remove('is-active')

    }



    if (suji < photos.length - 1) {
        suji++;
        mainImg.setAttribute('src', photos[suji]);
        mainImg.setAttribute('alt', photosAlt[suji]);
        imgmessage.textContent = `${suji + 1} / ${photos.length} : ${photosAlt[suji]}`

        thumbImgs[suji].classList.add('is-active');


    } else {
        suji = 0;
        mainImg.setAttribute('src', photos[suji]);
        mainImg.setAttribute('alt', photosAlt[suji]);
        imgmessage.textContent = `${suji + 1} / ${photos.length} : ${photosAlt[suji]}`
        thumbImgs[suji].classList.add('is-active');
    }
})

prevBtn.addEventListener('click', () => {

    for (let i = 0; i < thumbImgs.length; i++) {
        thumbImgs[i].classList.remove('is-active')

    }


    if (suji > 0) {
        suji--;
        mainImg.setAttribute('src', photos[suji]);
        mainImg.setAttribute('alt', photosAlt[suji]);
        imgmessage.textContent = `${suji + 1} / ${photos.length} : ${photosAlt[suji]}`

        thumbImgs[suji].classList.add('is-active');


    } else {
        suji = photos.length - 1;
        mainImg.setAttribute('src', photos[suji]);
        mainImg.setAttribute('alt', photosAlt[suji]);
        imgmessage.textContent = `${suji + 1} / ${photos.length} : ${photosAlt[suji]}`

        thumbImgs[suji].classList.add('is-active');
    }
})

for (let i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].addEventListener('click', () => {
        for (let j = 0; j < thumbImgs.length; j++) {
            thumbImgs[j].classList.remove('is-active');
        }
        suji = i;
        mainImg.setAttribute('src', photos[i]);
        thumbImgs[i].classList.add('is-active');

        imgmessage.textContent = `${i + 1} / ${photos.length} : ${photosAlt[suji]}`;

    })


}
