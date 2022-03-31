import { Outlet } from "react-router-dom";
import Navbar from "../Section/Navbar";
import Discription from "../Section/Discription";
import Form from "../Section/Form";

import "../Style/Home.css"

const Home = () => {
  return (
    <>
      <div className="Home">
        <div>
           <Navbar />
        </div>
        <div className="main_container">
          <Discription />
          <Form/>
        </div>
        <Outlet />
      </div>
    </>
  )
};

export default Home;
