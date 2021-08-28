import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import firebase from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("Should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc"})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("Show setup edit expense action object", () => {
    const action = editExpense("456def", {note: "New note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "456def", 
        updates: {
            note: "New note value"
        }
    });
});

test("Should setup add expense action object with provided values", () => {
   
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]

    });
});

test("Should add expense to the database and store", (done) => {
    const store = createMockStore({});
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
     return firebase.database().ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      }).catch(done);
});

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
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
              ... expenseDefaults
          }
      });
     return firebase.database().ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual( expenseDefaults);
        done();
      }).catch(done);
});

// test("Should setup add expense action object with default values", () => {
    
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }
        
//     });
// });