import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h2>Aktualności</h2>;
const Contact = () => <h2>Kontakt do nas</h2>;

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="home_selected">
                  Start
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName="news_selected">
                  Aktualności
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="contact_selected">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </section>
      </div>
    </Router>
  );
}

export default App;
