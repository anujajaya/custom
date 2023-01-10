import React from 'react';
import './App.css';
import Expense from './expense';
// import NewExpense from './newExpense/newExpense';
import NewExpense from './newExpenses/newExpense';
import {useState}from 'react'

const Initial_Expenses = [
  {
    id: 1,
    date: new Date(2022, 0, 27),
    title: "Car Insurance",
    amount: 523.64
  },
  {
    id: 2,
    date: new Date(2022, 1, 26),
    title: "bike ",
    amount: 623.01
  },
  {
    id: 3,
    date: new Date(2022, 2, 25),
    title: "Lap top",
    amount: 25.89
  },
  {
    id: 4,
    date: new Date(2022, 3, 24),
    title: "phone",
    amount: 20.24
  }
]
function App() {
  const[expenses,setExpenses]=useState(Initial_Expenses)

  const addExpenseHandle = expense => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]

    });

  } 
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expense items={expenses} />


      {/* <Expense title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
      <Expense title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
      <Expense title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
      <Expense title={expense[3].title} amount={expense[3].amount} date={expense[3].date}/> */}


      {/* <Expense objexpense={expense[0]}/>
          <Expense objexpense={expense[1]}/>
          <Expense objexpense={expense[2]}/>
          <Expense objexpense={expense[3]}/> */}

    </div>
  );
}

export default App;
