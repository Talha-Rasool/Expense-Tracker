import { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){

    const[isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);

    };
    function startEditingHandler(){
        setIsEditing(true);
    };

    function stopEditingHandler(){
        setIsEditing(false);
    }


    return <div className="new-expense">
    {!isEditing &&<button onClick={startEditingHandler}>Add New Expenses</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        
    </div>

};