import React from "react";
import './expenseItem.css'
import Expensedate from "./expensedate";
import Card from "./card";
import {useState} from 'react';

function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title)
    const handlechang=()=>{
        setTitle('clicked')
        console.log('hgghghv')
    }
    return (
        

            <Card className="expenseItem">
                <div>
                    <Expensedate date={props.date} />

                </div>
                <div className="expenseitem">
                    <h2 className="m">{title}</h2>
                    {/* {<h2>{data.title}</h2>} */}
                    <div className="expense-item__price">${props.amount}</div>
                    <button onClick={handlechang}>clickME</button>
                </div>
            </Card>
        
    )
}
export default ExpenseItem;