import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./payment.css";
import Footer from "../../../Common/Footer/Footer";
import Payment from "./Payment";
import Header from "../../../Common/Header/Header";
import { UserContext } from "../../../../App";
const CheckOutForm = () => {
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );

  const { id } = useParams();
  const [selectedService, setSelectedService] = useState({});
  const [serviceData, setServiceData] = useState(null);

  //   const [signedInUser, setSignedInUser] = useContext(UserContext);
  //   const name = signedInUser.name;
  //   const email = signedInUser.email;

  //user form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [greeting, setGreeting] = useState(" ");

  const onSubmit = (paymentId, data, event) => {
    const checkOutInfo = {
      name: user.name,
      email: user.email,
      serviceName: selectedService.serviceName,
      servicePrice: selectedService.price,

      date: selectedDate,
      paymentId: paymentId,
    };
    setServiceData(checkOutInfo);
    // console.log(checkOutInfo);
    fetch("https://photography-app-2021.herokuapp.com/checkOutService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkOutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setGreeting(`
                Have a nice Day sir!!! Thank you for placed your order. Please complete the payment procedure
                `);
        }
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("https://photography-app-2021.herokuapp.com/getNewServices")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setServiceData(data)
        const serviceDetails = data.find((e) => e._id === id);

        setSelectedService(serviceDetails);

        // console.log(serviceDetails);
      });
  }, []);

  //  handle checkout:

  //   const checkOutService = (paymentId,event) => {

  // }

  return (
    <>
      {/* <Header/> */}
      <section className="container-fluid checkOut">
        {selectedService ? (
          <div className="row mx-2">
            <div className="col-md-6 serviceDetails mx-auto p-5">
              <h1>Your selected service</h1>
              <h3>{selectedService.serviceName}</h3>
              <h3>
                Amount : <small>{selectedService.price} TK/Day</small>
              </h3>
              <h4>Details</h4>
              <p>{selectedService.description}</p>
            </div>
            <div className="col-md-6 billingForm mx-auto p-5">
              <div style={{ display: serviceData ? "none" : "block" }}>
                <h2>
                  Please fill the form
                  <span> and stay tuned</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <input
                        placeholder="Your name"
                        type="name"
                        {...register("name")}
                        value={`${user.name}`}
                      />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input
                        placeholder="Your email"
                        type="email"
                        {...register("email")}
                        value={`${user.email}`}
                      />
                      <small style={{ color: "red" }}>
                        {errors.email && <span>Email is required</span>}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <input
                        placeholder="Your phone"
                        type="phone"
                        {...register("phone", { required: true })}
                      />
                      <small style={{ color: "red" }}>
                        {errors.phone && <span>Phone is required</span>}
                      </small>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input
                        placeholder="Address"
                        type="address"
                        {...register("address", { required: true })}
                      />
                    </div>
                  </div>

                  {/* <small style={{color: 'red'}}>{errors.email && <span>Email is required</span>}</small> */}

                  <br />

                  <motion.button
                    whileHover={{
                      scale: 1.01,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    className="checkBtn"
                    type="submit"
                  >
                    Check Out
                  </motion.button>
                </form>
              </div>
              <div>
                <div style={{ display: serviceData ? "block" : "none" }}>
                  <p className="ext-info">
                    <span>{greeting}</span>
                  </p>

                  <Payment handlePayment={onSubmit} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container d-flex justify-content-center align-items-center">
            <img
              src="https://i.ibb.co/GJVBCfr/9313-loader.gif"
              alt="loader"
              style={{ height: "200px", background: "w" }}
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CheckOutForm;
