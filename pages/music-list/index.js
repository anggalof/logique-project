import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableProducts from "../../components/TableProducts";
import AddProduct from "../../components/AddProduct";
import { fetchProductBySku, fetchProducts } from "../../common";
import { getLoginAuth } from "../../utils/authServices";
import { isEmpty } from "../../utils/formatter/isEmpty";

const App = () => {
  const [searchSku, setState] = useState("");
  const productsLoading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.products);
  const productBySku = useSelector((state) => state.productBySku.productBySku);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleChangeSearch = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyDownSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchProductBySku({ sku: searchSku }));
    }
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        <h2>Health Products</h2>
        <h4>CRUD can only happen if you have logged in.</h4>
      </div>
      <div disabled={!isEmpty(getLoginAuth()) ? "" : true}>
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-xs-12">
              <div className="form">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  name="search"
                  onChange={handleChangeSearch}
                  onKeyDown={handleKeyDownSearch}
                  className="form-control form-input"
                  placeholder="Search by SKU..."
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <AddProduct />
            </div>
          </div>
        </div>
        {productsLoading ? (
          <span>Loading...</span>
        ) : (
          <TableProducts services={products} service={productBySku} />
        )}
      </div>
    </div>
  );
};

export default App;
