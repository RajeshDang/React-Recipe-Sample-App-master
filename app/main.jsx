import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import {Provider} from "react-redux";
import Root from "./container/Root.jsx";
import store from "./stores/store";
render(<Provider store={store}>
			<Router history={browserHistory}>
				<Route path={"/"} component={Root} >

				</Route>
			</Router>
		</Provider> ,
    window.document.getElementById("container"));