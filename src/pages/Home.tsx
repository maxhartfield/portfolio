import React from "react";
import Image from "../components/Image";
import profile from "../images/Profile.jpeg";

function Home() {
  return (
    <>
      <div className="p-3 mb-2 bg-secondary text-white text-center">
        <Image className="profile-img" src={profile}></Image>
        <h1>Hello I'm Max Hartfield!</h1>
        <h2>
          I am a student at the University of Texas at Austin, majoring in
          Computer Science.
        </h2>
        <h2>
          I am looking for a software engineering internship for summer 2024.
        </h2>
        <h2>
          Use the navigation bar and look at my projects and achievements!
        </h2>
      </div>
    </>
  );
}

export default Home;
