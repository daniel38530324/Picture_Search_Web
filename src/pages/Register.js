import React, { useState } from "react";
import { Link } from "react-router-dom";
import Picture from "../pictures/logo_register.png";
import Pucture2 from "../pictures/logo_s.png";
import Picture3 from "../pictures/register_01.png";
import Picture4 from "../pictures/register_02.png";
import Picture5 from "../pictures/register_03.png";

const Register = () => {
  let [account, setAccount] = useState("");
  let [passwoed, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div style={{ minHeight: "100vh" }} class="about">
      <nav>
        <img src={Pucture2} />
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/Login" id="current">
              登入/註冊
            </Link>
          </li>
        </ul>
      </nav>
      <section class="contact">
        <section class="logo">
          <img src={Picture} alt="Logo" />
        </section>

        <section class="form">
          <img src={Picture3} className="img1" />
          <img src={Picture4} className="img2" />
          <img src={Picture5} className="img3" />
          <div class="form2">
            <h1>註冊</h1>
            <div>
              <label for="account">帳號</label>
              <input
                onChange={handleChangeAccount}
                type="text"
                id="account"
                name="account"
              />
            </div>
            <br />

            <div>
              <label for="password">密碼</label>
              <input
                onChange={handleChangePassword}
                type="password"
                id="password"
                name="password"
              />
            </div>
            <br />
            <div className="button">
              <button>註冊</button>
            </div>

            <div>{message && <div class="error">{message}</div>}</div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
