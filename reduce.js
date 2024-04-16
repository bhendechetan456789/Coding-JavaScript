const purchases = [
    { item: "Shoes", price: 89.99 },
    { item: "Headphones", price: 49.99 },
    { item: "Backpack", price: 39.99 },
    { item: "Sunglasses", price: 29.99 }
];

function calculateTotalSpent(purchases) {
    const totalSpent = purchases.reduce((total, purchase) => total + purchase.price, 0);
    return totalSpent;
}

const totalAmountSpent = calculateTotalSpent(purchases);

console.log(totalAmountSpent);