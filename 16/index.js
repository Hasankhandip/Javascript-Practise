const userName = 'Dip Khan';
const income = 5000;

//Multiple Expenses
let rent =1200;
let groceries = 600;
let transpost = 200;
let entertainment = 300;

//calculate  the expense
let totatExpenses = rent + groceries + transpost + entertainment;

//Tax deduction (10% of income)
let tax = income * 0.10;

//Net income after the tax
let netIncome = income - tax;

//Calculate remaining balance
let balance = netIncome - totatExpenses;   

//Savings (20% of remaining balance)
let savings = balance * 0.20;


console.log('User : ' + userName);
console.log('Total Income : $' + income);
console.log('Total Expenses : $' + totatExpenses);
console.log('Tax Deducted (10%) : $' + tax);
console.log('Net Income After Tax : $' + netIncome);
console.log('Remaining Balance : $' + balance);
console.log('Savings (20% of balance) : $' + savings);