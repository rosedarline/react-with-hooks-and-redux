import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import { firebase } from "../../firebase/firebase";

const uid = "thisismynewtestuid";
let defaultAuthState = { auth: { uid } };

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    firebase.database().ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
    console.log(expensesData)
});

test("Should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("Should remove expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return firebase.database().ref(`users/${uid}/expenses/${id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test("Show setup edit expense action object", () => {
    const action = editExpense("456def", { note: "New note value" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "456def",
        updates: {
            note: "New note value"
        }
    });
});

test("Should edit expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id
    const updates = { amount: 1050 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        })
        return firebase.database().ref(`users/${uid}/expenses/${id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount)
        done();
    })
});

test("Should setup add expense action object with provided values", () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]

    });
});

test("Should add expense to the database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "Rent",
        amount: 109500,
        note: "",
        createdAt: moment(1000).valueOf()
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(string),
                ...expenseData
            }
        });
        return firebase.database().ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }).catch(done);
});

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(string),
                ...expenseDefaults
            }
        });
        return firebase.database().ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    }).catch(done);
});

test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test("should fetch the expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});