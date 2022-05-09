/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import logo from "../assets/images/ezgif1.png";
import mobile from "../assets/images/mobile.png";
import { FaDiscord } from "react-icons/fa";

function HomePage() {


  return (
    <div className="mainDiv">
      <div className="div1">
        <img className="crazyLogo" src={logo} alt={"crazyLogo"} />
        <img className="mobile" src={mobile} alt={"mobileimage"} />
      </div>
      <div className="div2">
        <div className="holder">
          <h2>Holder Verification</h2>
        </div>
        <div className="progressBox">
          <div className="box box_active">
            <h3 className="boxText">1</h3>
          </div>
          <hr className="line12" />
          <div className="box">
            <h3 className="boxText">2</h3>
          </div>
          <hr className="line23" />
          <div className="box">
            <h3 className="boxText">3</h3>
          </div>
        </div>
        <div className="progressBoxDetail">
          <div className="hboxDetail1">
            <h4 className="hboxText1">Discord</h4>
          </div>
          <div className="hboxDetail2">
            <h4 className="hboxText2">
              Address
              <br /> Verification
            </h4>
          </div>
          <div className="hboxDetail2">
            <h4 className="hboxText2">
              Final <br /> Steps
            </h4>
          </div>
        </div>
      </div>
      <div className="div3">
        <div className="discordSignIn">
          <h2>Let's Get started</h2>
          <h6>Select what network and social media you want signin below </h6>
        </div>
        <div>
          <a href="https://discord.com/api/oauth2/authorize?client_id=972802763480248320&redirect_uri=https%3A%2F%2Fytthef1s07.execute-api.eu-central-1.amazonaws.com%2Flatest%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds%20email">
            <button type="button" className="discordBtn">
              <FaDiscord
                style={{
                  background: "none",
                  color: "white",
                  margin: "0px 10px",
                }}
                size={40}
              />
              <h5>Sign in with Discord*</h5>
            </button>
          </a>
        </div>
      </div>
      <div className="termsOfService">
        <p>
          By signing in I agree to platform's
          <span style={{ color: "blue" }}>Terms of service</span> and
          <span style={{ color: "blue" }}>Privacy policy</span>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
