import "./styles.css";
import { mainContentRender } from "./tabs/mainContent.js";
import { menuRender } from "./tabs/menu.js";
import { aboutRender } from "./tabs/about.js"

const content = document.querySelector('#content');

mainContentRender();

document.querySelector('#home').addEventListener('click', e =>{
        content.textContent = '';
        mainContentRender();
})

document.querySelector('#menu').addEventListener('click', e =>{
    content.textContent = '';
    menuRender();
})

document.querySelector('#about').addEventListener('click', e =>{
    content.textContent = '';
    aboutRender();
})

// document.querySelector('#order').addEventListener('click', e =>{
//     content.textContent = '';
//     menuRender();
// })



