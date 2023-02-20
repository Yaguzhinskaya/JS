const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const contentBox = document.createElement('div');
    const image = document.createElement('img');
    const setup = document.createElement('p');
    const punchline = document.createElement('p');
    const id = document.createElement('h1');

    image.src = element.image;
    setup.textContent = element.setup;
    punchline.textContent = element.punchline;
    id.textContent = element.id;

    content.appendChild(contentBox);
    contentBox.appendChild(id);
    contentBox.appendChild(setup);
    contentBox.appendChild(punchline);
    contentBox.appendChild(image);
});
