import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import ProductListingPage from "./components/ProductListingPage";
import { ImageProvider } from "./components/ImageContext";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState("test");

  return (
    <AppProvider i18n={enTranslations}>
      <ImageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
          </Routes>
        </Router>
      </ImageProvider>
    </AppProvider>
  );
};

export default App;
