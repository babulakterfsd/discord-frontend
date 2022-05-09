// import React from "react";
// import "./WalletConnect.css";
// import logo from "../assets/images/ezgif1.png";
// import crypto from "../assets/images/crypto.png";
// import { ImCheckmark } from "react-icons/im";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { useState } from "react";
// import { ethers } from "ethers";

// function WalletConnect() {
//   return (
//     <div className="mainDiv">
//       <div
//         style={{
//           color: "rgba(0, 0, 0, 0.59)",
//           position: "absolute",
//           display: "flex",
//           "align-items": "center",
//           "justify-content": "center",
//           left: "50%",
//           top: "3%",
//         }}
//       >
//         <AiOutlineArrowLeft size={"15"} />
//         <p style={{ "font-weight": "bold" }}>Back</p>
//       </div>
//       <div className="div1">
//         <img className="crazyLogo" src={logo} alt={"crazyLogo"} />
//         <img className="mobile" src={crypto} alt={"cryptoimage"} />
//       </div>
//       <div className="div2">
//         <div className="holder">
//           <h2>Holder Verification</h2>
//         </div>
//         <div className="progressBox">
//           <div className="box1">
//             <h3 className="boxText">
//               <ImCheckmark
//                 style={{
//                   weight: "10",
//                   background: "none",
//                   color: "63c995",
//                 }}
//               />
//             </h3>
//           </div>
//           <hr className="line12" />
//           <div className="box2">
//             <h3 className="boxText">2</h3>
//           </div>
//           <hr className="line23" />
//           <div className="box3">
//             <h3 className="boxText">3</h3>
//           </div>
//         </div>
//         <div className="progressBoxDetail">
//           <div className="boxDetail1">
//             <h4 className="boxText1">Discord</h4>
//           </div>
//           <div className="boxDetail2">
//             <h4 className="boxText2">
//               Address
//               <br /> Verification
//             </h4>
//           </div>
//           <div className="boxDetail3">
//             <h4 className="boxText3">
//               Final <br /> Steps
//             </h4>
//           </div>
//         </div>
//       </div>
//       <div className="div3">
//         <div
//           style={{ "padding-top": "0", "margin-top": "0" }}
//           className="discordSignIn"
//         >
//           <h2>Connect your wallet.</h2>
//           <h6
//             style={{
//               "font-weight": "normal",
//               margin: "15px 0px 20px 0px ",
//             }}
//           >
//             Select what network and wallet you want connect below{" "}
//           </h6>
//           <div className="checkBox">
//             <input type="checkbox" />
//             <h6 style={{ "font-weight": "normal", "padding-left": "10px" }}>
//               I read and accept
//             </h6>
//           </div>
//         </div>
//         <div>
//           <a href="https://discord.com/api/oauth2/authorize?client_id=967641012371587103&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20guilds">
//             <button type="button" className="walletBtn">
//               <h5>Connect your wallet</h5>
//             </button>
//           </a>
//         </div>
//       </div>
//       <div className="termsOfService">
//         <p>
//           By signing in I agree to platform's
//           <span style={{ color: "blue" }}>Terms of service</span> and
//           <span style={{ color: "blue" }}>Privacy policy</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WalletConnect;
