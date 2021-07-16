import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import toast from "react-hot-toast";
import swal from "sweetalert";
const ManageService = ({service, index}) => {
  console.log(service);
  const { date, _id, serviceName, price } = service;
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure! you want to delete this service?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        const loading = toast.loading("deleting...Please wait!");
        axios.delete(`https://photography-app-2021.herokuapp.com/delete/${_id}`)
        
          .then((res) => {
            toast.dismiss(loading);
            if (res) {
              toast.success("Service deleted successfully!");
            //   History.push("./")
            } else {
              toast.error("Something went wrong, please try again");
            }
          })
          .catch((err) => {
            toast.dismiss(loading);
            swal({
              title: "Failed!",
              text: "Something went wrong, please try again",
              icon: "error",
            });
          });
      }
    });
  };
  //   let des = description;
  //   let shortDes = des.split(" ").slice(0, 5).join(" ");
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{serviceName}</td>
        <td>{date}</td>
        <td>{price}</td>
        <td>
          <button className="delete-btn" onClick={handleDelete}>
            {" "}
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageService;
