import authReducer from "../../reducers/auth";

test("Should set uid for login", () => { 
    const action = {
        type: "LOGIN",
        uid: "dkfkf23"
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid)
});

test("Should clear uid for logout", () => { 
    const action = {
        type: "LOGOUT",
     
    }
    const state = authReducer({uid: "lol"}, action);
    expect(state).toEqual({});
});
