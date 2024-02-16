import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import config from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


// use the dispatch to update the redux store about the signin state
import { useDispatch } from 'react-redux'
import { signin } from '../slices/authSlice'

const Signin = () => {
  // get user inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the dispatcher
  const dispatch = useDispatch()

  // get the navigate function reference
  const navigate = useNavigate()

  const signinUser = () => {
    // check if user has really entered any value
    if (email.length === 0) {
      toast.error('please enter email')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else {
      // make the API call to check if user exists
      axios
        .post('http://localhost:8080/parkifyUserFunctions/signIn', {
          email,
          password
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data
          console.log(result)
          
          const { userId, firstName, lastName , role, email} = result['data']

          // persist the logged in user's information for future use
          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['role'] = role
          sessionStorage['email']=email
console.log(firstName)
          toast.success('welcome '+(firstName + ' '+lastName))

          // check if user's authentication is successfull
          if (result['status'] === 'error') {
            toast.error('invalid email or password')
          } else {
            // get the logged in user's info
           // const user= { userId, firstName, lastName , email,mobile, userRole} = result['data']
            
          //    // persist the logged in user's information for future use
        const user=result.data
        
console.log(user)
            // send the action
           // dispatch(signin(user))

          //  toast.success('welcome to PARKIFY')
             if (user.userRole==='USER')
            navigate('/myhome')
            else
             navigate('/admin')
          }
        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className='form-control'
            type='email'
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className='form-control'
            type='password'
          />
        </div>
        <div className='mb-3' style={{ marginTop: 40 }}>
          <div>
            Dont have an account? <Link to='/signup'>Signup here</Link>
          </div>
          <button onClick={signinUser} style={styles.signinButton}>
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#e6ffff",

    color: "black",
    width: 400,
    height: 310,
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
    backgroundColor: "#db0f62",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Signin
