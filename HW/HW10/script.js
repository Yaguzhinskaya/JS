const data = JSON.parse(divo);
const content = document.querySelector('.content');

data.forEach(element => {
    const contentBox = document.createElement('div');
    const gender = document.createElement('h4');
    const inName = document.createElement('h1');
    const ip = document.createElement('p');
    const city = document.createElement('p');
    const readme = document.createElement('a');


    ip.textContent = element.ip;
    gender.textContent = element.gender;
    city.textContent = element.city;
    readme.a = element.readme;

    content.appendChild(contentBox);
    contentBox.appendChild(inName);
    contentBox.appendChild(gender);
    contentBox.appendChild(city);
    contentBox.appendChild(ip);
    contentBox.appendChild(readme);

});


// const emet = document.querySelector('.emet');

// data.forEach(element => {

// });









// const data = JSON.parse(dataInfo);

// const content = document.querySelector('.content');

// data.forEach(element => {
//     const contentBox = document.createElement('div');
//     const image = document.createElement('img');
//     const setup = document.createElement('p');
//     const punchline = document.createElement('p');
//     const id = document.createElement('h1');

//     image.src = element.image;
//     setup.textContent = element.setup;
//     punchline.textContent = element.punchline;
//     id.textContent = element.id;

//     content.appendChild(contentBox);
//     contentBox.appendChild(id);
//     contentBox.appendChild(setup);
//     contentBox.appendChild(punchline);
//     contentBox.appendChild(image);
// });
