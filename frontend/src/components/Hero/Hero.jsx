import React from "react";
import Lottie from "react-lottie";
import { AiOutlineArrowDown } from "react-icons/ai";
import delivery from "../../assets/delivery.json";
import classes from "./hero.module.css";
import MotionWrap from "../../wrapper/MotionWrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import man from "../assets/man.svg";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: delivery,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section style={{ height: "100vh" }} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1 className={classes.title}>Quick Food Delivery</h1>
          <h1 className={classes.title}>Anytime Anywhere</h1>
          <p className={classes.firstMsg}>
            Order Your Food Anytime <span>And...</span>
          </p>
          <p className={classes.secondMsg}>
            We will deliver it <span>At your doorstep</span>
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonSee}>
              <Link to="/cart">Order now!</Link>
            </button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <Lottie options={defaultOptions} height={400} width={600} />
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Hero, "home");
