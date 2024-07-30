import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filteredInfoText = "2019, 2021, 2022";

  if (filteredYear === "2019") {
    filteredInfoText = "2020, 2021, 2022";
  } else if (filteredYear === "2021") {
    filteredInfoText = "2019, 2020, 2022";
  } else {
    filteredInfoText = "2019, 2020, 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler} />
      <p>Data for years {filteredInfoText} is hidden.</p>
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
