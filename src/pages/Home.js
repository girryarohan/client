import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import CategoryList from "../components/category/CategoryList";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import SubList from "../components/sub/SubList";
import { Carousel } from "antd";
import ad1 from "../images/1.webp";
import ad2 from "../images/2.webp";
import ad3 from "../images/3.webp";
import ad4 from "../images/4.webp";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

function Home() {
  const contentStyle = {
    height: "320px",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const settings = {
    slidesToScroll: 1,
    nextArrow: <ArrowLeftOutlined />,
    prevArrow: <ArrowRightOutlined />,
  };
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold display-5 text-center pb-2 pt-2 mb-0">
        <Jumbotron
          text={["Winter Sale is Live", "New Arrivals", "Latest Products"]}
        />
      </div>
      <Carousel autoplay {...settings}>
        <img style={contentStyle} src={ad1} alt="1" />
        <img style={contentStyle} src={ad2} alt="1" />
        <img style={contentStyle} src={ad3} alt="1" />
        <img style={contentStyle} src={ad4} alt="1" />
      </Carousel>

      <h4 className="text-center p-3 mt-3 display-5 jumbotron">New Arrivals</h4>
      <NewArrivals />
      <br />
      <h4 className="text-center p-3 mt-3 display-5 jumbotron">Best Sellers</h4>
      <BestSellers />
      <br />
      <h4 className="text-center p-3 mt-3 display-5 jumbotron">Categories</h4>
      <CategoryList />
      <h4 className="text-center p-3 mt-3 display-5 jumbotron">
        Sub Categories
      </h4>
      <SubList />
    </>
  );
}

export default Home;
