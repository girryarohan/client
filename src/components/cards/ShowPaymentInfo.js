import React from "react";

function ShowPaymentInfo({ order, showStatus = true }) {
  return (
    <div>
      <div class="container">
        <div class="row text-left">
          <div class="col-sm">
            <h6>
              <b>Order ID:</b> {order.paymentIntent.id}
            </h6>
          </div>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row text-left">
          <div class="col-sm">
            {" "}
            Amount:{" "}
            {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </div>
          <div class="col-sm">
            Currency: {order.paymentIntent.currency.toUpperCase()}
          </div>
          <div class="col-sm">
            Method: {order.paymentIntent.payment_method_types[0]}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row text-left">
          <div class="col-sm">
            Payment: {order.paymentIntent.status.toUpperCase()}
          </div>
          <div class="col-sm">
            Ordered on:{" "}
            {new Date(order.paymentIntent.created * 1000).toLocaleString()}
          </div>

          <div class="col-sm">
            {showStatus && (
              <span className="badge bg-primary text-white">
                STATUS: {order.orderStatus}
              </span>
            )}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ShowPaymentInfo;
