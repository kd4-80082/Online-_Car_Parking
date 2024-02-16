import { Link, useNavigate } from 'react-router-dom'

// for getting the current state of signin status
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../slices/authSlice'

const Navbar = () => {
  // get the current status
  const signinStatus = useSelector((state) => state.authSlice.status)

  // get the dispatcher
  const dispatch = useDispatch()

  // used to navigate
  const navigate = useNavigate()

  return (
    <nav
      style={{ backgroundColor: 'black' }}
      className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/home'>
          E-ParkinG
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/home'>
                Home
              </Link>
            </li>
            
            

          
            
          </ul>

          <ul className='navbar-nav navbar-right'>
            <li className='nav-item'>
              {/* if user is not signed then render signin link */}
              {!signinStatus && (
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/signin'>
                  Signin
                </Link>
              )}

              {/* if user is signed in then render signout button */}
              {signinStatus && (
                <button
                  style={{ textDecoration: 'none', color: 'white' }}
                  onClick={() => {
                    // go to signin page
                    navigate('/signin')

                    // send the action to let the user signout
                    dispatch(signout())
                  }}
                  className='btn btn-link'
                  aria-current='page'>
                  Signout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
