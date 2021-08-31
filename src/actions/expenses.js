import uuid from "uuid";
import { firebase } from "../firebase/firebase"

// ADD_EXPENSE
export function addExpense (expense) {
    return {
        type: "ADD_EXPENSE",
        expense
    }
    
};

export function startAddExpense (expenseData = {}) {
    return (dispatch) => {
        const {
            description = "",
            note = "", 
            amount = 0,
            createdAt = 0     
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return firebase.database().ref("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export function removeExpense({ id } = {}) {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

export function startRemoveExpense({ id } = {}) {
    return (dispatch) => {
        return firebase.database().ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }    
}

// EDIT_EXPENSE
export function editExpense(id, updates) {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
};

export function startEditExpense({ id, updates }) {
    return (dispatch) => {
        return firebase.database().ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense({ id, updates}));
        });
    }
};

// SET_EXPENSES
export function setExpenses (expenses) {
    return {
        type: "SET_EXPENSES",
        expenses
    }
};

export function startSetExpenses () {
    return (dispatch) => {
        return firebase.database().ref("expenses").once("value").then((snapshot) => {
            const expenses = []

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        })
    }
}