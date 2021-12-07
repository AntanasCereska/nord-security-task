import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import NavigationMobile from "./components/NavigationMobile/NavigationMobile";
import HeroPage from "./pages/HeroPage";
import ExamplePage from "./pages/ExamplePage";
import NotFound404 from "./pages/NotFound404";

function App() {
  const [navigationMobile, setNavigationMobile] = useState(false);
  const [passwordsData, setPasswordsData] = useState([]);

  useEffect(() => {
    //get passwords data
    fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
      .then((response) => response.json())
      .then((data) => setPasswordsData(data.passwords))
      .catch((error) => window.alert("ERORR: couldn't load passwords data"));
  }, []);

  const toggleNavigationMobile = () => {
    setNavigationMobile(!navigationMobile);
  };

  const navigationData = [
    { title: "Features", link: "features" },
    { title: "Pricing", link: "pricing" },
    { title: "Apps", link: "apps" },
    { title: "Blog", link: "blog" },
    { title: "Help", link: "help" },
    { title: "My Account", link: "my-account" },
  ];

  return (
    <div className="App">
      <Router>
        <NavigationMobile
          navigationData={navigationData}
          toggleNavigationMobile={toggleNavigationMobile}
          navigationMobile={navigationMobile}
        /> 
        <Navigation
          navigationData={navigationData}
          toggleNavigationMobile={toggleNavigationMobile}
          navigationMobile={navigationMobile}
        />
        <Routes>
          <Route path="" element={<HeroPage passwordsData={passwordsData} />} />
          <Route path="features" element={<ExamplePage />} />
          <Route path="pricing" element={<ExamplePage />} />
          <Route path="apps" element={<ExamplePage />} />
          <Route path="blog" element={<ExamplePage />} />
          <Route path="help" element={<ExamplePage />} />
          <Route path="my-account" element={<ExamplePage />} />
          <Route path="Footer%20Pilicy" element={<ExamplePage />} />
          <Route path="Terms%20of%20Service" element={<ExamplePage />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
