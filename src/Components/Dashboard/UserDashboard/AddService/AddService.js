import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";

import toast from "react-hot-toast";
import swal from "sweetalert";
import "./addService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const [service, setService] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const { serviceName, price, description, img } = service || {};
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onSubmit = (data) => {
    const loading = toast.loading("Uploading...");
    const serviceInfo = {
      ...data,
      img: imgURL || img,
      date: selectedDate.toLocaleDateString("en-US"),
    };

    axios
      .post(
        "https://photography-app-2021.herokuapp.com/addServices",
        serviceInfo
      )
      .then((res) => {
        toast.dismiss(loading);
        if (res.data) {
          swal("Success!", "One new service added successfully", "success");
          reset();
        }
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      });
  };

  const handleImgUpload = (event) => {
    const loading = toast.loading("Image uploading...");
    setIsDisabled(true);
    const imgData = new FormData();
    imgData.set("key", "77da4673bb823946547077102ba63bff");
    imgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((response) => {
        toast.dismiss(loading);

        setImgURL(response.data.data.url);
        toast.success("Image successfully uploaded");
        setIsDisabled(false);

      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      });
  };
  return (
    <div className="px-2">
      <Form onSubmit={handleSubmit(onSubmit)} className="addServiceForm">
        <Row className="justify-content-center px-4">
          <Form.Group as={Col} md={7}>
            <Form.Label style={{ fontWeight: "bold" }}>Service Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={serviceName}
              {...register("serviceName", { required: true })}
              placeholder="Your Name"
            />
          </Form.Group>
          <Form.Group as={Col} md={5}>
            <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
            <Form.Control
              type="text"
              defaultValue={price}
              {...register("price", { required: true })}
              placeholder="Price"
            />
          </Form.Group>
          <Form.Group as={Col} md={7}>
            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
            <Form.Control
              style={{ height: "10rem" }}
              type="text"
              defaultValue={description}
              as="textarea"
              {...register("description", { required: true })}
              placeholder="Description"
            />
          </Form.Group>
          <Col md={5}>
            <Form.Label style={{ fontWeight: "bold", display: "block" }}>
              Add Image
            </Form.Label>
            <Button
              as={"label"}
              htmlFor="upload"
              className="d-block p-2 uploadBtn"
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Image
            </Button>
            <Form.Control
              hidden="hidden"
              id="upload"
              type="file"
              onChange={handleImgUpload}
            />
          </Col>
        </Row>
        <div className="text-center mt-3">
          <motion.button
            whileHover={{
              scale: 1.01,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            type="submit"
            className="submitBtn"
            disabled={isDisabled}
          >
            Submit
          </motion.button>
        </div>
      </Form>
    </div>
  );
};

export default AddService;
