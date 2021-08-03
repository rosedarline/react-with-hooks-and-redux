import React from "react";
import { shallow } from "enzyme";
import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage";

test("Should render ExpenseDashBoard correctly", () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});