"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ImageContext_1 = require("./ImageContext");
var MyComponent = function () {
    var _a = (0, ImageContext_1.useImageContext)(), imageURL = _a.imageURL, setImage = _a.setImage; // Destructure imageURL and setImage from the context
    var handleImageChange = function (event) {
        var newImage = event.target.files[0];
        setImage(URL.createObjectURL(newImage)); // Set image URL using setImage
    };
    return (<div>
      <input type="file" onChange={handleImageChange}/>
      {imageURL && (<div>
          <h2>Preview:</h2>
          <img src={imageURL} alt="Preview"/>
        </div>)}
    </div>);
};
exports.default = MyComponent;
