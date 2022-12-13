import '../LoginStyle.scss'

import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin";

const TeacherLogin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>Teacher Login</h2>
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
        <button className="btn">LOGIN</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
