import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default () => {
  // References
  const line1ref = useRef();
  const line2ref = useRef();
  const line3ref = useRef();
  const circle1ref = useRef();
  const circle2ref = useRef();
  const circle3ref = useRef();
  const headerTextRef = useRef();
  const headerText2Ref = useRef();
  const headerTextBoxRef = useRef();
  const headerTextBox2Ref = useRef();
  const bgVideoRef = useRef();

  // Init Animations
  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(headerTextBox2Ref.current, {
      rotate: "180",
      translate: "100%",
      translateY: "100%",
    });

    // Entry animation
    tl.to(".leftPane", { translateX: "-100%", delay: 0.3, stagger: 0.1 });
    tl.to(".rightPane", { translateX: "100%", stagger: 0.1 }, "<");

    // Shape animations
    tl.to(
      line1ref.current,
      {
        duration: 1,

        attr: { x2: "3%" },
      },
      "shapeAnimation"
    );
    tl.to(
      circle1ref.current,
      {
        duration: 1,
        attr: { cx: "3%" },
      },
      "shapeAnimation"
    );
    tl.to(
      line2ref.current,
      {
        duration: 1,
        attr: { y2: "95%" },
      },
      "shapeAnimation"
    );
    tl.to(
      circle2ref.current,
      {
        duration: 1,
        attr: { cy: "95%" },
      },
      "shapeAnimation"
    );
    tl.to(
      line3ref.current,
      {
        duration: 1,
        attr: { y2: "35%", x2: "85%" },
      },
      "shapeAnimation"
    );
    tl.to(
      circle3ref.current,
      {
        duration: 1,
        attr: { cy: "35%", cx: "85%" },
      },
      "shapeAnimation"
    );

    tl.add("textAnimLabel", "<0.9");
    // Header Text animation
    tl.to(
      headerTextBoxRef.current,
      { width: 0, display: "block", opacity: 1 },
      "textAnimLabel"
    );
    tl.to(headerTextRef.current, { visibility: "visible", opacity: 1 }, "<0.1");
    tl.to(
      headerTextBoxRef.current,
      { width: 0, display: "hidden" },
      "textAnimLabel"
    );
    tl.to(
      headerText2Ref.current,
      { visibility: "visible", opacity: 1 },
      "<0.1"
    );
    tl.to(
      headerTextBox2Ref.current,
      {
        width: "0",
        transformOrigin: "0% 50%",
        visibility: "visible",
        opacity: 1,
      },
      "textAnimLabel"
    );

    tl.to(".navbar-item", { opacity: 1, stagger: 0.1, duration: 0.8 });
    tl.to(".icon", { opacity: 1 }, "<");
  }, []);

  return (
    <>
      <div className=" w-full h-screen relative overflow-clip  font-sans">
        <div className="leftPane absolute start-0 w-1/2 h-full bg-black z-50"></div>
        <div className="rightPane absolute start-1/2 w-1/2 h-full bg-black z-50"></div>
        <div className="leftPane absolute start-0 w-1/2 h-full bg-white z-40"></div>
        <div className="rightPane absolute start-1/2 w-1/2 h-full bg-white z-40"></div>
        <div className="absolute start-0 h-full w-full backdrop-blur-3xl  -z-10"></div>
        <div className="absolute start-0 w-full h-full -z-20">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/flint-a8bd6.appspot.com/o/video1.mp4?alt=media&token=80252177-adac-46b0-b28d-bcfee490427c"
            ref={bgVideoRef}
          ></video>
        </div>
        <div className="absolute end-0 m-5 h-full w-full z-0">
          <svg
            className=" overflow-visible "
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={line1ref}
              x1={"100%"}
              x2={"100%"}
              y1={10}
              y2={10}
              stroke="white"
            />
            <circle ref={circle1ref} cx={"100%"} cy={10} r={5} fill="white" />
            <line
              ref={line2ref}
              y1={10}
              y2={"0%"}
              x1={"100%"}
              x2={"100%"}
              stroke="white"
            />
            <circle ref={circle2ref} cy={"0%"} cx={"100%"} r={5} fill="white" />
            <line
              ref={line3ref}
              y1={10}
              y2={"0%"}
              x1={"100%"}
              x2={"100%"}
              stroke="white"
            />
            <circle ref={circle3ref} cy={"0%"} cx={"100%"} r={5} fill="white" />
          </svg>
        </div>
        <div className="text-white absolute  w-full h-full z-20">
          <div className="relative h-full w-full">
            {/* Main Header Text */}
            <div className="h-fit w-fit absolute start-0 top-1/2 -translate-y-1/2 mx-24">
              <div
                ref={headerTextBoxRef}
                className="h-full w-full bg-white absolute hidden opacity-0"
              ></div>
              <p ref={headerTextRef} className="text-9xl invisible opacity-0">
                FYI Club
              </p>
            </div>
            {/* Header Caption text */}
            <div className="h-fit w-fit absolute end-0 top-[80%] -translate-y-1/2 mx-24">
              <svg className="absolute overflow-hidden w-full h-full">
                <rect
                  ref={headerTextBox2Ref}
                  width={"100%"}
                  height={"100%"}
                  fill="white"
                  className="invisible "
                  opacity={0}
                />
              </svg>
              <p ref={headerText2Ref} className="text-3xl invisible opacity-0">
                Be Smart.
                <br />
                Be the exception.
              </p>
            </div>
            {/* Navbar */}
            <div className="absolute start-0 w-full ">
              <div className="flex flex-row mr-28 m-8 items-start">
                {/* Navbar Icon */}
                <div className="icon flex-grow opacity-0">
                  <img src="/logo.png" className="h-28 w-28" />
                </div>
                {/* Navbar Menu */}
                <div className="mt-8">
                  <ul className="flex flex-row gap-10 text-xl">
                    <a href="#home">
                      <li className="navbar-item opacity-0 hover:text-stone-300">
                        Home
                      </li>
                    </a>
                    <a href="#events">
                      <li className="navbar-item opacity-0 hover:text-stone-300">
                        Events
                      </li>
                    </a>
                    <a href="#gallery">
                      <li className="navbar-item opacity-0 hover:text-stone-300">
                        Gallery
                      </li>
                    </a>
                    <a href="#about">
                      <li className="navbar-item opacity-0 hover:text-stone-300">
                        About
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
