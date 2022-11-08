import React from "react";
import "./Hero.scss";
import scroll from "../../assets/images/Scroll-Down.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

//imported model
const Model = () => {
  const Model = useLoader(GLTFLoader, "../src/assets/model/gdsclogo4.gltf");
  return <primitive object={Model.scene} scale={1.4} />;
};

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="scroll-gif">
        <img src={scroll} alt="" className="scroll-img" />
        <div className="circle"></div>
      </div>
      <div className="text">
        <div className="title gdsc">GDSC</div>
        <div className="title nits">NIT Silchar</div>
        <div className="twl">
          <div className="tw">Together we</div>
          <div className="learn">Learn</div>
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
            autoRotateSpeed={10}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
