// function to add coupon and discount
function calulateFinalTotal(customer) {
    let refillTotal = customer.pricePerRefill * customer.refills;
    if (customer.subscription) {
        let discountAmount = refillTotal * 0.25;
        refillTotal -= discountAmount;
    }
    if (customer.coupon) {
        refillTotal -= 10;
    }
    return refillTotal;
}
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

const timmyTotal = calulateFinalTotal(timmy);
const sarahTotal = calulateFinalTotal(sarah);
const rockyTotal = calulateFinalTotal(rocky);

console.log("Timmy's final refill total: $" + timmyTotal);
console.log("Sarah's final refill total: $" + sarahTotal);
console.log("Rocky's final refill total: $" + rockyTotal);

//Calculating and logging the grand total
const grandTotal = timmyTotal + sarahTotal +rockyTotal;
console.log(`Your grand total is $${grandTotal}.`);