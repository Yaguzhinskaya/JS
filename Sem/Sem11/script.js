const data = JSON.parse(dataProducts);

const contentBox = document.querySelector('.contentBox');

data.forEach(element => {
    const box = document.createElement('div');
    const img = document.createElement('img');
    const productsInfo = document.createElement('div');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    const color = document.createElement('p');
    const size = document.createElement('p');
    const quantity = document.createElement('p');

    img.src = element.img;
    name.textContent = element.name;
    price.textContent = "Price: " + element.price;
    color.textContent = "Color: " + element.color;
    size.textContent = "Size: " + element.size;
    quantity.textContent = "Quantitu: " + element.quantity;

    box.style.display = 'flex';
    box.style.gap = '32px';
    box.style.margin = '16px';
    box.style.boxShadow = '8px 8px 10px grey';
    name.style.marginBottom = '42px';
    name.style.width = '200px';


    contentBox.appendChild(box);
    box.appendChild(img);
    box.appendChild(productsInfo)
    productsInfo.appendChild(name);
    productsInfo.appendChild(price);
    productsInfo.appendChild(color);
    productsInfo.appendChild(size);
    productsInfo.appendChild(quantity);

});
