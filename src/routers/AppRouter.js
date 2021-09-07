import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LonginPage";


function AppRouter () {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <Route path="/dashboard" component={ExpenseDashBoardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
    )
}

export default AppRouter;