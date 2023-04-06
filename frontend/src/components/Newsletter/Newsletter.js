import React, { useState } from "react";
import classes from "./newsletter.module.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";
import MotionWrap from "../../wrapper/MotionWrap";
import Navbar from "../Navbar/Navbar";

const Newsletter = () => {
  const [mail, setmail] = useState("");
  const submit = () => {
    alert("s");
  };
  return (
    <section
      className={classes.container}
      style={{
        backgroundColor: "#edf2f8",
        height: "100%",
        width: "100%",
      }}
    >
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Get our latest offers</h2>
        <h2 className={classes.title}>
          <span>Newsletter</span>
        </h2>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Enter email..." />
          <button onclick={submit} style={{ cursor: "pointer" }}>
            <AiOutlineSend className={classes.sendIcon} />
          </button>
        </div>
        <img
          src={newsletterIllustration}
          className={classes.illustration}
          alt=""
        />
      </div>
    </section>
  );
};

export default MotionWrap(Newsletter, "contacts");
