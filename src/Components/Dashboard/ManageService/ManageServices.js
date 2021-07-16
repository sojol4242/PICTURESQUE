import ManageService from "./ManageService";
import TableLoader from "../../Common/TableLoader";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
const ManageServices = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    // fetch('https://picturesque-2021.herokuapp.com/getNewServices')
    fetch("https://photography-app-2021.herokuapp.com/getNewServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <>
   
      {services.length === 0 ? (
        <TableLoader />
      ) : (
        <Table hover responsive width="100%">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price(Tk/Day)</th>
              <th>Action</th>
            </tr>
          </thead>
      
          <tbody>
            {services.map((service, i) => (
                        <ManageService service={service} index={i} key={service._id}/>
            ))}
          </tbody>
           
          
        </Table>
      )}
    </>
  );
};

export default ManageServices;
