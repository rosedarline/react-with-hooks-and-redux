import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Shoule setup default filter value", () => {
    const state = filtersReducer(undefined, { type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("Shout set sortBy to amount", () =>{
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    };
    const action = { type: "SORT_BY_DATE"};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
})

test("Should set text filter", () => {
    const text = "This is the text filter";
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text });
    expect(state.text).toBe(text);
})

test("Should set startDate filter", () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate });
    expect(state.startDate).toEqual(startDate);
})

test("Should set endDate filter", () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate });
    expect(state.endDate).toEqual(endDate);
})