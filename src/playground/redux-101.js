import { createStore } from "redux";

// Action generators - functions that return action objects

function incrementCount({ incrementBy = 1 } = {}) {
    return {
        type: "INCREMENT", 
        incrementBy
    }
};

function decrementCount({decrementBy = 1 } = {}) {
    return {
        type: "DECREMENT",
        decrementBy
    }
};

function setCount({ count }) {
    return {
        type: "SET",
        count
    }
};

function resetCount() {
   return {
    type: "RESET"
    
   }
}

// Reducer
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            }; 
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})



// action is an object that gets sent to the store.
// Actios allow us to change the redux store value.

//  I'd like to increment the count
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));




