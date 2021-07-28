import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";


function ExpenseDashBoardPage () {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};


export default ExpenseDashBoardPage;