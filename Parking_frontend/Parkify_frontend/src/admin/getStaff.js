import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const GetAllStaff = () => {
  const [allStaff, setAllStaff] = useState([]);
  const navigate = useNavigate();

  // console.log("it is state")
  useEffect(() => {
    getStaff()
  }, [])
  const getStaff = () => 
 
  {
    axios
      .get("http://localhost:8080/parkifyAdmin/getUserByRole/STAFF")
      .then((response) => {
        const result = response.data
        //console.log("result")
        console.log(result)
        // console.log(typeof(result))
        //if (result['status'] == 'success') {
        if (result != null) {
         // console.log(result);
          
          toast.success('success')
          setAllStaff(result.data);
        } else {
          toast.error(result["error"]);
        }

        
      });
      
  };

 


  return (

    <div>
      <h1 style={styles.h1}>Staff List</h1>

      <div>
        <table className="table table-striped">
        
          <thead>
            <tr>
              <th>UserID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Mobile No</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            
            {allStaff.map((allUser) => {
              
              return (
                
               <tr>
                  <td>{allUser.userId}</td>
                  <td>{allUser.firstName}</td>
                  <td>{allUser.lasttName}</td>
                  <td>{allUser.email}</td>
                  <td>{allUser.mobileNo}</td>
                  <td>{allUser.userRole}</td>
                </tr>
               
              ) 
            
            })}
          </tbody>
        </table>
      </div>
      <div><button style={styles.button}
          
          onClick={() => {
            navigate("/admin");
          }}
          className="btn btn-primary"
        >
          Back
        </button></div>
    </div>
  );
  
}
const styles = {
    h1: {
      textAlign: 'center',
      margin: 20,
      color: 'red',
    },
    button: {
      marginLeft: 20,
    },
  }
export default GetAllStaff;
