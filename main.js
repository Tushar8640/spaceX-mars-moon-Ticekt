

function plusMinus(isAdd ,where,price) {

    const marsInput = document.getElementById(where +'-display');
    const marsPrice = document.getElementById(where +'-price');
    

    let marsInputNumber = parseInt(marsInput.value)
    if (isAdd == true) {
        marsInputNumber = marsInputNumber + 1;
        marsPrice.innerText = marsInputNumber * price;
    } else if (marsInputNumber > 0) {
        marsInputNumber = marsInputNumber - 1;
        marsPrice.innerText = marsInputNumber * price;
    }
    marsInput.value = marsInputNumber
    updateTotal()
}

// update total price 

function updateTotal(){
    const totalPrice = document.getElementById('total-price')
    const marsPrice = document.getElementById('mars-display').value
    const moonPrice = document.getElementById('moon-display').value
    const marsTotalPrice = parseFloat(marsPrice)*1000;
    const moonTotalPrice = parseFloat(moonPrice)*500;
    totalPrice.innerText = marsTotalPrice  + moonTotalPrice;
}


// journey to mars 
// mars plus button event handler
document.getElementById('mars-plus').addEventListener('click', function () {
    plusMinus(true,'mars',1000)
})

// mars minus button event handler
document.getElementById('mars-minus').addEventListener('click', function () {
    plusMinus(false,'mars',1000)
})


// journey to moon 
// moon plus button event handler
document.getElementById('moon-plus').addEventListener('click', function () {
    plusMinus(true,'moon',500)
})
// moon minus button event handler
document.getElementById('moon-minus').addEventListener('click', function () {
    plusMinus(false,'moon',500)
})