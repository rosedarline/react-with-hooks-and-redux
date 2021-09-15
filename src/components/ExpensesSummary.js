import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export function ExpensesSummary({ expenseCount, expensesTotal }) {
    const expenseMessage = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0,0.00");
    return (
        <div className="page-header">
            <div className="content-container">
                <h1>
                    Viewing {expenseCount} {expenseMessage} totalling {formattedExpenseTotal}
                </h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);