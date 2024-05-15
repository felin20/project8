import React from "react";
import { Modal } from "@shopify/polaris";

// Import the Product type
interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  description: string; // Optional description
  rating: { rate: number; count: number }; // Optional rating
}
interface newProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  description: string; // Optional description
  rating: { rate: number; count: number }; // Optional rating
}
interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddProduct: (newProduct: Product) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose, onAddProduct }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add Product"
      primaryAction={{
        content: "Add",
        onAction: () => {
          // Define your add product logic here
          // For example:
          const newProduct: Product = {
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
      }}
    >
      {/* Add your form fields here */}
      {/* Example: */}
      {/* <input type="text" placeholder="Title" />
      <input type="text" placeholder="Price" />
      <input type="text" placeholder="Category" />
      <input type="text" placeholder="Image URL" /> */}
    </Modal>
  );
};

export default AddProductModal;
