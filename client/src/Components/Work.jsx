import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Work.css";

const Work = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    category: "",
    email: "",
    contact: "",
  });

  let name, value;

  // Our onchange function

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // Our onclick function

  const PostData = async (e) => {
    e.preventDefault();

    const { firstname, lastname, category, email, contact } = user;

    const res = await fetch("/work", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        category,
        email,
        contact,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Please fill the data");
      console.log("Please fil the data");
    } else {
      window.alert(`${firstname} Successfully Submitted`);
      console.log(`${firstname} Successfully Submitted`);
      history.push("/");
    }
  };

  return (
    <>
      <div className="work">
        <div className="work__heading">
          <h1>WORK</h1>
        </div>
        <div className="work__form">
          <div className="form__left" method="POST">
            <div className="form__leftheading">
              <h4>Welcome</h4>
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="firstname"
                autoComplete="off"
                value={user.firstname}
                onChange={handleInputs}
                placeholder="First Name"
              />
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="lastname"
                autoComplete="off"
                value={user.lastname}
                onChange={handleInputs}
                placeholder="Last Name"
              />
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="category"
                autoComplete="off"
                value={user.category}
                onChange={handleInputs}
                placeholder="Work"
              />
            </div>
            <div className="form__inputs">
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"
              />
            </div>
            <div className="form__inputs">
              <input
                type="tel"
                name="contact"
                value={user.contact}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="Contact Number"
              />
            </div>
            <div className="form__submit">
              <button type="submit" onClick={PostData} className="form__btn">
                Submit
              </button>
            </div>
          </div>
          <div className="form__right">
            <div className="form__rightheading">
              <h4>Let's get in touch</h4>
            </div>
            <div className="form__rightinfo">
              <p>
                In the work input filled write your work,what you need. By
                filling the form and submit it,after some time we will contact
                you to start your work or project. So stay connected with us.
              </p>
            </div>
            <div className="form__contact">
              <div className="form__location">
                <i className="fas fa-map-marker-alt"></i>
                <p>C.B.D Belapur Navi Mumbai,400614</p>
              </div>
              <div className="form__email">
                <i className="fas fa-envelope"></i>
                <p>rajay2766@gmail.com</p>
              </div>
              <div className="form__call">
                <i className="fas fa-phone"></i>
                <p>9930539816</p>
              </div>
            </div>
            <div className="form__follow">
              <div className="form__heading">
                <h5>Follow Us On</h5>
              </div>
              <div className="form__socialmedias">
                <div className="form__instatweet">
                  <div className="form__twitter">
                    <i className="fab fa-twitter "></i>
                    <p>Ajay Rathod</p>
                  </div>
                  <div className="form__instagram">
                    <i className="fab fa-instagram"></i>
                    <p>ajayrathod_2001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
