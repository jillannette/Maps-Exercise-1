var budgets = [
  { title: "Rent", amount: 1200 },
  { title: "Groceries", amount: 300 },
  { title: "Phone", amount: 50 },
  { title: "Gas", amount: 200 },
  { title: "Internet", amount: 45 },
];

var expenses = budgets.map(function (budget) {
  return budget.title + " (" + budget.amount + ")";
});
console.log(expenses);
