const goodsInfo = JSON.parse(goods)

const content = document.querySelector('.content')

goodsInfo.forEach(element => {
    const id = document.createElement("div")
    const img = document.createElement('img')
    const name = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")

    img.src = element.img;
    name.textContent = element.name;
    description.textContent = element.description;
    price.textContent = element.price;

    content.appendChild(id)
    id.appendChild(img)
    id.appendChild(name)
    id.appendChild(description)
    id.appendChild(price)
});