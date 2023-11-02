function startScanning() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner')
        },
        decoder: {
            readers: ['ean_reader']
        }
    }, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function(result) {
        displayProduct(result.codeResult.code);
    });
}

function displayProduct(productID) {
    var productListElement = document.getElementById('product-list');
    var productInfo = getProductInfo(productID);

    var productElement = document.createElement('div');
    productElement.innerHTML = `<h3>${productInfo.name}</h3><p>$${productInfo.price}</p>`;
    productListElement.appendChild(productElement);
}

function getProductInfo(productID) {
    var products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 15 }
    ];

    return products.find(product => product.id == productID);
}
