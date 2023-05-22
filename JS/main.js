//Increasing order number
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);

    if (isIncreasing == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;

    }
    productInput.value = productNumber;

    //Calculating the product multiply by price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
    
};

//getting the product value
function getInputValue(product) {

    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//Calculate total product

function calculateTotal() {
    
    const phoneTotal = getInputValue('phone') * 500;
    const shoeTotal = getInputValue('shoe') * 59;
    const fanTotal = getInputValue('fan') * 200
    const bagTotal = getInputValue('bag') * 100
    const totalPrice = phoneTotal + shoeTotal + fanTotal + bagTotal;
    
    document.getElementById('total-price').innerText = totalPrice; 
}


//updating product 1 order number
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 500, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 500, false);
});





//updating product 2 order number
document.getElementById('shoe-plus').addEventListener('click', function () {
    updateProductNumber('shoe', 59, true);
});

document.getElementById('shoe-minus').addEventListener('click', function () {

    updateProductNumber('shoe', 59, false);
});



//product 3
document.getElementById('fan-plus').addEventListener('click', function () {
    updateProductNumber('fan', 200, true);
});

document.getElementById('fan-minus').addEventListener('click', function () {

    updateProductNumber('fan', 200, false);
});


//product 4
document.getElementById('bag-plus').addEventListener('click', function () {
    updateProductNumber('bag', 100, true);
});

document.getElementById('bag-minus').addEventListener('click', function () {

    updateProductNumber('bag', 100, false);
});

