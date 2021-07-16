import React, { useContext } from "react";
import { UserContext } from "../../../../App";
import { useHistory } from "react-router-dom";

const BookedOrder = ({ order, index }) => {
  console.log({order});
  const { name, email, serviceName, servicePrice, date ,paymentId} = order;

  const { user } = useContext(UserContext);

  // const {_id,name,email,serviceName,servicePrice,date,paymentId}=service;
  // const history = useHistory();
  return (
    <>
      {email===user.email && (
        <tr>
          <td>{index++}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{serviceName}</td>
          <td>{servicePrice}</td>
          <td>{date}</td>
           
 

          {/* <td>{paymentId}</td> */}
        </tr>
      )}
    </>
  );
};

export default BookedOrder;
