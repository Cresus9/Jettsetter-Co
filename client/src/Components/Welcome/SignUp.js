import React,{ useState } from 'react'
import SignIn from './SignIn'
import { useNavigate } from "react-router-dom";
// import './SignUp.css'



export default function SignUp({onLogin}) {

  const navigate = useNavigate();
  const [user, setUser]=useState({email:""})
  const [first_name,setFirst_name]=useState("")
  const [last_name,setLast_name]=useState("")
  const [email, setEmail] = useState("");
  const [phone_number,setPhone_number]=useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        password
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          setUser(data.user)
          localStorage.setItem('token', data.token)
        });
        // navigate('/profil')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  // info update
  



 
  return (
    <div className='signup_div'>
    <form onSubmit={handleSubmit} className='signup_form'>
        <label>First Name</label>
        <input
          type="text"
          name="First_name"
          placeholder="First Name"
          value={first_name}
          onChange={(e)=>setFirst_name(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={(e)=>setLast_name(e.target.value)}
        />

        <label >Email</label>
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label >Phone</label>
        <input
          name="Phone_number"
          placeholder="Phone"
          value={phone_number}
          onChange={(e)=>setPhone_number(e.target.value)}
        />
        <label >Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password_digest"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* <label >Password Confirmation</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /> */}
     
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {/* {errors.map((err) => (
          <error key={err}>{err}</error>
        ))} */}
    </form>
    </div>
  );
}

