"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var polaris_1 = require("@shopify/polaris");
var empty_state_image_png_1 = require("./empty-state-image.png");
var ProductModal_1 = require("./ProductModal");
var AddProductModal_1 = require("./AddProductModal");
var polaris_icons_1 = require("@shopify/polaris-icons");
var MediaQueryProvider = function (props) {
  return <div>{props.children}</div>;
};
var BannerStatus;
(function (BannerStatus) {
  BannerStatus["Info"] = "info";
  BannerStatus["Success"] = "success";
  BannerStatus["Warning"] = "warning";
  BannerStatus["Critical"] = "critical";
})(BannerStatus || (BannerStatus = {}));
function ProductListingPage() {
  var _a = (0, react_1.useState)([]),
    products = _a[0],
    setProducts = _a[1];
  var _b = (0, react_1.useState)(true),
    loading = _b[0],
    setLoading = _b[1];
  var _c = (0, react_1.useState)(""),
    filterValue = _c[0],
    setFilterValue = _c[1];
  var _d = (0, react_1.useState)(""),
    priceRangeFilter = _d[0],
    setPriceRangeFilter = _d[1];
  var _e = (0, react_1.useState)(""),
    categoryFilter = _e[0],
    setCategoryFilter = _e[1];
  var _f = (0, react_1.useState)(""),
    error = _f[0],
    setError = _f[1];
  var _g = (0, react_1.useState)(1),
    currentPage = _g[0],
    setCurrentPage = _g[1];
  var _h = (0, react_1.useState)(false),
    showFilters = _h[0],
    setShowFilters = _h[1];
  var _j = (0, react_1.useState)(),
    selectedProduct = _j[0],
    setSelectedProduct = _j[1];
  var _k = (0, react_1.useState)(false),
    modalOpen = _k[0],
    setModalOpen = _k[1];
  var _l = (0, react_1.useState)(false),
    addProductModalOpen = _l[0],
    setAddProductModalOpen = _l[1];
  var ITEMS_PER_PAGE = 10;
  (0, react_1.useEffect)(function () {
    function fetchData() {
      return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
            case 1:
              response = _a.sent();
              if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              return [4 /*yield*/, response.json()];
            case 2:
              data = _a.sent();
              setProducts(data);
              setLoading(false);
              return [3 /*break*/, 4];
            case 3:
              error_1 = _a.sent();
              console.error("Error fetching products:", error_1);
              setError("Failed to fetch products. Please try again later.");
              setLoading(false);
              return [3 /*break*/, 4];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    }
    fetchData();
  }, []);
  var handleRowClick = function (productId) {
    var product = products.find(function (p) {
      return p.id === productId;
    });
    setSelectedProduct(product);
    setModalOpen(true);
  };
  var handlePriceRangeChange = function (selected) {
    setPriceRangeFilter(selected[0]);
  };
  var handleCategoryChange = function (selected) {
    setCategoryFilter(selected[0].toLowerCase());
  };
  var handleFilterChange = function (value) {
    setFilterValue(value.toLowerCase());
  };
  var clearFilters = function () {
    setFilterValue("");
    setPriceRangeFilter("");
    setCategoryFilter("");
  };
  var handleAddProduct = function (newProduct) {
    var updatedProducts = products.map(function (product) {
      return __assign(__assign({}, product), { id: product.id + 1 });
    });
    setProducts(
      __spreadArray(
        [__assign(__assign({}, newProduct), { id: 1 })],
        updatedProducts,
        true
      )
    );
  };
  var filteredProducts = products.filter(function (product) {
    var filterTitle = product.title.toLowerCase().includes(filterValue);
    var filterPrice =
      priceRangeFilter === "" ||
      (parseFloat(product.price) >=
        parseFloat(priceRangeFilter.split(" - ")[0]) &&
        parseFloat(product.price) <=
          parseFloat(priceRangeFilter.split(" - ")[1]));
    var filterCategory =
      categoryFilter === "" ||
      product.category.toLowerCase() === categoryFilter;
    return filterTitle && filterPrice && filterCategory;
  });
  var totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  var startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  var endIndex = startIndex + ITEMS_PER_PAGE;
  var paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  var priceFilterOptions = [
    { label: "Any", value: "" },
    { label: "$0 - $100", value: "0 - 100" },
    { label: "$100 - $200", value: "100 - 200" },
    { label: "$200 - $1000", value: "200 - 1000" },
  ];
  var categoryFilterOptions = [
    { label: "Any", value: "" },
    { label: "Electronics", value: "electronics" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
  ];
  var appliedFilters = [];
  if (priceRangeFilter !== "") {
    appliedFilters.push({
      key: "priceRange",
      label: "Price Range: ".concat(priceRangeFilter),
      onRemove: function () {
        return setPriceRangeFilter("");
      },
    });
  }
  if (categoryFilter !== "") {
    appliedFilters.push({
      key: "category",
      label: "Category: ".concat(categoryFilter),
      onRemove: function () {
        return setCategoryFilter("");
      },
    });
  }
  var closeModal = function () {
    setSelectedProduct(true);
    setModalOpen(false);
  };
  var openAddProductModal = function () {
    setAddProductModalOpen(true);
  };
  var closeAddProductModal = function () {
    setAddProductModalOpen(false);
  };
  var handlePageChange = function (page) {
    setCurrentPage(page);
  };
  var toggleFilters = function () {
    setShowFilters(!showFilters);
  };
  return (
    <MediaQueryProvider>
      <polaris_1.Page title="Product Listing">
        <polaris_1.Card>
          <div className="top-section">
            <div className="filter-section">
              <div className="filter-input" style={{ marginLeft: "-40px" }}>
                <polaris_1.TextField
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
                <polaris_1.Button onClick={openAddProductModal}>
                  Add Product
                </polaris_1.Button>
              </div>
              <div
                className="filter-icon"
                style={{ position: "relative", top: "11px", left: "0px" }}
              >
                <polaris_1.Button
                  icon={polaris_icons_1.AdjustIcon}
                  onClick={toggleFilters}
                />
              </div>
            </div>
            {showFilters && (
              <div
                className="filter-dropdown"
                style={{ position: "relative", top: "11px", right: "21px" }}
              >
                <polaris_1.Filters
                  filters={[
                    {
                      key: "priceRange",
                      label: "Price Range",
                      filter: (
                        <polaris_1.ChoiceList
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
                        <polaris_1.ChoiceList
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
                  onQueryChange={function (query) {
                    return handleFilterChange(query);
                  }}
                  onQueryClear={function () {
                    return setFilterValue("");
                  }}
                />
              </div>
            )}
          </div>

          {loading && <polaris_1.Banner>Loading...</polaris_1.Banner>}
          {error && <polaris_1.Banner>{error}</polaris_1.Banner>}
          {!loading && !error && filteredProducts.length === 0 && (
            <polaris_1.EmptyState
              image={empty_state_image_png_1.default}
              heading="No products found"
              action={
                <polaris_1.Button onClick={clearFilters}>
                  Clear Filters
                </polaris_1.Button>
              }
            />
          )}
          {!loading && !error && filteredProducts.length > 0 && (
            <div className="Polaris-DataTable--wider">
              <polaris_1.DataTable
                columnContentTypes={[
                  "numeric",
                  "text",
                  "text",
                  "numeric",
                  "text",
                ]}
                headings={["", "", "Product", "Price", "Category"]}
                rows={paginatedProducts.map(function (product) {
                  return [
                    <button
                      aria-label={"View ".concat(product.title)}
                      className="product-row-button"
                      onClick={function () {
                        return handleRowClick(product.id);
                      }}
                    >
                      {product.id}
                    </button>,
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "50px", height: "50px" }}
                    />,
                    <button
                      aria-label={"View ".concat(product.title)}
                      className="product-row-button"
                      onClick={function () {
                        return handleRowClick(product.id);
                      }}
                    >
                      {product.title}
                    </button>,
                    <button
                      aria-label={"View ".concat(product.title)}
                      className="product-row-button"
                      onClick={function () {
                        return handleRowClick(product.id);
                      }}
                    >
                      ${product.price}
                    </button>,
                    <button
                      aria-label={"View ".concat(product.title)}
                      className="product-row-button"
                      onClick={function () {
                        return handleRowClick(product.id);
                      }}
                    >
                      {product.category}
                    </button>,
                  ];
                })}
                footerContent={"Total products: ".concat(
                  filteredProducts.length
                )}
              />
            </div>
          )}
          {totalPages > 1 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <polaris_1.Pagination
                hasPrevious={currentPage > 1}
                onPrevious={function () {
                  return handlePageChange(currentPage - 1);
                }}
                hasNext={currentPage < totalPages}
                onNext={function () {
                  return handlePageChange(currentPage + 1);
                }}
              />
            </div>
          )}
        </polaris_1.Card>
        <ProductModal_1.default
          open={modalOpen}
          onClose={closeModal}
          productId={selectedProduct ? selectedProduct.id : null}
          products={products}
        />
        <AddProductModal_1.default
          open={addProductModalOpen}
          onClose={closeAddProductModal}
          onAddProduct={handleAddProduct}
        />
      </polaris_1.Page>
    </MediaQueryProvider>
  );
}
export default ProductListingPage;
