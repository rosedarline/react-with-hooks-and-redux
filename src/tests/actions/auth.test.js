import { login, logout } from "../../actions/auth";

test("Should generate action login object", () => {
    const uid = "kghd12";
    const action = login(uid);
    expect(action).toEqual({
        type: "LOGIN",
        uid
    });
});

test("Should generate action logout object", () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    })
})