import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import SearchParams from './components/SearchParams'
import Details from "./components/Details";

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <div>
          <Link to="/" className="logo">Adopt Me!</Link>
          <Route exact path="/" component={SearchParams}/>
          <Route path="/details/:id" component={Details} />
        </div>
      </HashRouter>
    </React.StrictMode>
  )

}
render(React.createElement(App), document.getElementById("root"))
