import React from "react";
import './expensedate.css'
function Expensedate(props) {

    const month = props.date.toLocaleString('en-In', { month: "long" })
    const day = props.date.toLocaleString('en-In', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div className="expensedate">
            <div className='expenseyear'>{year}</div>
            <div classname='expensemonth'>{month}</div>
            <div className='expenseday'>{day}</div>
        </div>
    )
}
export default Expensedate;