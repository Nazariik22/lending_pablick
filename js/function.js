export async function render(element, arr, bouleTo,index) {
    bouleTo === 0 && arr.map(item => element.insertAdjacentHTML('beforeend',
        `<li><a id=${item.id}>${item.text}</a></li>`));
    bouleTo === 1 && arr.map(item => element.insertAdjacentHTML('beforeend',
        `<li>${item.text}</li>`));
    bouleTo === 2 && arr.map(item => element.insertAdjacentHTML('beforeend',
        `<div class="flex"><div class="number">${item.number}</div><p>${item.text}</p></div>`));
    bouleTo === 3 && arr.map(item => element.insertAdjacentHTML('beforeend',
        `<a href="${item.link}" id="${item.id}" target="_blank"><img src="${item.url}" alt=""></a>`));
    bouleTo === 4 && arr.map(item => element.insertAdjacentHTML('beforeend',
        ` <div class="section3_block"><img src="${item.url}" alt="#"><p>${item.text}</p>
    </div>`))
    bouleTo === 5 && element.insertAdjacentHTML('beforeend',
        ` <div class="sliders"><img src="${arr.url}" alt="#"><div class="slide_block">
    <h3>${arr.title}</h3><p>${arr.text}</p></div></div>`)
    bouleTo === 6 && element.insertAdjacentHTML('beforeend',
        ` <input type="radio" name="r1" id="radio_${arr}" ${arr==index&&'checked'}>`)
}
export function buttons(element, url) {
    element.map(item => item.addEventListener('click',
        () => window.open(url, "_blank"))
    )
}
export function menu(e, nav, button) {
    if (e.target.textContent === '⇊') {
        e.target.textContent = '⇈';
        nav.style.display = "flex"
        button.style.display = "block"
    } else if (e.target.textContent === '⇈') {
        e.target.textContent = '⇊';
        nav.style.display = ""
        button.style.display = ""
    }
}
const arrYcomponent = document.getElementsByClassName('section');
export function scrollTop(element, index) {
    element.onclick = () => arrYcomponent[index].scrollIntoView({ behavior: "smooth" })
}
