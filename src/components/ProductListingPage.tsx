import React, { ReactNode, useState, useEffect } from "react";
import {
  Page,
  Card,
  DataTable,
  TextField,
  ChoiceList,
  Banner,
  EmptyState,
  Button,
  Pagination,
  Filters,
} from "@shopify/polaris";
import emptyStateImage from "./empty-state-image.png";
import ProductModal from "./ProductModal";
import AddProductModal from "./AddProductModal";
import { AdjustIcon } from "@shopify/polaris-icons";

// Define Product type
interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  description: string;
  rating: { rate: number; count: number };
}
interface MediaQueryProviderProps {
  children: ReactNode;
}
const MediaQueryProvider: React.FC<MediaQueryProviderProps> = (props) => {
  return <div>{props.children}</div>;
};

enum BannerStatus {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Critical = "critical",
}

type BannerProps = {
  status: BannerStatus;
  children: React.ReactNode;
};

function ProductListingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterValue, setFilterValue] = useState<string>("");
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [addProductModalOpen, setAddProductModalOpen] =
    useState<boolean>(false);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleRowClick = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handlePriceRangeChange = (selected: string[]) => {
    setPriceRangeFilter(selected[0]);
  };

  const handleCategoryChange = (selected: string[]) => {
    setCategoryFilter(selected[0].toLowerCase());
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value.toLowerCase());
  };

  const clearFilters = () => {
    setFilterValue("");
    setPriceRangeFilter("");
    setCategoryFilter("");
  };

  const handleAddProduct = (newProduct: Product) => {
    const updatedProducts = products.map((product) => ({
      ...product,
      id: product.id + 1,
    }));
    setProducts([
      {
        ...newProduct,
        id: 1,
      },
      ...updatedProducts,
    ]);
  };

  const filteredProducts = products.filter((product) => {
    const filterTitle = product.title.toLowerCase().includes(filterValue);
    const filterPrice =
      priceRangeFilter === "" ||
      (parseFloat(product.price) >=
        parseFloat(priceRangeFilter.split(" - ")[0]) &&
        parseFloat(product.price) <=
          parseFloat(priceRangeFilter.split(" - ")[1]));
    const filterCategory =
      categoryFilter === "" ||
      product.category.toLowerCase() === categoryFilter;
    return filterTitle && filterPrice && filterCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const priceFilterOptions = [
    { label: "Any", value: "" },
    { label: "$0 - $100", value: "0 - 100" },
    { label: "$100 - $200", value: "100 - 200" },
    { label: "$200 - $1000", value: "200 - 1000" },
  ];

  const categoryFilterOptions = [
    { label: "Any", value: "" },
    { label: "Electronics", value: "electronics" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
  ];

  const appliedFilters: { key: string; label: string; onRemove: () => void }[] =
    [];
  if (priceRangeFilter !== "") {
    appliedFilters.push({
      key: "priceRange",
      label: `Price Range: ${priceRangeFilter}`,
      onRemove: () => setPriceRangeFilter(""),
    });
  }
  if (categoryFilter !== "") {
    appliedFilters.push({
      key: "category",
      label: `Category: ${categoryFilter}`,
      onRemove: () => setCategoryFilter(""),
    });
  }

  const closeModal = () => {
    setSelectedProduct;
    setModalOpen(false);
  };

  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <MediaQueryProvider>
      <Page title="Product Listing">
        <Card>
          <div className="top-section">
            <div className="filter-section">
              <div className="filter-input" style={{ marginLeft: "-40px" }}>
                <TextField
                  label="Filter by Product Title"
                  value={filterValue}
                  onChange={handleFilterChange}
                  placeholder="Enter product title"
                  autoComplete="off"
                />
              </div>
              <div
                className="add-product-button"
                style={{ position: "relative", top: "11px", left: "0px" }}
              >
                <Button onClick={openAddProductModal}>Add Product</Button>
              </div>
              <div className="filter-icon" style={{ position: "relative", top: "11px", left: "0px" }}>
  <Button icon={AdjustIcon} onClick={toggleFilters} />
</div>

            </div>
            {showFilters && (
              <div
                className="filter-dropdown"
                style={{ position: "relative", top: "11px", right: "21px" }}
              >
                <Filters
                  filters={[
                    {
                      key: "priceRange",
                      label: "Price Range",
                      filter: (
                        <ChoiceList
                          title="Price Range"
                          titleHidden
                          choices={priceFilterOptions}
                          selected={[priceRangeFilter]}
                          onChange={handlePriceRangeChange}
                        />
                      ),
                    },
                    {
                      key: "category",
                      label: "Category",
                      filter: (
                        <ChoiceList
                          title="Category"
                          titleHidden
                          choices={categoryFilterOptions}
                          selected={[categoryFilter]}
                          onChange={handleCategoryChange}
                        />
                      ),
                    },
                  ]}
                  appliedFilters={appliedFilters}
                  onClearAll={clearFilters}
                  hideQueryField
                  onQueryChange={(query) => handleFilterChange(query)}
                  onQueryClear={() => setFilterValue("")}
                />
              </div>
            )}
          </div>

          {loading && <Banner>Loading...</Banner>}
          {error && <Banner>{error}</Banner>}
          {!loading && !error && filteredProducts.length === 0 && (
            <EmptyState
              image={emptyStateImage}
              heading="No products found"
              action={<Button onClick={clearFilters}>Clear Filters</Button>}
            />
          )}
          {!loading && !error && filteredProducts.length > 0 && (
            <div className="Polaris-DataTable--wider">
              <DataTable
                columnContentTypes={[
                  "numeric",
                  "text",
                  "text",
                  "numeric",
                  "text",
                ]}
                headings={["", "", "Product", "Price", "Category"]}
                rows={paginatedProducts.map((product) => [
                  <button
                    aria-label={`View ${product.title}`}
                    className="product-row-button"
                    onClick={() => handleRowClick(product.id)}
                  >
                    {product.id}
                  </button>,
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "50px", height: "50px" }}
                  />,
                  <button
                    aria-label={`View ${product.title}`}
                    className="product-row-button"
                    onClick={() => handleRowClick(product.id)}
                  >
                    {product.title}
                  </button>,
                  <button
                    aria-label={`View ${product.title}`}
                    className="product-row-button"
                    onClick={() => handleRowClick(product.id)}
                  >
                    ${product.price}
                  </button>,
                  <button
                    aria-label={`View ${product.title}`}
                    className="product-row-button"
                    onClick={() => handleRowClick(product.id)}
                  >
                    {product.category}
                  </button>,
                ])}
                footerContent={`Total products: ${filteredProducts.length}`}
              />
            </div>
          )}
          {totalPages > 1 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Pagination
                hasPrevious={currentPage > 1}
                onPrevious={() => handlePageChange(currentPage - 1)}
                hasNext={currentPage < totalPages}
                onNext={() => handlePageChange(currentPage + 1)}
              />
            </div>
          )}
        </Card>
        <ProductModal
          open={modalOpen}
          onClose={closeModal}
          productId={selectedProduct ? selectedProduct.id : null}
          products={products}
        />
        <AddProductModal
          open={addProductModalOpen}
          onClose={closeAddProductModal}
          onAddProduct={handleAddProduct}
        />
      </Page>
    </MediaQueryProvider>
  );
}

export default ProductListingPage;
