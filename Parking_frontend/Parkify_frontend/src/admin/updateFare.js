import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateFare = () => {
  useEffect(() => {
    getfare();
  }, []);
  const navigate = useNavigate();

  const [fare, setfare] = useState([]);
  const [fareCard, setfarecard] = useState([]);

  const twoWheeler = () => {
    axios
      .patch("http://localhost:8080/parkifyAdmin/updateTwowheelerFare/" + fare)
      .then((response) => {
        const result = response.data;
        if (result != null) {
          toast.success("Updated successfully");
        } else {
          toast.error("something went wrong");
        }
      });
  };
  const fourWheeler = () => {
    axios
      .patch("http://localhost:8080/parkifyAdmin/updateFourwheelerFare/" + fare)
      .then((response) => {
        const result = response.data;
        if (result != null) {
          toast.success("Updated successfully");
        } else {
          toast.error("something went wrong");
        }
      });
  };

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
    <div style={{ marginTop: 100 }}>
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

        <br></br>
        <div className="mb-3">
          <label>Update Two Wheeler Fare</label>
          <input
            onChange={(event) => {
              setfare(event.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={twoWheeler} style={styles.signinButton}>
            Update
          </button>
        </div>
        <div className="mb-1">
          <label>Update Four Wheeler Fare</label>
          <input
            onChange={(event) => {
              setfare(event.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={fourWheeler} style={styles.signinButton}>
            Update
          </button>
        </div>
        <button
          onClick={() => {
            navigate("/admin");
          }}
          className="btn btn-primary"
        >
          Back
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lavender",

    color: "black",
    width: 400,
    height: 450,
    padding: 10,
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
    color: "blue",
    textAlign: "center",
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
export default UpdateFare;
