function calculateTotal(price, tax) {
    return price + tax;
}

function printTotal() {
    let total = calculateTotal(100, 20);

    console.log("Total Price:", total);
}

printTotal();