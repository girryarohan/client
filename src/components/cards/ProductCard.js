import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import noimage from "../../images/noimage.jpg";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
const { Meta } = Card;
function ProductCard({ product }) {
  const { title, description, images, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      <Card
        hoverable
        cover={
          <img
            src={images && images.length ? images[0].url : noimage}
            alt={title}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-info" />
            <br />
            View Product
          </Link>,
          <>
            <ShoppingCartOutlined
              className="text-danger"
              //   onClick={() => handleRemove(slug, title)}
            />
            <br />
            Add to Cart
          </>,
        ]}
      >
        <Meta
          title={`${title} - ₹${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
}

export default ProductCard;
