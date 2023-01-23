import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    const filterDate = props.items.filter(el => {return el.date.getFullYear().toString() === filteredYear})

    // Outputing conditional content
    let expensesContent = <h2 className='expenses__fallback'>No Expenses Found.</h2>
    if(filterDate.length > 0) {
      // rendering list of data
      expensesContent = filterDate.map(expense => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
    }

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
          <ExpensesChart expenses={filterDate} />
          {expensesContent}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>         */}
      </Card>
    )
}

export default Expense;