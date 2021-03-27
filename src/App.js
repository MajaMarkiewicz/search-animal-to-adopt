import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import SearchParams from './components/SearchParams'
import Details from "./components/Details";

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <div>
          <h1 className="logo">Adopt Me!</h1>
            <Route exact path="/" component={SearchParams}/>
            <Route path="/details" component={Details} />
        </div>
      </HashRouter>
    </React.StrictMode>
  )

}
render(React.createElement(App), document.getElementById("root"))
