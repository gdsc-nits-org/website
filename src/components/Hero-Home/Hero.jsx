import React from "react";
import "./Hero.scss";
import scroll from "../../assets/images/Scroll-Down.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const Model = () => {
  let [scale, setScale] = useState(1.4);
  useEffect(() => {
    if (window.innerWidth >= 600) {
      setScale((scale = 1.4));
    } else {
      setScale(1.8);
    }
  });

  const Model = useLoader(GLTFLoader, "/gdsc.gltf");
  return (
    <>
      <ambientLight color="#ddd" position={[0.6, 0, -0.6]} intensity={1} scale={100} />
      <pointLight color="#ddd" position={[-0.7, 0, -0.7]} intensity={1} scale={100} />
      <primitive object={Model.scene} scale={scale} rotation={[0, -Math.PI * 0.5, 0]} />
      <ambientLight color="#ddd" position={[0, 0, 0]} />
      <pointLight color="#ddd" position={[0, 2, -2]} scale={100} intensity={5} />
    </>
  );
};

const Hero = () => {
  const [typedColor, setTypedColor] = useState("var(--gdsc-red-1-100)");

  const scrollDown = () => {
    const section = document.querySelector("#gdsc");
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="home-hero">
      <div className="cover"></div>
      <a className="scroll-gif" onClick={scrollDown}>
        <img src={scroll} alt="" className="scroll-img" />
        <div className="circle"></div>
      </a>
      <div className="text">
        <div className="title gdsc">
          <span className="gdsc-title-blue">G</span>
          <span className="gdsc-title-yellow">D</span>
          <span className="gdsc-title-red">S</span>
          <span className="gdsc-title-green">C</span>
        </div>
        <div className="title nits">NIT Silchar</div>
        <div className="twl">
          <div className="tw">Together we</div>
          <div className="learn" style={{ color: typedColor }}>
            <ReactTyped
              strings={["Build", "Solve", "Transcend", "Learn"]}
              typeSpeed={40}
              backSpeed={50}
              loop
              preStringTyped={(i) => {
                i === 1
                  ? setTypedColor("var(--gdsc-yellow-1-100)")
                  : i === 2
                    ? setTypedColor("var(--gdsc-green-1-100)")
                    : i === 3
                      ? setTypedColor("var(--gdsc-blue-1-100)")
                      : i === 0
                        ? setTypedColor("var(--gdsc-red-1-100)")
                        : "";
              }}
            />
          </div>
        </div>
      </div>
      <div className="logo">
        <Canvas>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <ambientLight />
          <ContactShadows position-y={-2} opacity={0.3} blur={2} scale={14} />
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={3}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            enablePan={false}
            touches={false}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
