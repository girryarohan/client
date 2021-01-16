import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminRoute";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getCategories } from "../../../functions/category";
import CategoryForm from "../../../components/forms/CategoryForm";
import {
  getSubcategory,
  updateSubcategory,
} from "../../../functions/subcategory";

function SubcategoryUpdate({ history, match }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [parent, setParent] = useState("");

  useEffect(() => {
    loadCategories();
    loadSubcategory();
  }, [match]);
  // independant function to load all categories from db
  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const loadSubcategory = () =>
    getSubcategory(match.params.slug).then((sc) => {
      setName(sc.data.name);
      setParent(sc.data.parent);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateSubcategory(match.params.slug, { name, parent }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated`);
        history.push("/admin/subcategory");
      })
      .catch((err) => {
        console.log("SUBCATEGORY CREATION ERR", err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Update Subcategory</h4>
          )}

          <div className="form-group">
            <label>Parent Category</label>
            <select
              name="category"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Please Select Category</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </div>
  );
}

export default SubcategoryUpdate;
