import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

function Home() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const value = window.scrollY;
      if (ref1.current && ref2.current && ref3.current && ref4.current) {
        if (value > 50) {
          ref1.current.style.left = (value - 121) * 8 + "px";
        } else {
          ref1.current.style.left = -340 + "px";
        }
        if (value > 60) {
          ref2.current.style.left = (value - 128) * 9 + "px";
        } else {
          ref2.current.style.left = -340 + "px";
        }
        if (value > 70) {
          ref3.current.style.left = (value - 133) * 9.9 + "px";
        } else {
          ref3.current.style.left = -340 + "px";
        }

        if (value > 80) {
          ref4.current.style.left = (value - 144) * 8 + "px";
          ref4.current.style.transform = `rotate(-90deg) translateY(-100%)`;
        } else {
          ref4.current.style.left = -200 + "px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scale = Math.min(1 + scrollY / 20, 10); // Adjust scaling factor

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "123.4vh",
          background: "£fafafa",
          overflow: "hidden",
          background:
            " linear-gradient(135deg, rgba(0, 56, 255, 0.5), rgba(0, 240, 255, 0.5), rgba(149, 0, 143, 0.5))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            overflow: "hidden",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.div
            style={{
              translateY: -scrollY / 0.5,
              translateX: -scrollY / 0.2,
              scale: 1 + scrollY / 400,
            }}
          >
            <h1 style={{ fontSize: "75px" }}>
              Marketing is an
              <span style={{ fontWeight: "bold" }}> art;</span>
            </h1>
          </motion.div>

          <motion.div
            style={{
              translateY: -scrollY / 0.5,
              translateX: scrollY / 0.2,
              scale: 1 + scrollY / 400,
            }}
          >
            <h1
              style={{
                fontSize: "75px",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              easy to copy but hard to excel.
            </h1>
          </motion.div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            alt="Sliding Image 1"
            style={{
              width: "343.008px",
              height: "119.75px",
              position: "absolute",
              top: "50%",
              left: "-340px",
              transform: "translateY(-50%)",
              background: "#FAD38F",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "864px",
            }}
            ref={ref1}
          >
            <img
              src="images/round1.png"
              alt=""
              style={{
                width: "119.75px",
                height: "119.75px",
              }}
            />
            <div style={{ fontSize: "20px", width: "200px" }}>
              Website & App Development
            </div>
          </div>
          <div
            alt="Sliding Image 1"
            style={{
              width: "343.008px",
              height: "119.75px",
              position: "absolute",
              top: "68%",
              left: "-340px",
              transform: "translateY(-50%)",
              background: "#CEBBAC",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "864px",
            }}
            ref={ref2}
          >
            <img
              src="images/round2.png"
              alt=""
              style={{
                width: "119.75px",
                height: "119.75px",
              }}
            />
            <div style={{ fontSize: "20px", width: "200px" }}>
              SaaS Marketing
            </div>
          </div>
          <div
            alt="Sliding Image 1"
            style={{
              width: "343.008px",
              height: "119.75px",
              position: "absolute",
              top: "86%",
              left: "-340px",
              transform: "translateY(-50%)",
              background: "#A19FAD",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "864px",
            }}
            ref={ref3}
          >
            <img
              src="images/round3.png"
              alt=""
              style={{
                width: "119.75px",
                height: "119.75px",
              }}
            />
            <div style={{ fontSize: "20px", width: "200px" }}>HR Solutions</div>
          </div>

          <p
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "80%",
              left: "-200px",
              fontSize: "100px",
              lineHeight: "90px",
              transform: "rotate(-90deg)",
            }}
            ref={ref4}
          >
            Our <span style={{ fontWeight: "bold" }}>Services</span>
          </p>
        </div>

        <motion.img
          src="images/IMG.png"
          alt="Scrolling Image"
          style={{
            width: `${50 * scale}px`,
            height: `${50 * scale}px`,
            position: "absolute",
            bottom: "0",
            borderRadius: "50%",
            translateX: scrollY / 0.2,
            rotate: scrollY / 0.5,
            translateY: -scrollY / 20,
            background:
              "linear-gradient(90deg, rgba(121,121,255,1) 0%, rgba(226,226,245,1) 53%, rgba(255,255,255,1) 100%)",
            border: " 1px solid blue",
          }}
        />
      </div>
    </>
  );
}

export default Home;
