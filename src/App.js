import { ThemeProvider } from "styled-components";
import gloabalTheme from "./Theme/global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home.page";
function App() {
  return (
    <>
      <ThemeProvider theme={gloabalTheme}>
        <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
