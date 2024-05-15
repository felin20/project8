"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var polaris_1 = require("@shopify/polaris");
var AddProductModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, onAddProduct = _a.onAddProduct;
    return (<polaris_1.Modal open={open} onClose={onClose} title="Add Product" primaryAction={{
            content: "Add",
            onAction: function () {
                // Define your add product logic here
                // For example:
                var newProduct = {
                    id: 1,
                    title: "New Product",
                    price: "10.00",
                    category: "Electronics",
                    image: "",
                    description: "",
                    rating: {
                        rate: 0,
                        count: 0
                    }
                };
                onAddProduct(newProduct);
                onClose();
            },
        }}>
      {/* Add your form fields here */}
      {/* Example: */}
      {/* <input type="text" placeholder="Title" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Image URL" /> */}
    </polaris_1.Modal>);
};
export default AddProductModal;
