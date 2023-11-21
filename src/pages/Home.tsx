import React from "react";
import Image from "../components/Image";
import profile from "../images/Profile.jpeg";

function Home() {
  return (
    <>
      <div className="p-3 mb-2 bg-secondary text-white">
        <h1>Hello I'm Max Hartfield!</h1>
        <h2>
          I am a student at the University of Texas at Austin, majoring in
          Computer Science.
        </h2>
        <h3>
          I am looking for a software engineering internship for summer 2024.
        </h3>
        <Image src={profile}></Image>
      </div>
    </>
  );
}

export default Home;
