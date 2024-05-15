"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var polaris_1 = require("@shopify/polaris");
var ProductModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, productId = _a.productId, products = _a.products;
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) {
        return (<polaris_1.Modal open={open} onClose={onClose} title="Product Not Found">
        <polaris_1.Modal.Section>
          <p>No product found with the specified ID.</p>
        </polaris_1.Modal.Section>
      </polaris_1.Modal>);
    }
    var image = product.image, description = product.description, price = product.price, category = product.category, rating = product.rating, id = product.id;
    // Check if rating is defined before accessing rate and count
    var _b = rating || {}, rate = _b.rate, count = _b.count;
    return (<polaris_1.Modal open={open} onClose={onClose} title={product.title}>
      <polaris_1.Modal.Section>
        <polaris_1.Card>
          <div className="text6" style={{
            width: "300px",
            height: "300px",
            position: "relative",
            left: "130px",
        }}>
            <polaris_1.Thumbnail source={image} alt={product.title} size="large" // Changed from x-large to large
    />
          </div>
          <polaris_1.TextContainer>
            <p style={{
            fontWeight: "500",
            fontSize: "20px",
            position: "relative",
            top: "5px",
        }}>
              {description}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            {rate && (<p>
                <strong>Rate:</strong> {rate}
              </p>)}
            {count && (<p>
                <strong>Count:</strong> {count}
              </p>)}
            <p>{/* <Badge>{id}</Badge> */}</p>
          </polaris_1.TextContainer>
        </polaris_1.Card>
      </polaris_1.Modal.Section>
    </polaris_1.Modal>);
};
export default ProductModal;
