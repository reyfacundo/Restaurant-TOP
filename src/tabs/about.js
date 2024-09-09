import us from '../assets/chef.png'
import logoImg from '../assets/logo.png'
import fillImg from '../assets/menuFill.png'


function aboutRender() {
    const content = document.querySelector('#content');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = logoImg;
    logo.alt = "Ramen shop logo";
    const fill = document.createElement('img');
    fill.src = fillImg;
    fill.alt = "Ramen";
    fill.classList.add('fill');
    const container = document.createElement('div');
    const paragraphContainer = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = "orem ipsum dolor sit amet. Vulputate, in diam et potenti pretium orci parturient suspendisse, consequat sapien fames eleifend velit turpis, nascetur phasellus aliquam nam condimentum nullam."
    const aboutUs = document.createElement('img');
    aboutUs.src = us;
    aboutUs.alt = "About Us";
    aboutUs.classList.add('aboutImg');
    const githubDiv = document.createElement('div');
    githubDiv.classList.add('github');
    githubDiv.textContent = 'GITHUB';

    paragraphContainer.appendChild(paragraph);
    container.appendChild(paragraphContainer);
    container.appendChild(aboutUs);
    container.appendChild(fill);
    container.classList.add('aboutContainer');
    paragraphContainer.classList.add('paragraphContainer');


    content.appendChild(container);
    content.appendChild(logo);
    content.appendChild(githubDiv);
}

export { aboutRender }
