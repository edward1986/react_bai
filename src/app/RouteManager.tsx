import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemList from "./pages/item/ItemList"
import TodoList from "./pages/todo/TodoList"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
