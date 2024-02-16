import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";



const Myhome = ()=>{
    
    useEffect(() => {
        getfare();
      }, []);
      const navigate = useNavigate();
    
      const [fare, setfare] = useState([]);
      const [fareCard, setfarecard] = useState([]);
    
    const getfare = () => {
        axios
          .get("http://localhost:8080/parkifyAdmin/getFareDetails")
          .then((response) => {
            const result = response.data;
            console.log(result.data);
            const {twowheeler,fourwheeler}=response.data
    
            sessionStorage['twowheeler'] = twowheeler
            sessionStorage['fourwheeler'] = fourwheeler
    
            setfarecard(result.data);
          });
      };
    return (
    <div style={styles.container}>
         <div style={{ textAlign: "center" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Vehicle Type</th>
                <th>Fare</th>
              </tr>
            </thead>
            <tbody>
              {fareCard.map((fares) => {
                return (
                  <tr>
                    <td>{fares.vehicleType}</td>
                    <td>{fares.fare}Rs.</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      <h3 style={styles.h1}>Book your slot</h3>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/userhome");
        }}
      >
        Book Slot
      </button>

      <h3 style={styles.h1}>View my Bookings</h3>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/mybookings");
        }}
      >
        view
      </button>

      
      

      <br></br>
      <br></br>
      <br></br>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
};
const styles = {
  h1: {
    textAlign: "center",
    margin: 20,
    color: "black",
  },
  button: {
    align: "center",
    width: 400,
    marginLeft: 100,
  },

  container: {
    color: "black",
    backgroundColor: "white",
    width: 600,
    height: 400,
    padding: 0,
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
};


export default Myhome