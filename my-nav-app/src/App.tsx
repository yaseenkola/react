import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CourseList from "./components/CourseList";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Contact from "./components/Contact";
import { NavLink } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AssignmentUserList from "./components/AssignmentUserList";
import ProductList from "./components/ProductList";
import RecipeList from "./components/RecipeList";
import RecipeSearch from "./components/RecipeSearch";
import RecipeGallery from "./components/RecipeGallery";
import ProductSearch from "./components/ProductSearch";

function App() {
  return (
    <Router>
      <div className="container my-3">
        <h1>My React Application</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              FLA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/users"
                  >
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/about">
                    About
                  </Link> */}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "btn btn-primary" : "btn btn-outline-primary"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employees">
                    Employee List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ausers">
                    User List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Product List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes">
                    Recipe List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes/search">
                    Recipe Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes/gallery">
                    Recipe Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products/search">
                    Product Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/ausers" element={<AssignmentUserList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/search" element={<RecipeSearch />} />
            <Route path="/recipes/gallery" element={<RecipeGallery />} />
            <Route path="/products/search" element={<ProductSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
