import React, { Component } from "react";
import { GlobalStyles } from "../../globalStyles";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Notes from "../../Route/Notes"
import Note from "../../Route/Note"
import Add from "../../Route/Add"
import Edit from "../../Route/Edit"


class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={Notes} />
        <Route path={"/add"} component={Add} />
        <Route path={"/note/:id"} component={Note} />
        <Route path={"/edit/:id"} component={Edit} />
      </Switch>
      </BrowserRouter>
      
      <GlobalStyles />
      </>
    )
  }
}

export default App;