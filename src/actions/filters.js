// SET_TEXT_FILTER
export function setTextFilter( text = "") {
    return {
        type: "SET_TEXT_FILTER",
        text
    }
};
// SORT_BY_DATE
export function sortByDate() {
    return {
        type: "SORT_BY_DATE",
    }
};
// SORT_BY_AMOUNT
export function sortByAmount() {
    return {
        type: "SORT_BY_AMOUNT",
    }
};
// SET-START-DATE
export function setStartDate(startDate) {
    return {
        type: "SET_START_DATE",
        startDate
    }
};
// SET_END_DATE
export function setEndDate(endDate) {
    return {
        type: "SET_END_DATE",
        endDate
    }
};
