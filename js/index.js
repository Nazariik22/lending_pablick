import { buttons, menu, render, scrollTop } from "./function.js";
import { data, header, sliders } from "./getState.js";
const listElementHtml = {
    nav: document.getElementsByClassName('nav')[0],
    ul_section2: document.getElementsByClassName('ul_section2')[0],
    ul_section4: document.getElementsByClassName('ul_section4')[0],
    ul_section6: document.getElementsByClassName('ul_section6')[0],
    section7Content: document.getElementsByClassName('content')[0],
    contact: document.getElementsByClassName('contact')[0],
    network: document.getElementsByClassName('network')[0],
    section3_flex: document.getElementsByClassName('section3_flex')[0],
    buttonArr: Array.from(document.getElementsByClassName('bth')),
    menu_logo: document.getElementsByClassName(' menu_logo')[0],
    scrollMenu: document.getElementsByTagName('header')[0],
    wrapper_slider: document.getElementsByClassName('wrapper_slider')[0],
    cheked: document.getElementsByClassName(' cheked')[0],
    left: document.getElementsByClassName('left')[0],
    right: document.getElementsByClassName('right')[0],
}

const { nav, ul_section2, ul_section4, ul_section6, section7Content, contact, network, section3_flex,
    buttonArr, menu_logo, scrollMenu, wrapper_slider, cheked, left, right } = listElementHtml;
const run = {
    return() {
        render(nav, header, 0)
        render(ul_section2, data.section2, 1)
        render(ul_section4, data.section4, 1)
        render(ul_section6, data.section6, 1)
        render(section7Content, data.section7, 2)
        render(contact, data.footer.contact, 3)
        render(network, data.footer.network, 3)
        render(section3_flex, data.section3, 4)
        buttons(buttonArr, 'https://t.me/Diplomni_elena')
        windowRender();
    }
}

function windowRender() {
    if (window.innerWidth > 1000) {
        wrapper_slider.innerHTML = ''
        cheked.innerHTML = ''
        render(wrapper_slider, sliders.state[sliders.index], 5)
        render(wrapper_slider, sliders.state[sliders.index + 1], 5)
        for (let i = 0; i < Math.ceil(sliders.state.length - 1); i++) {
            render(cheked, i, 6, sliders.index)
        }
        Array.from(cheked.children).forEach((item, index) => {
            item.addEventListener('click',
                () => {
                    sliders.index=index;
                    windowRender()
                })
        }
        )

    } else {
        wrapper_slider.innerHTML = ''
        render(wrapper_slider, sliders.state[sliders.index], 5)
    }
}
run.return();
menu_logo.addEventListener('click', (e) => menu(e, nav, buttonArr[0]))
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollMenu.style.position = ' fixed';
        scrollMenu.style.padding = ' 15px';
        scrollMenu.style.top = ' 0px';
    }

});
const navigator = {
    about_us: document.getElementById('about_us'),
    advantages: document.getElementById('advantages'),
    reviews: document.getElementById('reviews'),
    cooperation: document.getElementById('cooperation'),
    qrCod: document.getElementById('qr'),
    wrapperCode: document.querySelector('.wrapperCode'),
    close: document.querySelector('.close')
}
const { about_us, advantages, reviews, cooperation, qrCod, wrapperCode, close } = navigator
scrollTop(about_us, 0);
scrollTop(advantages, 2);
scrollTop(reviews, 4);
scrollTop(cooperation, 5);
qrCod.target = ''
qrCod.addEventListener('click', (e) => {
    e.defaultPrevented;
    qrCod.href = '#qr';
    wrapperCode.style.display = 'flex'
})
close.addEventListener('click', (e) => wrapperCode.style.display = 'none')
left.addEventListener('click', () => {
    if (sliders.index) {
        sliders.index = sliders.index - 1
        windowRender()
    }else{
        sliders.index= sliders.state.length -2
        windowRender()
    }
})
right.addEventListener('click', () => {
    if (sliders.index < sliders.state.length - 2 && window.innerWidth > 1000) {
        sliders.index = sliders.index + 1
        windowRender()
    }else if(sliders.index < sliders.state.length-1 && window.innerWidth < 1000){
        sliders.index = sliders.index + 1
        windowRender()
    }else{
        sliders.index=0
        windowRender()
    }
})
