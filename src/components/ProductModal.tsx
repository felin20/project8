import React from "react";
import { Modal, TextContainer, Card, Thumbnail } from "@shopify/polaris";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
  image: string;
}

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  productId: number | null; // Make productId nullable
  products: Product[]; // Add products prop
}

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  productId,
  products,
}) => {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <Modal open={open} onClose={onClose} title="Product Not Found">
        <Modal.Section>
          <p>No product found with the specified ID.</p>
        </Modal.Section>
      </Modal>
    );
  }

  const { image, description, price, category, rating, id } = product;

  // Check if rating is defined before accessing rate and count
  const { rate, count } = rating || {};

  return (
    <Modal open={open} onClose={onClose} title={product.title}>
      <Modal.Section>
        <Card>
          <div
            className="text6"
            style={{
              width: "300px",
              height: "300px",
              position: "relative",
              left: "130px",
            }}
          >
            <Thumbnail
              source={image}
              alt={product.title}
              size="large" // Changed from x-large to large
            />
          </div>
          <TextContainer>
            <p
              style={{
                fontWeight: "500",
                fontSize: "20px",
                position: "relative",
                top: "5px",
              }}
            >
              {description}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            {rate && (
              <p>
                <strong>Rate:</strong> {rate}
              </p>
            )}
            {count && (
              <p>
                <strong>Count:</strong> {count}
              </p>
            )}
            <p>{/* <Badge>{id}</Badge> */}</p>
          </TextContainer>
        </Card>
      </Modal.Section>
    </Modal>
  );
};

export default ProductModal;
