// load all products from http://localhost:3000/api/products  api

fetch('https://murmuring-basin-08429.herokuapp.com/api/products')
    .then(response => {
        response.json().then(data => {
            console.log(data);
            let productHTML ='';
            // pull and tag the product
            productInformation = document.getElementById('items');

            // loop through array with product information
            data.forEach(product =>{
                productHTML +=`
                <a href="./product.html?id=${product._id}">
                <article>
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                  <h4 class="productName">${product.name}</h4>
                  <p class="productDescription">${product.description}</p>
                </article>
              </a>
                `;

            });
           productInformation.innerHTML = productHTML;
       
        })
    })
