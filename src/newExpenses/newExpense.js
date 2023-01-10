import React from "react"
import './newExpense.css'
import ExpenseForm from "./expenseForm";
import { useState } from 'react'
const NewExpense = (props) => {
  const [edit ,setEdit] = useState(false);
  const saveExpenseHandle = (enterexpense) => {
    const expenseData = {
      ...enterexpense,
      id: Math.random().toString
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
      setEdit(false)
  }
  const editingg = () => {
    setEdit(true);
  }
//   const usstopEditing =()=>{
//     setEdit(false)
//   }
  return (
    <div className="new-expense">
      {!edit && <button onClick={editingg}>ADD NEW</button>}
      {/* {edit && <ExpenseForm onSaveExpense={saveExpenseHandle} onCancle={stopEditing}/>} */}
    </div>
  )
}
export default NewExpense;