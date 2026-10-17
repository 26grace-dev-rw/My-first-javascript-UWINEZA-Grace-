// Starlight Shop
// Customer Order Receipt
const businessName = "Starlight Shop"; 
const customerName = "UWINEZA";
const product = "Notebook";
const unitPrice = 1500;
const quantity = 4;
const deliveryFee = 1000
// Calculte the order cost
const subtotal = unitPrice * quantity;
const totalCost = subtotal + deliveryFee;
// Display the receipt
console.log(`  ${businessName}`);
console.log(`CUSTOMER RECEIPT`);
console.log(`Customer Name: ${customerName}`);
console.log(`Product: ${product}`);
console.log(`Unit Price: ${unitPrice} RWF`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: ${subtotal} RWF`);
console.log(`Delivery Fee: ${deliveryFee} RWF`);
console.log(`TOTAL COST: ${totalCost} RWF`);
console.log("Thank you for shopping with us!");


















