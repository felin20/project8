"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// App.js
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var polaris_1 = require("@shopify/polaris");
var en_json_1 = require("@shopify/polaris/locales/en.json");
var ProductListingPage_1 = require("./components/ProductListingPage");
var ImageContext_1 = require("./components/ImageContext");
function App() {
    return (<polaris_1.AppProvider i18n={en_json_1.default}>
      <ImageContext_1.ImageProvider>
        <react_router_dom_1.Routes location={""}>
          <react_router_dom_1.Route path="/" Component={ProductListingPage_1.default}/>
        </react_router_dom_1.Routes>
      </ImageContext_1.ImageProvider>
    </polaris_1.AppProvider>);
}
export default App;
