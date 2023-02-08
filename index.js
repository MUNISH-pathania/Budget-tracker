let budgetCost = document.getElementById("budget-cost");
let expenseName = document.getElementById("expense-name");
let expenseCost = document.getElementById("expense-cost");
let budgetBtn = document.getElementById("budget-btn");
let amountBtn = document.getElementById("amount-btn");
let totalAmount = document.getElementById("budget-amount");
let expenses = document.getElementById("expenses-amount");
let balance = document.getElementById("balance-amount");
let listId = document.getElementById("list-id");
let budgetValue = 0;

//function to set the budget.
budgetBtn.addEventListener("click", () => {
  budgetValue = budgetCost.value;
  if (budgetValue === "" || budgetValue < 0) {
    alert("Invalid budget");
  } else {
    totalAmount.innerHTML = budgetValue;
    balance.innerHTML = budgetValue;
  }
  budgetCost.value = "";
});

// funtion to make expention list
const listCreator = (exName, expValue) => {
  let name = document.createElement("div");
  name.classList.add("list-span");

  listId.appendChild(name);
  name.innerHTML = `<p class="product">${exName}</p>
       <p  class="amount">${expValue}</p>`;
  let btn1 = document.createElement("button");
  btn1.classList.add("fa-solid", "fa-pen-to-square","edit");
  btn1.style.fontSize = "24px";

  let btn2 = document.createElement("button");
  btn2.classList.add("fa-solid", "fa-trash-can","del");
  btn1.style.fontSize = "24px";
    // edit button
  
    let amount = document.querySelector(".amount").innerHTML;
    let currentBalance = balance.innerText;
 
    btn1.addEventListener("click", () => {
        let nameTxt = document.querySelector(".product").innerHTML;
     expenseName.value = nameTxt;
     expenseCost.value = amount;

     
let currentExp = expenses.innerHTML;
balance.innerHTML = parseInt(currentBalance) +parseInt(amount);
expenses.innerHTML  = parseInt(currentExp) - parseInt(amount);

     name.remove();
    });

  // delete button 
  btn2.addEventListener("click", () => {
   

let currentExp = expenses.innerHTML;
    balance.innerHTML = parseInt(currentBalance) +parseInt(amount);
    expenses.innerHTML  = parseInt(currentExp) - parseInt(amount);
    name.remove();
  });

  name.appendChild(btn1);
  name.appendChild(btn2);
};

//funtion to calculate balance and expence
amountBtn.addEventListener("click", () => {
  //value can't be empty.
  if (!expenseName.value || !expenseName.value) {
    alert("can't be empty");
  } else {
    //expense
    let expenditure = parseInt(expenseCost.value);
    let sum = parseInt(expenses.innerHTML) + expenditure;
    expenses.innerHTML = sum;
    // remaing balance
    const totalBalance = budgetValue - sum;
    balance.innerHTML = totalBalance;

    // populating list
    listCreator(expenseName.value, expenseCost.value);
    expenseName.value = "";
    expenseCost.value = "";
  }
});