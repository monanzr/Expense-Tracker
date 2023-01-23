import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpensePrice from "./ExpensePrice";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title] = useState(props.title)
  // const clickHandler = () => {
  //   setTitle("Updated!!!")
  //   console.log(title)
  //   // setTimeout(() => {
  //   //   setTitle(title)
  //   // }, 300)
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpensePrice amount={props.amount}/>
      </div>
      {/* <button onClick={clickHandler}>Click Me</button> */}
    </Card>
  );
}

export default ExpenseItem;
