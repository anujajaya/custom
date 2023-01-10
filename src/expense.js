import React from "react";
import { useState } from 'react'
import './expense.css'
import ExpenseFilter from "./expenseFilter";
import ExpenseItem from "./expenseItem";
function Expense(props) {
    //   const data=props.objexpense

    // const expensedate = new Date("26 may 2022")
    // const expensetitle = "Car Insurance"
    // const expenseAmount = 540.66

    const [filterYear, setFilterYYear] = useState('2022')
    const finterChangeH = (selectedYear) => {
        setFilterYYear(selectedYear); 
    }
    const filterExpenses = props.items.filter(expe => {
        return expe.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            <div className="expense">
                <ExpenseFilter selected={filterYear} onChangeFilter={finterChangeH} />
                 
                {/* {filterExpenses.length===0 ? <p>No expenses found.</p>:(
                    filterExpenses.map((expenses, index) => (
                        <ExpenseItem
                            key={expenses.id}
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date} />))
                )} */}
                {filterExpenses.length===0 && <p>NO expenses found</p>}
                {filterExpenses.length>0 && 
                  filterExpenses.map((expenses, index) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date} />))
                }
                

                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}

            </div>
        </div>

    )
}
export default Expense








