import axios from "axios";
import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const { data } = await axios.get("/users/logout");
      localStorage.removeItem("token");
      console.log(data.message);
      toast.success(data.message);

      navigate("/login");
    } catch (error) {
      console.log(error.respomse.data.message);
    }
  };

  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    async function lorem() {
      await axios.get("/users/profile").then((el) => setUserInfo(el.data.user));
    }
    lorem();
  }, []);
  return (
    <>
      <div classNameName="row">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              id="navbarScroll"
            >
              <h2>{userInfo.userName}</h2>
              <div classNameName="btn btn-info" onClick={logOut}>
                LogOut
              </div>
            </div>
          </div>
        </nav>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea
        suscipit accusamus recusandae nobis quibusdam quos, blanditiis aliquid,
        velit labore ducimus, enim ratione architecto iste quae temporibus odit
        eligendi deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quod harum id dolorum aperiam optio placeat nisi aut nam, ipsam
        quo sit qui modi beatae suscipit sunt quibusdam nemo officia voluptas.
      </p>
    </>
  );
};

export default Home;
