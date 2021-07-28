import uuid from "uuid";
// ADD_EXPENSE
export function addExpense(
    { 
        description = "",
        note = "", 
        amount = 0,
        createdAt = 0     
    } = {}) {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

export function removeExpense({ id } = {}) {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

// EDIT_EXPENSE
export function editExpense(id, updates) {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
};