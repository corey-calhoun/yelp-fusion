import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components"
import Header from "./components/Header";
import { Home, BusinessList, BusinessDetail, Login, Register } from "./pages";


function App() {
  return (
    // wrap the whole app in a BrowserRouter to enable routing
    <BrowserRouter>
      <AppContainer>
        <Header />
      </AppContainer>

      {/* these are the page routes and the component they render */}
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/businesses/{id}" component={BusinessDetail} />
        <Route path="/businesses" component={BusinessList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App

const AppContainer = styled.div``;