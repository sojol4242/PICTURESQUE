import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext,   useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory} from "react-router";
import swal from "sweetalert";
import { UserContext } from "../../../../App";
import './reviewForm.css'

const ReviewForm = () => {
  const {
    user: { email, img },
  } = useContext(UserContext);
 
  const { register, handleSubmit, reset } = useForm();
 
  const [selectedDate, setSelectedDate] = useState(new Date());
 

  const history = useHistory();
  const onSubmit = (data, e) => {
    const newReview = {
      email: data.email,
      name: data.name,
      serviceName: data.serviceName,
      position: data.position,
      review: data.review,
      img: img,
      date: selectedDate.toLocaleDateString("en-US"),
    };
    const url = "https://photography-app-2021.herokuapp.com/addReview";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => {
        if (res) {
          swal(
            "Success!",
            "Your review has been submitted successfully. We appreciate your contirbution.",
            "success"
          );
        }
      })
      .then((data) => {
        if (data) {
          history.replace("/dashboard/profile");
        }
      });

    e.preventDefault();
    e.target.reset();
    reset();
  };
  return (
    <section className="px-3">
      <div className="mx-auto reviewForm">
        <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <Row className="justify-content-center px-4">
            <Row>
              <Form.Group as={Col} md={16} lg={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Your Name
                </Form.Label>
                <Form.Control
                  type="text"
             
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />
              </Form.Group>
              <Form.Group as={Col} md={16} lg={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Service Name
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("serviceName", { required: true })}
                  placeholder="Service Name"
                />
              </Form.Group>
              <Row />

              <Form.Group as={Col} md={12} lg={6}>
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={email || ""}
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group as={Col} md={12} lg={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  What do you do?
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("position", { required: true })}
                  placeholder="Student/CEO/Manager etc.."
                />
              </Form.Group>

              <Form.Group as={Col} md={12}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Your Taught
                </Form.Label>
                <Form.Control
                  style={{ height: "10rem" }}
                  type="text"
              
                  as="textarea"
                  {...register("review", { required: true })}
                  placeholder="Your Taught"
                />
              </Form.Group>
            </Row>
          </Row>
          <div className="text-center mt-1">
            <motion.button
              whileHover={{
                scale: 1.01,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="reviewBtn mt-3"
              type="submit"
            >
              {" "}
              <FontAwesomeIcon icon={faCommentDots} /> Set review
            </motion.button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ReviewForm;
