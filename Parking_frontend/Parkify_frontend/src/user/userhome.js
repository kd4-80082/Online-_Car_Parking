import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect } from 'react';
import Signin from "./signin"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import "./userhome.css"


const Userhome = () =>{
  const [location,setLocation]=useState([])
  const [bookings,setBookings]=useState([])
    const navigate = useNavigate()
    const [vehicleType, setvehicleType] = useState("");
  const [vehicle_no,setvehicle_no]=useState([])
  const [Entry,setEntry]=useState([])
  const [Exit,setExit]=useState([])
  


    // const user= sessionStorage.getItem('firstName')
    // console.log(user)
     useEffect(() => {
    getArea()
   }, [])
  
   const booking=()=>{
     const pid=1
     const vehicleId=1
     const userId=1
     const startTime="2022-09-19T13:00:00"
    const  exitTime="2022-09-19T15:00:00"


     axios.post("http://localhost:8080/parkifyUserFunctions/addBookingBySlot/1",
     {pid,
     vehicleId,
     userId,
     startTime,
       exitTime}).then((response)=>{
         const result=response.data
         toast.success('slot booked successfully')
         setBookings(result.data)
       })
   } 

const getArea=()=>{
  axios
  .get("http://localhost:8080/parkifyAdmin/getAllParkingAreaList")
  .then((response) => {
    const result = response.data;
    console.log(result.data);
  
    setLocation(result.data.location)

  });
}


return(
<div style={styles.container}>

    <DropdownButton id="dropdown-item-button" title=" Choose Parking Area">
      <Dropdown.Item as="button"onClick={(event) => {
                    setLocation(event.target.value)
                }}>ST Stand</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {
                    setLocation(event.target.value)
                }}>Saidapur</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {
                    setLocation(event.target.value)
                }}>Priti Sangam</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {
                    setLocation(event.target.value)
                }}>Kolhapur Naka</Dropdown.Item>
                
    </DropdownButton>
<br></br>
    <DropdownButton id="dropdown-item-button" title=" choose slot Number">

      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>1</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>2</Dropdown.Item>        
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>3</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>4</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>6</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>8</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>9</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>11</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>17</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>18</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>19</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>20</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>21</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>22</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>23</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>25</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>26</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {setLocation(event.target.value)}}>30</Dropdown.Item>
  
    </DropdownButton>
 <br></br>

 <DropdownButton id="dropdown-item-button" title="Select Vehicle Type">
      <Dropdown.Item as="button"onClick={(event) => {
                    setvehicleType(event.target.value)
                }}>TWO-WHEELER</Dropdown.Item>
      <Dropdown.Item as="button"onClick={(event) => {
                    setvehicleType(event.target.value)
                }}>FOUR-WHEELER</Dropdown.Item>
      
                
    </DropdownButton>


   
      
    <div>
        <div className='mb-3'>
          <label>Vehicle Number</label>
          <input
            onChange={(event) => {
              setvehicle_no(event.target.value)
            }}
            className='form-control'
            type='text'
          />
        </div>

        <div className='mb-3'>
          <label>Entry </label>
          <input
            onChange={(event) => {
              setEntry(event.target.value)
            }}
            type="datetime-local"
            className="form-control"
          />
        </div>

        <div className='mb-3'>
          <label>Exit</label>
          <input
            onChange={(event) => {
              setExit(event.target.value)
            }}
            type="datetime-local"
            className="form-control"
          />
        </div>
        <button
          style={styles.button}
          onClick={booking}
          className="btn btn-primary"
        >
          select slot
        </button>
<button
          style={styles.button}
          onClick={() => {
            navigate("/myhome");
          }}
          className="btn btn-primary"
        >
          Back
        </button>
</div>
<br></br>


<button
          style={styles.button}
          onClick={() => {
            navigate("/payment");
          }}
          className="btn btn-success"
        >
          Make Payment
        </button>

</div>

)
}
const styles = {
    h1: {
      textAlign: 'center',
      margin: 20,
      color: 'red',
    },
    button: {
      marginLeft: 10,
    },
    container: {
      color: "black",
      width: 400,
      height: 620,
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
  }
export default Userhome