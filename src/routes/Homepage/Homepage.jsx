import "./Homepage.scss";
import headerImage from "../../assets/homepage/header-photo.jpg";
import teacher from "../../assets/teacher.png";
import students from "../../assets/students.png";
import img1 from "../../assets/homepage/security.png";
import img2 from "../../assets/homepage/acces.png";
import img3 from "../../assets/homepage/efficient.png";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>TEACHY</h1>
        <p>Designed for teachers and students</p>
        <div className="teach-stud">
          <Link to="/login/teacher">
            <img src={teacher} alt="teacher" />
          </Link>
          <Link to="/login/student">
            <img src={students} alt="students" />
          </Link>
        </div>
        <p>
          Best school management platform for teachers and students. <br />
          This software can automate and optimize teacher workload, helps
          schools to simplify enrollment processing, and enables teachers to
          monitor students academic progress.
        </p>
        <h2>Discover the advantages of working with us </h2>
        <ul>
          <li>
            <img src={img1} alt="security" />
            <p>Encrypted</p>
          </li>
          <li>
            <img src={img2} alt="accessible" />
            <p>Accessible</p>
          </li>
          <li>
            <img src={img3} alt="efficient" />
            <p>Efficient</p>
          </li>
        </ul>
      </div>
      <img src={headerImage} alt="student" />
    </div>
  );
};

export default Homepage;
