// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import ProductListingPage from "./components/ProductListingPage";
import { ImageProvider } from "./components/ImageContext";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <ImageProvider>
        <Routes location={""}>
          <Route path="/" Component={ProductListingPage} />
        </Routes>
      </ImageProvider>
    </AppProvider>
  );
}

export default App;
