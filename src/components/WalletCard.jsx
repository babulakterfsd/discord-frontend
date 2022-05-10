import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import logo from "../assets/images/ezgif1.png";
import "./WalletCard.css";
import crypto from "../assets/images/crypto.png";
import { ImCheckmark } from "react-icons/im";
import { AiOutlineArrowLeft } from "react-icons/ai";
import mobile from "../assets/images/mobile.png";
import axios from "axios";

import "./WalletCard.css";



const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [holdNFT, setHoldNFT] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const [message, setMessage] = useState(null);

  const location = useLocation();
  console.log(location?.search.split("=")[1]);

  const sendRequ = (defaultAccount) => {
    axios({
      "method": "GET",
      "url": "https://oukbwwn0c0.execute-api.eu-central-1.amazonaws.com/dev/does_address_own_scientist",
      "params": {
          "address": defaultAccount,
          "discord_id": location?.search.split("=")[1]
      },
      "headers": {
          "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((response) => {
      setHoldNFT(response.data.holds_nft);
      setIsValid(response.data.is_valid);
      setMessage(response.data.message);
    })
  }

  console.log(holdNFT, isValid, message);


  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          getAccountBalance(result[0]);
              // setTimeout(() => {
              //   sendRequ(defaultAccount);
              // }, 1000);
              sendRequ(defaultAccount)
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
      console.log(errorMessage);
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <>
      <div className="mainDiv">
      <div className="div1">
        <img className="mobile" src={mobile} alt={"mobileimage"} style={{height: '100%', marginTop: '-180px'}} />
      </div>
        <div className="div2">
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '80px'}}>
        <div style={{marginLeft: '-220px'}}>
        <Link to="/">
           <img  src={logo} alt={"crazyLogo"} style={{height: '150px', width: '220px', marginTop: '25px'}} />
        </Link>
        </div>
          <h2>Holder Verification</h2>
        </div>
          <div className="progressBox" style={{marginBottom: '10px', marginTop: '-25px'}}>
            <div className="box1">
              <h3 className="boxText">
                <ImCheckmark
                  style={{
                    weight: "10",
                    background: "none",
                    color: "63c995",
                  }}
                />
              </h3>
            </div>
            <hr className="line12" />
            <div
              className="box2"
              style={
                userBalance
                  ? {
                      background: "white",
                      border: "4px solid #63c995",
                    }
                  : null
              }
            >
              <h3 className="boxText">
                {userBalance ? (
                  <ImCheckmark
                    style={{
                      weight: "10",
                      background: "none",
                      color: "#63c995",
                    }}
                  />
                ) : (
                  2
                )}{" "}
              </h3>
            </div>
            <hr className="line23" />
            <div
              className="box3"
              style={userBalance ? { background: "#63c995" } : null}
            >
              <h3 className="boxText">3</h3>
            </div>
          </div>
          <div className="progressBoxDetail">
            <div className="boxDetail1">
              <h4 className="boxText1">Discord</h4>
            </div>
            <div className="boxDetail2">
              <h4
                className="boxText2"
                style={userBalance ? { color: "black" } : null}
              >
                Address
                <br /> Verification
              </h4>
            </div>
            <div className="boxDetail3">
              <h4
                className="boxText3"
                style={userBalance ? { color: "#63c995" } : null}
              >
                Final <br /> Steps
              </h4>
            </div>
          </div>
        </div>
        <div
          className="div3"
          style={userBalance ? { alignItems: "center" } : null}
        >
          {userBalance ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <AiFillCheckCircle size={"400px"} color={"#63c995"} />
                <p fontWeight={"100"}>
                  You’ve have succesfully added your wallet and <br />{" "}
                  succesfully completed your signin. You can login now
                </p> */}
                {holdNFT ? <p style={{color: 'green', fontWeight: '900', fontSize: '24px'}}>Congratulation! You have been given the holder role.</p> : <p style={{color: 'red', fontWeight: '900', fontSize: '24px'}}>No NFT was detected</p>}
              </div>
            </>
          ) : (
            <>
              <div
                style={{ paddingTop: "0", marginTop: "0" }}
                className="discordSignIn"
              >
                <h2>Connect your wallet.</h2>
                <h6
                  style={{
                    fontWeight: "normal",
                    margin: "15px 0px 20px 0px ",
                  }}
                >
                  Connect your wallet and prove us you own CrazyScientists!{" "}
                </h6>
                <div className="checkBox">
                  <input type="checkbox" />
                  <h6 style={{ fontWeight: "normal", paddingLeft: "10px" }}>
                    I read and accept
                  </h6>
                </div>
              </div>
              <div>
                <button className={"walletBtn"} onClick={connectWalletHandler}>
                  <h5>Connect your wallet</h5>

                  {console.log(defaultAccount)}
                  {console.log(userBalance)}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="termsOfService">
        <p>
        By signing in, I agree to the platform’s 
          <span style={{ color: "blue" }}> Terms of Services</span> and its
          <span style={{ color: "blue" }}> Privacy Policy</span>
        </p>
        </div>
      </div>
    </>
  );
};

export default WalletCard;
