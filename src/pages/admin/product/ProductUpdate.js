import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminRoute";
import { getProduct } from "../../../functions/product";

import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";

const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "White", "Blue", "Gold", "Silver"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
  color: "",
  brand: "",
};
// match is used for accessing the slug from URL - it comes from props > match > params>slug
// {JSON.stringify(props)} and see
// alternative method for match is useParams from react router dom - see documentation
function ProductUpdate({ match }) {
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);

  const [loading, setLoading] = useState(false);
  const [arrayOfSubIds, setArrayOfSubIds] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  // router
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);
  const loadProduct = () => {
    getProduct(slug).then((p) => {
      //   console.log("UPDATE PRODUCT SINGLE", p);
      // 1. load single product ref- 106
      setValues({ ...values, ...p.data }); //102
      //  2. load single product category subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subcategories
      });
      // 3.prepare array of sub ids to show as default sub values in antd Select component
      // because antd Select takes array data instead object to show subcategories
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("arr for antd", arr);
      setArrayOfSubIds((prev) => arr); // required for antd Select
    });
  };

  // loading all categories - purpose : if user wants to change category while updating the product 105
  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log([e.target.name] + "  HELLO  " + e.target.value);
  };
  const handleCategoryChange = (e) => {
    //
    e.preventDefault();
    console.log("SELECTED CATEGORY ID", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATEGORY CLICK", res);
      setSubOptions(res.data);
    });
    // if user clicks back to original category
    // show its sub categories in default from db
    if (values.category._id === e.target.value) {
      loadProduct();
    }
    // clear old sub category ids
    setArrayOfSubIds([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product Update</h4>
          {JSON.stringify(values)}
          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            subOptions={subOptions}
            arrayOfSubIds={arrayOfSubIds}
            setArrayOfSubIds={setArrayOfSubIds}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
