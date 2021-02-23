import React,{useState} from 'react';
import {render} from 'react-dom'
import {Router, Link} from "@reach/router"
import SearchParams from "./SearchParams"
import Details from "./Details"
import ThemeContext from "./ThemeContext"


const App = () => {
//   return React.createElement("div", { id: "something-important" }, [
//     React.createElement("h1", {}, "Adopt Me !"),import ThemeContext from './ThemeContext';

//     React.createElement(Pet, { name: "hello", animal: "Cat", breed: "Bus" }),
//     React.createElement(Pet, { name: "hello", animal: "Cat", breed: "Bus" }),
//     React.createElement(Pet, { name: "hello", animal: "Cat", breed: "Bus" }),
//   ]);
const themeHook = useState("darkblue");
return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
);
};
render(<App/>, document.getElementById("root"));
