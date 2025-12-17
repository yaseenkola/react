import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import CourseList from "./components/CourseList";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Contact from "./components/Contact";
import EmployeeList from "./components/EmployeeList";
import AssignmentUserList from "./components/AssignmentUserList";
import ProductList from "./components/ProductList";
import RecipeList from "./components/RecipeList";
import RecipeSearch from "./components/RecipeSearch";
import RecipeGallery from "./components/RecipeGallery";
import ProductSearch from "./components/ProductSearch";
import CourseList4 from "./components/CourseList4";
import CourseAdd from "./components/CourseAdd";
import CourseEdit from "./components/CourseEdit";
import CustomerList from "./components/CustomerList";
import CustomerAdd from "./components/CustomerAdd";
import CustomerEdit from "./components/CustomerEdit";

import { ThemeContext, type Theme } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div
          className={`container my-3 min-vh-100 ${
            theme === "light" ? "bg-light" : "bg-dark"
          }`}
        >
          <h1 className={theme === "light" ? "text-dark" : "text-light"}>
            My React Application
          </h1>

          <nav
            className={`navbar navbar-expand-lg ${
              theme === "light"
                ? "navbar-light bg-body-tertiary"
                : "navbar-dark bg-secondary"
            }`}
          >
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                FLA
              </Link>

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

              {/* Multi-row navbar */}
              <div className="collapse navbar-collapse flex-wrap" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">Courses</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary ms-2"
                          : "btn btn-outline-primary ms-2"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employees">Employee List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ausers">User List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Product List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/search">Product Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipes">Recipe List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipes/search">Recipe Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipes/gallery">Recipe Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses/list">Course List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-course">Add Course</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/customers/list">Customer List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/customers/add">Add Customer</Link>
                  </li>
                </ul>

                {/* Theme Toggle Button */}
                <button className="btn btn-warning ms-2 mb-2" onClick={toggleTheme}>
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
              </div>
            </div>
          </nav>

          <main className="mt-3">
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
              <Route path="/products/search" element={<ProductSearch />} />
              <Route path="/recipes" element={<RecipeList />} />
              <Route path="/recipes/search" element={<RecipeSearch />} />
              <Route path="/recipes/gallery" element={<RecipeGallery />} />
              <Route path="/courses/list" element={<CourseList4 />} />
              <Route path="/add-course" element={<CourseAdd />} />
              <Route path="/edit-course/:id" element={<CourseEdit />} />
              <Route path="/customers/list" element={<CustomerList />} />
              <Route path="/customers/add" element={<CustomerAdd />} />
              <Route path="/customers/edit/:id" element={<CustomerEdit />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
