import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddParking = () => {
  const [parkings, setParkings] = useState([]);

  const [city, setCity] = useState([]);

  const [location, setLocation] = useState([]);

  const [slots, setSlots] = useState([]);

  const [parkingName, setParkingName] = useState([]);

  const [parkingId, setParkingId] = useState([]);

  useEffect(() => {
    getParkinglist();
  }, []);

  const add = () => {
    axios
      .post("http://localhost:8080/parkifyAdmin/addNewParkingArea", {
        city,
        location,
        slots,
        parkingName,
      })
      .then((response) => {
        const result = response.data;
        if (result != null) {
          toast.success("Parking added successfully");
        }
      });
  };

  const getParkinglist = () => {
    axios
      .get("http://localhost:8080/parkifyAdmin/getAllParkingAreaList")
      .then((response) => {
        const result = response.data;
        console.log(result.data);
        setParkings(result.data);
        setParkingId(result.data.parkingId);
      });
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <div style={{ marginTop: 10 }}>
              <div style={{ textAlign: "center" }}>
                
                <h1 style={{ marginLeft :80, color :'lavender' }}>Parking List</h1>
                <table style={{marginLeft :120, backgroundColor :'white'}}>
                  
                  <thead>
                    
                    <tr>
                      
                      <th> parkingId</th>
                      <th>city</th>
                      <th> location</th>
                      <th>slots</th>
                      <th>parkingName</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parkings.map((park) => {
                      return (
                        <tr>
                          <td>{park.parkingId}</td>
                          <td>{park.city}</td>
                          <td>{park.location}</td>
                          <td>{park.slots}</td>
                          <td>{park.parkingName}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td style={{width:300}}></td>
          <td>
            <div style={{ marginTop: 100 }}>
             

              <div style={styles.container}>
              <h3 style={{ textAlign: "center" , color:'black'}}>Add New Parking Area</h3>
                <div className="mb-3">
                  <label>City</label>
                  <input
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label>Location</label>
                  <input
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label>Slots</label>
                  <input
                    onChange={(event) => {
                      setSlots(event.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label>Parking Name</label>
                  <input
                    onChange={(event) => {
                      setParkingName(event.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3" style={{ marginTop: 40 }}>
                  <button onClick={add} style={styles.signinButton}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};
const styles = {
  container: {
    color: "black",
    backgroundColor:'thistle',
    width: 400,
    height: 480,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "black",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  table: {
    color: "black",
    backgroundColor: "yellow",
    borderColor: "black",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    textAlign: "center",
    border: 5,
    marginLeft: 570,
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "green",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default AddParking;
