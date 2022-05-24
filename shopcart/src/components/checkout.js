import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function CheckOut(props) {
  const [login, setLogin] = useState(false); //set up login
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div> 
      <Card style={{ width:'800px' }} className="mx-auto mt-5">
        <Card.Header className='pb-4'>
          <h1>Sign In</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {!login &&
          <React.Fragment>
            <h3>Please login using one of the following:</h3>
            {/* Login Form */}
            <LoginForm className="d-inline"/>
            {/* FB Login Button */}
            <FacebookLogin
              appId="707616920457618"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"  
            />
            </React.Fragment>
            }
            {login && 
              <CheckOutFB fbpic={picture} fbdata={data} />
            }
          </Card.Text>
        </Card.Body>
      </Card>   
      </div>
  )
}



function LoginForm() {
  return(
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className='m-2'>Name: </label>
      <input type="text" name="name" placeholder='Your Name'></input>
      <label className='m-2'>Email: </label>
      <input type="email" name="email" placeholder='Your Email'></input>
      <input type="submit" value="login" className="btn bg-success text-white my-3"></input>
    </form>
  )
}

function CheckOutFB({fbpic, fbdata}) {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className='d-inline text-success mx-2'>
        Welcome back {fbdata.name}!
      </h3>
      <p className='my-5'>Time to check out?</p>
    </React.Fragment>
  )
}

export default CheckOut;