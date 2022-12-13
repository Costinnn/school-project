import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./routes/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import StudentLogin from "./routes/Login/StudentLogin/StudentLogin";
import TeacherLogin from "./routes/Login/TeacherLogin/TeacherLogin";
import StudentSignup from "./routes/Signup/StudentSignup/StudentSignup";
import TeacherSignup from "./routes/Signup/TeacherSignup/TeacherSignup";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authReady } = useAuthContext();
  return (
    <div className="app">
      {authReady && (
        <>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/teacher" element={<TeacherLogin />} />
            <Route path="/signup/student" element={<StudentSignup />} />
            <Route path="/signup/teacher" element={<TeacherSignup />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
