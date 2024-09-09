import ramenOne from '../assets/ramen1.png'
import ramenTwo from '../assets/ramen2.png'
import ramenThree from '../assets/ramen3.png'
import logoImg from '../assets/logo.png'
import menuFillImg from '../assets/menuFill.png'

function menuRender() {
    const content = document.querySelector('#content');

    const div = document.createElement('div');
    const menuFill = document.createElement('img');
    menuFill.src = menuFillImg;
    menuFill.alt = "Ramen";
    menuFill.classList.add('menuFill');
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = logoImg;
    logo.alt = "Ramen shop logo";

    const ramen1H2 = document.createElement('h2');
    ramen1H2.textContent = "MISO RAMEN";
    const ramen2H2 = document.createElement('h2');
    ramen2H2.textContent = "SHIO RAMEN";
    const ramen3H2 = document.createElement('h2');
    ramen3H2.textContent = "SHOYU RAMEN";

    const ramen1Paragraph = document.createElement('p');
    ramen1Paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipiscing elit egestas vulputate.";
    const ramen2Paragraph = document.createElement('p');
    ramen2Paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipiscing elit egestas vulputate.";
    const ramen3Paragraph = document.createElement('p');
    ramen3Paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipiscing elit egestas vulputate.";

    const ramen1H3 = document.createElement('h3');
    ramen1H3.textContent = "$15";
    const ramen2H3 = document.createElement('h3');
    ramen2H3.textContent = "$15";
    const ramen3H3 = document.createElement('h3');
    ramen3H3.textContent = "$15";

    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const ramen1 = document.createElement('div');
    const ramen2 = document.createElement('div');
    const ramen3 = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src = ramenOne;
    img1.alt = "ramen-1";
    const img2 = document.createElement('img');
    img2.src = ramenTwo;
    img2.alt = "ramen-2";
    const img3 = document.createElement('img');
    img3.src = ramenThree;
    img3.alt = "ramen-3";

    const githubDiv = document.createElement('div');
    githubDiv.classList.add('github');
    githubDiv.textContent = 'GITHUB';


    divOne.appendChild(ramen1);
    divOne.classList.add("ramenOne")
    divOne.appendChild(ramen1H2);
    divOne.appendChild(ramen1Paragraph);
    divOne.appendChild(ramen1H3);
    divTwo.appendChild(ramen2);
    divTwo.classList.add("ramenTwo")
    divTwo.appendChild(ramen2H2);
    divTwo.appendChild(ramen2Paragraph);
    divTwo.appendChild(ramen2H3);
    divThree.appendChild(ramen3);
    divThree.classList.add("ramenThree")
    divThree.appendChild(ramen3H2);
    divThree.appendChild(ramen3Paragraph);
    divThree.appendChild(ramen3H3);

    div.classList.add('menu');
    ramen1.appendChild(img1);
    ramen2.appendChild(img2);
    ramen3.appendChild(img3);
    div.appendChild(divOne);
    div.appendChild(divTwo);
    div.appendChild(divThree);
    content.appendChild(div);
    content.appendChild(logo);
    content.appendChild(menuFill);
    content.appendChild(githubDiv);
}

export { menuRender }