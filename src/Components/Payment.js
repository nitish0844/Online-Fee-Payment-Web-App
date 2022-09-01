import React, { useState } from "react";
import { useNavigate } from "react-router";
import GeneratePDF from "./GeneratePDF";

function Payment({ amount }) {
  let navigate = useNavigate();

  const [paymentData, setPaymentData] = useState(null);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_g2gqqVJnlAl2Jv",
      amount: amount * 100,
      currency: "INR",
      name: "Pay Fees",
      description: "Pay Fees",
      // prefill: {
      //   email: "nithish@mam.edu",
      //   contact: "6380117233",
      // },
      handler: async function (response) {
        console.log(response);

        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        sessionStorage.setItem("amount", amount);
        sessionStorage.setItem("transactionId", response.razorpay_payment_id);

        if (response.razorpay_payment_id) {
          navigate("/success");
          // alert("Success");

          setPaymentData(response);
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div style={{ marginTop: 50, marginBottom: 20 }}>
      {paymentData === null ? (
        <button
          className="btn"
          style={{ backgroundColor: "#6b0303", color: "#fff" }}
          onClick={displayRazorpay}
        >
          Pay the fees of {amount}
        </button>
      ) : (
        <div>
          <GeneratePDF amount={amount} paymentData={paymentData} />
        </div>
      )}
    </div>
  );
}

export default Payment;
