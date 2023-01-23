import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setMyBool(false)
    }

    // replace components
    const [myBool, setMyBool] = useState(false)

    const startEditingHandler = () => {
        setMyBool(true)
    }

    const stopEditingHandler = () => {
        setMyBool(false)
    }
    return <div className='new-expense'>
        {!myBool ? <button onClick={startEditingHandler}>Add New Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
}

export default NewExpense;