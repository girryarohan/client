import React from "react";
import {
  LinkedinFilled,
  InstagramFilled,
  FacebookFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useHistory } from "react-router-dom";

function Footer() {
  //router
  let history = useHistory();
  return (
    <footer className="bg-light text-dark text-left text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-info">About eCom.in</h5>

            <p>
              India’s Ultimate Online Shopping Site eCom.in vision is to create
              India’s most reliable and frictionless commerce ecosystem that
              creates life-changing experiences for buyers and sellers.This
              e-commerce never shuts down.
            </p>
            <img
              src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"
              alt="All payments accepted"
            />
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-left text-info">Get to Know Me</h5>

            <ul className="list-unstyled mb-0 text-left">
              <li>
                <a
                  className="text-dark"
                  onClick={() => history.push("/aboutme")}
                >
                  About Me
                </a>
              </li>
              <li>
                <a href="mailto:rohanarote@live.com" className="text-dark">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="https://www.rostudio.in" className="text-dark">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/girryarohan"
                  className="text-dark"
                >
                  Buy me a coffee
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-left text-info">Connect With Me</h5>

            <ul className="list-unstyled text-left">
              <li>
                <a
                  href="https://www.linkedin.com/in/rohanarote/"
                  className="text-dark"
                >
                  <LinkedinFilled /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rohan.arote/"
                  className="text-dark"
                >
                  <InstagramFilled /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/rohan.arote/"
                  className="text-dark"
                >
                  <FacebookFilled /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC2D3J-dcoEOwv0go_i9QNQQ"
                  className="text-dark"
                >
                  <YoutubeFilled /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "#E9ECEF" }}
      >
        <Avatar src="https://pbs.twimg.com/profile_images/1283302395951243264/Rfq-bfLU_400x400.jpg" />
        &nbsp; Designed and Developed by: © 2021{" "}
        <a className="text-info" href="https://www.rostudio.in">
          rostudio.in
        </a>
      </div>
    </footer>
  );
}

export default Footer;
