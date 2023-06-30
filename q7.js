// Q.7 Please explain the following code dealing with React- Router 
// How is this useful? 


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

//App component as the entry point and wraps the app with BrowserRouter
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Route components each corresponding to a specific URL path 
        parent Route component(path = "/") wraps the Layout component wich is rendered for all routes*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Create a root instance and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* React Router simplifies routing in React apps, which enables declarative definition of routes and 
associated components. Facilitates seamless navigation without page reloads, and improves user experience*/

