import React from "react"
import './expenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleHanldeCHange = (event) => {
        setEnterTitle(event.target.value)
    }
    const amountHandleChange = (event) => {
        setEnterAmount(event.target.value)
    }
    const dateHandleChange = (event) => {
        setEnterDate(event.target.value)
    }
    const submitHandleChange = (event) => {
        event.preventDefault();

        const expensesData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        console.log(expensesData)
        props.onSaveExpense(expensesData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }
    return (
        <form onSubmit={submitHandleChange}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                        // two way binding
                        value={enterTitle}
                        onChange={titleHanldeCHange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'
                        // two way binding
                        value={enterAmount}
                        onChange={amountHandleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2022-01-01' max='2022-12-30'
                        // two way binding
                        value={enterDate}
                        onChangeCapture={dateHandleChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancle}>Cancle</button>
                <button type="submit">Submmit</button>
            </div>
        </form>
    )
}
export default ExpenseForm;