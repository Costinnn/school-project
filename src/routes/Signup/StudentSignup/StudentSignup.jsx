import '../SignupStyle.scss'

import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";

const StudentSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2>Student Signup</h2>
        <label className='email'>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className='password'>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="btn">SIGN UP</button>
      </form>
    </div>
  );
};

export default StudentSignup;
