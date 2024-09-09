import bgImg from "../assets/bg.jpg"

function mainContentRender() {
    const content = document.querySelector('#content');
    const divBg = document.createElement('div');
    const img = document.createElement('img');
    img.src = bgImg;
    img.alt = "bg-image";
    divBg.classList.add('bg');
    divBg.appendChild(img);

    const githubDiv = document.createElement('div');
    githubDiv.classList.add('github');
    githubDiv.textContent = 'GITHUB';

    content.appendChild(divBg);
    content.appendChild(githubDiv);
}

export {mainContentRender}