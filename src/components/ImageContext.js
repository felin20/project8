"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ImageContext = (0, react_1.createContext)(undefined);
var ImageProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(''), imageURL = _b[0], setImageURL = _b[1];
    var setImage = function (newImage) {
        setImageURL(newImage);
    };
    return (<ImageContext.Provider value={{ imageURL: imageURL, setImage: setImage }}>
        {children}
      </ImageContext.Provider>);
};
var useImageContext = function () {
    var context = (0, react_1.useContext)(ImageContext);
    if (!context) {
        throw new Error('useImageContext must be used within an ImageProvider');
    }
    return context;
};
