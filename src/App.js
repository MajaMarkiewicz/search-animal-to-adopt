import React, { useState } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import SearchParams from './components/SearchParams'
import Details from "./components/Details"
import ThemeContext from "./components/ThemeContext"

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <React.StrictMode>
        <HashRouter>
          <Link to="/" className="logo">Adopt Me!</Link>
          <Route exact path="/" component={SearchParams}/>
          <Route path="/details/:id" component={Details} />
        </HashRouter>
      </React.StrictMode>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById("root"))
